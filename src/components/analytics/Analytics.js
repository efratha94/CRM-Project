import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import Badges from "./Badges/Badges"
import Charts from "./Charts/Charts"

@inject("person", "clients")
@observer

class Analytics extends Component{
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return (
            <div id="analytics-container">
                <Badges />
                <Charts />
            </div>
        )
    }
}

export default Analytics