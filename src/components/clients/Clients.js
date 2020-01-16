import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import Popup from "./Popup"
import Client from "./Client"
const ClientsJSON = require("../../react-crm-ex-efratha94/data")

@inject("person", "clients")
@observer

class Clients extends Component {
    // constructor() {
    //     super()
    //     this.state = { showPopup: false }
    // }

    // showPopup = () =>{
    //     this.props.
    // }

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
                    <span>Owner</span>
                </div>
                {clientsArray.map((client, index) => {
                    return (
                        <div key={index}>
                            <Client client={client} index={index} />
                        </div>
                    )
                })}
                {/* {this.showPopup ? <Popup hidePopup={this.hidePopup}/> : null} */}
            </div>
        )
    }
}

export default Clients