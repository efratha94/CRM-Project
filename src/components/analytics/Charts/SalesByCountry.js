import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class SalesByCountry extends Component{
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}

export default SalesByCountry