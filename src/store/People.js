const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:tedds19942@localhost/crm_project')
const clientData = require("../../react-crm-ex-efratha94/data")
const moment = require("moment")

const populateDB = function(){
    clientData.forEach(client => {

        let contactDate = client.firstContact
        let newContactDate = moment(contactDate).format("YYYY-MM-DD HH:mm:ss")
        sequelize.query(`INSERT INTO clients (id, name, first_contact, email, emailType, sold, owner, country) VALUES('${client._id}', '${client.name}', '${newContactDate}', '${client.email}', '${client.emailType}', ${client.sold}, '${client.owner}', '${client.country}')`)

    })
}



