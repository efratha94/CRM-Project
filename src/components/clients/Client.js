import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import Popup from "./Popup"

@inject("person", "clients")
@observer

class Client extends Component {
    constructor() {
        super()
        this.state = { showPopup: false }
    }

    showPopup = () => {
        // this.props.clients.updateClient(this.props.client.id)
        this.setState({showPopup: true})
    }

    render() {
        const client1 = this.props.client
        return (
            <div key={client1.index} className="client-each" onClick={this.showPopup}>
                {!this.state.showPopup ? null : <Popup client={client1}/>}
                <p>{client1.firstName} {client1.lastName}</p>
                <p>{client1.country}</p>
                <p>{client1.firstContact}</p>
                <p>{client1.emailType}</p>
                <p>{client1.sold}</p>
                <p>{client1.owner}</p>
            </div>
        )
    }
}

export default Client