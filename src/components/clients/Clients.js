import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import Popup from "./Popup"
import Client from "./Client"
const ClientsJSON = require("../../react-crm-ex-efratha94/data")

@inject("person", "clients")
@observer

class Clients extends Component {
    hidePopup = () => {
        this.setState({ showPopup: false })
    }



    render() {
        const clientsArray = this.props.clients.clients
        return (
            <div id="all-clients">
                <div id="client-categories">
                    <span>Name</span>
                    <span>Surame</span>
                    <span>Country</span>
                    <span>First Contact</span>
                    <span>Email Type</span>
                    <span>Sold</span>
                    <span>Employer</span>
                </div>
                {clientsArray.map((client, index) => {
                    return (
                        <div key={index}>
                            <Client client={client} index={index} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Clients