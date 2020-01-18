import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import emailsSent from "./EmailsSent"
import hottestCountry from "./HottestsCountry"
import NewClients from "./NewClients"
import outstandingClients from "./OutstandingClients"


@inject("person", "clients")
@observer

class Badges extends Component{

    render(){
        return (
            <div id="badges-container">
                <NewClients />
            </div>
        )
    }
}

export default Badges