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

module.exports = router