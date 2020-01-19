import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class OutstandingClients extends Component{

    render(){
        const outstandingClients = this.props.clients.clients.filter(client => client.sold != "1")
        
        return (
            
            <div>
                <h2>{outstandingClients.length}</h2>
                <h4>Outstanding Clients</h4>
            </div>
        )
    }
}

export default OutstandingClients