import {observable} from "mobx"

export class Person{
    @observable firstName
    @observable lastName
    @observable email
    @observable firstContact
    @observable emailType
    @observable sold
    @observable owner
    @observable country
    constructor(id, firstName, lastName, email, firstContact, emailType, sold, owner, country){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.firstContact = firstContact
        this.emailType = emailType
        this.sold = sold
        this.owner = owner
        this.country = country
    }
}