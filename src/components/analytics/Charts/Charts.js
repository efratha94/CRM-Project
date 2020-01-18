import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class Charts extends Component{

    render(){
        return (
            <div>
                
            </div>
        )
    }
}

export default Charts