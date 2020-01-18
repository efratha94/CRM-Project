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
        this.setState({ showPopup: true })
    }

    closePopup = () => {
        this.setState({ showPopup: false })
    }

    render() {
        const client1 = this.props.client
        return (
            <div key={client1.index} className="client-each">
                {!this.state.showPopup ? null : <Popup client={client1} close={this.closePopup} />}
                <p onClick={this.showPopup} className="firstName">{client1.firstName}</p>
                <p className="lastName" onClick={this.showPopup}>{client1.lastName}</p>
                <p className="clientCountry">{client1.country}</p>
                <p className="firstContact">{client1.firstContact}</p>
                {client1.emailType ? <p className="clientEmailType">{client1.emailType}</p> : <p>--</p>}
                {client1.sold? <p className="sold">Yes</p> : <p className="sold">No</p>}
                <p className="employer">{client1.employer}</p>
            </div>
        )
    }
}

export default Client