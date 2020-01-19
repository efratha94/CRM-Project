import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

@inject("person", "clients")
@observer

class SalesByCountry extends Component{

    componentDidMount(){
        this.props.clients.salesByCountry()
    }


    createChartData(array){
        let dataArray = []
        array.map(item => dataArray.push({Country: item.country, Sales: item["COUNT(sold)"]}))
        return dataArray
    }

    render(){
        const salesOrganziedByCountries = this.props.clients.countriesTotalSales
        const chartDataTwo = salesOrganziedByCountries[0] ? this.createChartData(salesOrganziedByCountries) : null

        return (
            <div>
                <h1>Sales By Country</h1>
                
                <BarChart width={500} height={250} data={chartDataTwo} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Country" interval={0}/>
                    <YAxis />
                    <Tooltip offset={0} label="false"/>
                    <Legend />
                    <Bar dataKey="Sales" fill="#e74c3c"/>
                    
                </BarChart>
                
            </div>
        )
    }
}

export default SalesByCountry