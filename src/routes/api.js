const express = require("express")
const router = express.Router()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("mysql://root:tedds19942@localhost/crm_project")
const moment = require("moment")

router.get("/clients", async function(req, res){
    let clients = await sequelize.query(`SELECT * FROM clients`)
    res.send(clients[0])
})

router.put("/clients", async function(req, res){
    const updateRequest = req.body.data
    const fullName = `${updateRequest.firstName} ${updateRequest.lastName}`
    const update = await sequelize.query(`UPDATE clients SET clients.name = '${fullName}', clients.country = '${updateRequest.country}' WHERE clients.id = '${updateRequest.id}'`)
    res.end()
})

router.put("/update", async function(req, res){
    const updateStatus = req.body.data
    const update = await sequelize.query(`UPDATE clients SET clients.${updateStatus.propertyToUpdate} = '${updateStatus.newValue}' WHERE clients.id = '${updateStatus.id}'`)
    res.end()
})

router.post("/newClient", async function(req, res){
    const newClient = req.body
    const fullName = `${newClient.firstName} ${newClient.lastName}`
    const dateToday = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    const postReq = await sequelize.query(`INSERT INTO clients VALUES('${newClient.id}', '${fullName}', '${newClient.email}', '${dateToday}', '${newClient.emailType}', ${newClient.sold}, '${newClient.employer}', '${newClient.country}')`)
    res.end()
})

router.get("/employers", async function(req, res){
    const employers = await sequelize.query(`SELECT employer, COUNT(sold) FROM clients WHERE clients.sold=1 GROUP BY employer ORDER BY COUNT(sold) DESC`)
    res.send(employers[0])
})


router.get("/countries", async function(req, res){
    const countries = await sequelize.query(`SELECT country, COUNT(sold) FROM clients WHERE clients.sold=1 GROUP BY country`)
    res.send(countries[0])
})

router.get("/salesSinceDate", async function(req, res){
    const date30DaysAgo = moment().subtract(30, 'days').toISOString()
    const dateToday = moment().toISOString()

    const someDate = await sequelize.query(`SELECT first_contact FROM clients WHERE clients.id = '5b9f48a201bd0a73733a1639'`)
    const someRandomDate = someDate[0][0].first_contact.toISOString()
    const days30Prior = moment(someRandomDate).subtract(30, 'days').toISOString()

    const sinceDate = await sequelize.query(`SELECT SUM(sold), first_contact FROM clients WHERE first_contact BETWEEN '${days30Prior}' AND '${someRandomDate}' GROUP BY first_contact ORDER BY first_contact ASC`)
    res.send(sinceDate[0])
})

router.get("/byAcquisition", async function(req, res){
    const dateToday = moment().toISOString()
    const threeYearsAgo = moment().subtract(3, 'years').toISOString()
    const oneYearAgo = moment().subtract(365, 'days').toISOString()
    const sixMonthsAgo = moment().subtract(6, 'months').toISOString()
    
    const untilThreeYearsAgo = await sequelize.query(`SELECT COUNT(*) FROM clients WHERE first_contact BETWEEN '2000-07-19T17:02:28.559Z' AND '${threeYearsAgo}' ORDER BY first_contact ASC`)
    const threeToOneYearAgo = await sequelize.query(`SELECT COUNT(*) FROM clients WHERE first_contact BETWEEN '${threeYearsAgo}' AND '${oneYearAgo}' ORDER BY first_contact ASC`)
    const lastYear = await sequelize.query(`SELECT COUNT(*) FROM clients WHERE first_contact BETWEEN '${oneYearAgo}' AND '${dateToday}' ORDER BY first_contact ASC`)
    const acquisitionByDate = [{time: " > 3 Years", count: untilThreeYearsAgo[0][0]['COUNT(*)']}, {time: "1-3 Years", count: threeToOneYearAgo[0][0]['COUNT(*)']}, {time: "< 12 Months", count: lastYear[0][0]['COUNT(*)']}]
    res.send(acquisitionByDate)
})

router.get("/:category", async function(req, res){
    const category = req.params.category
    if (category === "Email Type"){
        let byEmail = await sequelize.query(`SELECT emailType, COUNT(sold) FROM clients WHERE clients.sold=1 GROUP BY emailType`)
        res.send(byEmail[0])
    
    } else if (category == "Month") {
        let byMonth = await sequelize.query(`SELECT first_contact, COUNT(sold) FROM clients WHERE clients.sold=1 GROUP BY first_contact`)
        let months = byMonth[0].map(sale => sale.first_contact.getMonth() + 1)
        const monthData = {}
        for (let i of months){
            if (!monthData[i]){
                monthData[i] = 1
            } else {
                monthData[i]++
            }
        }
        res.send(monthData)
    }
    const salesByCategory = await sequelize.query(`SELECT ${category}, COUNT(sold) FROM clients WHERE clients.sold=1 GROUP BY ${category}`)
    res.send(salesByCategory[0])
})
module.exports = router