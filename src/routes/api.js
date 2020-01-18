const express = require("express")
const router = express.Router()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("mysql://root:tedds19942@localhost/crm_project")

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

module.exports = router