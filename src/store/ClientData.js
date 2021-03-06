import { observable, computed, action, toJS } from 'mobx';
import { Person } from "./Person"
import moment from "moment"
import axios from "axios"

const ClientsJSON = require("../react-crm-ex-efratha94/data")


export class ClientData {
    constructor() {
    }
    categories = ["Name", "Surname", "Country", "First Contact", "Email Type", "Sold", "Employer"]
    @observable clients = []
    @observable employersBySales = []
    @observable countriesTotalSales = []
    @observable salesByParameterArray = []
    @observable salesByDate = []
    @observable clientsByAcquisition = []
    @observable clientsFiltered = []

    @action getClients = async () => {
        const clientsInDB = await axios.get("http://localhost:3002/clients")
        
        let clientsEach = clientsInDB.data.map(client => {
            let clientNameSplitted = client.name.split(" ")
            let contactDate = client.first_contact
            let newContactDate = moment(contactDate).format("YYYY-MM-DD")
            client = new Person(client.id, clientNameSplitted[0], clientNameSplitted[1], client.email, newContactDate, client.emailType, client.sold, client.employer, client.country)
            return client
        })
        this.clients = clientsEach
    }

    @action updateClient = async (id, firstName, lastName, country) => {
        let personToUpdate = this.clients.find(client => client.id === id)
        personToUpdate.firstName = firstName
        personToUpdate.lastName = lastName
        personToUpdate.country = country
        await axios.put("http://localhost:3002/clients", { data: { id: personToUpdate.id, firstName: personToUpdate.firstName, lastName: personToUpdate.lastName, country: personToUpdate.country } })
    }

    @action updateClientStatus = async (id, propertyToUpdate, newValue) => {
        let personToUpdate = this.clients.find(client => client.id === id)
        personToUpdate[propertyToUpdate] = newValue
        await axios.put("http://localhost:3002/update", { data: { id: id, propertyToUpdate: propertyToUpdate, newValue: newValue } })
    }

    @action addNewClients = async (firstName, lastName, country, employer) => {
        const idAlmostGenerated = await axios.get("https://helloacm.com/api/guid-generator/?n=1&nohyphens")
        const idGenerated = idAlmostGenerated.data.guid[0]
        const dateToday = moment(new Date()).format("YYYY-MM-DD")
        const newClient = new Person(idGenerated, firstName, lastName, null, dateToday, null, false, employer, country)
        this.clients.push(newClient)
        await axios.post("http://localhost:3002/newClient", newClient)
    }

    @action employersBySalesFunction = async() => {
        const employersRequest = await axios.get("http://localhost:3002/employers")
        this.employersBySales = employersRequest.data

    }

    @action salesByCountry = async() =>{
        const countriesRequest = await axios.get("http://localhost:3002/countries")
        this.countriesTotalSales = countriesRequest.data
        // console.log(countriesRequest.data)
    }

    @action salesSinceDate = async() => {
        const byDate = await axios.get("http://localhost:3002/salesSinceDate")
        this.salesByDate = byDate.data
    }

    @action acquisitionDate = async() => {
        const byAcquisition = await axios.get("http://localhost:3002/byAcquisition")
        this.clientsByAcquisition = byAcquisition.data
    }

    @action clientsByFilter(input, category) {
        
        if (input && category) {
            let filteredBy = this.clients.filter(client => {
                let clientValue = client[category].toLowerCase()
                return clientValue.includes(input)
            })
            this.clientsFiltered = filteredBy
        } else {
            this.clientsFiltered = []
        }
    }

    @action salesByParameter = async (category) => {
        const salesBy = await axios.get(`http://localhost:3002/${category}`)
        this.salesByParameterArray = salesBy.data
        // console.log(salesBy.data)
    }
}