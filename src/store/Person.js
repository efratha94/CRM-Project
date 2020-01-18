import {observable} from "mobx"

export class Person{
    @observable firstName
    @observable lastName
    @observable email
    @observable firstContact
    @observable emailType
    @observable sold
    @observable employer
    @observable country
    constructor(id, firstName, lastName, email, firstContact, emailType, sold, employer, country){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.firstContact = firstContact
        this.emailType = emailType
        this.sold = sold
        this.employer = employer
        this.country = country
    }
}