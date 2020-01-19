import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from "moment"

@inject("person", "clients")
@observer

class ClientAcquisition extends Component{
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

export default ClientAcquisition