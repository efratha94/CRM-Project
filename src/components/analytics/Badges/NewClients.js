import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class newClients extends Component{


    render(){
        let clientsLengthPromise = this.props.clients.getNewClients()

        return (
            <div>

            </div>
        )
    }
}

export default newClients