import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class newClients extends Component {


    render() {
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        const currentMonth = (new Date).getMonth() + 1
        const currentYear = (new Date).getFullYear()
        const firstContacts = this.props.clients.clients.map(client => client.firstContact.split("-"))
        const relevantNewClients = firstContacts.filter(client => client[1] == currentMonth && client[0] == currentYear).length
           

        return (
            <div>
                <h2>{relevantNewClients}</h2>
                <h4>New clients in {months[currentMonth -1]}</h4>
            </div>
        )
    }
}

export default newClients