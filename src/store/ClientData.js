import { observable, computed, action } from 'mobx';
import {Person} from "./Person"
import moment from "moment"

const ClientsJSON = require("../react-crm-ex-efratha94/data")

export class ClientData{
    constructor(){
        ClientsJSON.map(client => this.addClient(client))
        console.log(this.clients[0])
    }

    @observable clients = []

    @action addClient = (client) => {
        let clientNameSplitted = client.name.split(" ")
        let contactDate = client.firstContact
        let newContactDate = moment(contactDate).format("YYYY-MM-DD")
        client = new Person(client._id, clientNameSplitted[0], clientNameSplitted[1], client.email, newContactDate, client.emailType, client.sold, client.owner, client.country)
        this.clients.push(client)
    }

    @action updateClient = (id, firstName, lastName, country) => {
        
        let personToUpdate = this.clients.find(client => client.id === id)
        // console.log(personToUpdate)
    }
}