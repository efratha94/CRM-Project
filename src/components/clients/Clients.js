import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import Client from "./Client"
import Search from "./Search"
import axios from "axios"

@inject("person", "clients")
@observer

class Clients extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

  

    render() {

        const categoriesArray = this.props.clients.categories
        const clientsArray = this.props.clients.clients
        const filteredClients = this.props.clients.clientsFiltered

        return (
            <div id="all-clients">
                <Search />
                <div id="client-categories">
                    {categoriesArray.map((category, index) => <span key={index}>{category}</span>)}
                </div>
                {filteredClients.length !== 0 ? 
                filteredClients.map((client, index) => {
                    return (
                        <div key={index}>
                            <Client client={client} index={index} />
                            </div>
                    )
                })
                : clientsArray.map((client, index) => {
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