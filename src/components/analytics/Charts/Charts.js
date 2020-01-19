import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import ClientAcquisition from "./ClientAcquisition"
import SalesByCountry from "./SalesByCountry"
import SalesSince from "./SalesSince"
import TopEmployees from "./TopEmployees"

@inject("person", "clients")
@observer

class Charts extends Component{

    render(){
        return (
            <div>
                <TopEmployees />
                <SalesByCountry />
            </div>
        )
    }
}

export default Charts