import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class newClients extends Component {


    render() {
        // this.props.clients.getNewClients()
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        const currentMonth = (new Date).getMonth()
        // const firstContacts = this.props.clients.clients.map(client => client.firstContact)
        // console.log(firstContacts)

        return (
            <div>
                {/* <h2>{this.props.clients.length}</h2>
                <h4>New clients in {months[currentMonth]}</h4> */}
            </div>
        )
    }
}

export default newClients