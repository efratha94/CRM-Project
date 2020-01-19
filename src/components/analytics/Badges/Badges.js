import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import EmailsSent from "./EmailsSent"
import HottestCountry from "./HottestsCountry"
import NewClients from "./NewClients"
import OutstandingClients from "./OutstandingClients"


@inject("person", "clients")
@observer

class Badges extends Component{

    render(){
        return (
            <div id="badges-container">
                <NewClients />
                <EmailsSent />
                <OutstandingClients />
                <HottestCountry />
            </div>
        )
    }
}

export default Badges