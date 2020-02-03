import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

@inject("person", "clients")
@observer

class SalesByCountry extends Component{
    state ={
        category: "Country"
    }

    componentDidMount(){
        this.props.clients.salesByParameter(this.state.category)
    }

    handleChange = (event) => {
        this.setState({
            category: event.target.value
        }, function(){this.props.clients.salesByParameter(this.state.category)})
    }

    createChartData(array){
        console.log(array)
        let dataArray = []
        array.map((item, index) => {
            dataArray.push({[Object.keys(array[index])[0]]: Object.values(array[index])[0], Sales: item["COUNT(sold)"]})
        })
        console.log(dataArray)
        return dataArray
    }

    render(){
        const salesByParam = this.props.clients.salesByParameterArray
        const chartDataTwo = salesByParam[0] ? this.createChartData(salesByParam) : null
        const categories = ["Country", "Email Type", "Month", "Employer"]
        console.log(salesByParam)
        // if (!Object.values(salesByParam).includes("COUNT(sold)")){
        //     console.log("nkn")
        // }

        return (
            <div>
                <h1>Sales By {this.state.category}</h1>
                <select onChange={this.handleChange} name="category" value={this.state.categoryValue}>
                    {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </select>

                <BarChart width={500} height={250} data={chartDataTwo} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={this.state.category == "Email Type" ? "emailType" : this.state.category} interval={0}/>
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