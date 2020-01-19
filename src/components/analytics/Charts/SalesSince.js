import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

@inject("person", "clients")
@observer

class SalesSince extends Component{

    componentDidMount(){
        this.props.clients.salesSinceDate()
    }

    createChartDataThree(array){
        let datesArray = []
        array.map(item => datesArray.push({Sales: item["COUNT(sold)"], Date: item.first_contact}))
        return datesArray

    }

    render(){
        const salesSinceLastMonth = this.props.clients.salesByDate
        const chartDataThree = salesSinceLastMonth[0] ? this.createChartDataThree(salesSinceLastMonth) : null
        console.log(chartDataThree)
        return (
            <div>
                
            </div>
        )
    }
}

export default SalesSince