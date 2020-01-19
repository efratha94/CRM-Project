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

// router.get("/badges/bymonth", async function(req, res){
//     const currentMonth = (new Date).getMonth() + 1
//     const byMonth = await sequelize.query(`SELECT clients.first_contact FROM clients WHERE MONTH(clients.first_contact) = ${currentMonth}`)
//     const numberOfNewClients = byMonth[0].length
//     res.send(`${byMonth[0].length}`)
// })

module.exports = router