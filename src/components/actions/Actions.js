import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import Update from "./Update"
import AddClient from "./AddClient"

@inject("person", "clients")
@observer

class Actions extends Component {

    render() {
        const employerArray = []
        this.props.clients.clients.map(client => {
            if (!employerArray.includes(client.employer)){
                employerArray.push(client.employer)
            }
        })
        

        return (
            <div id="update-container">
                <Update employers={employerArray}/>
                <AddClient employers={employerArray}/>
            </div>
        )
    }
}

export default Actions