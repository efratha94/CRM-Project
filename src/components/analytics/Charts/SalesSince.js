import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from "moment"

@inject("person", "clients")
@observer

class SalesSince extends Component {

    componentDidMount() {
        this.props.clients.salesSinceDate()
    }

    createChartDataThree(array) {
        let datesArray = []
        array.map(item => {
            let itemNotParsed = parseInt(item["SUM(sold)"])
            let newDate = moment(item.first_contact).format("YYYY-MM-DD")
            datesArray.push({ Sales: itemNotParsed, Date: newDate })
        })
        return datesArray

    }

    render() {
        const salesSinceLastMonth = this.props.clients.salesByDate
        const chartDataThree = salesSinceLastMonth[0] ? this.createChartDataThree(salesSinceLastMonth) : null
        console.log(chartDataThree)
        return (
            <div>
                <LineChart width={730} height={250} data={chartDataThree}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" interval={3}/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}

export default SalesSince