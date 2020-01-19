import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from "moment"

@inject("person", "clients")
@observer

class SalesSince extends Component {
    constructor(props) {
        super(props)
        let earlyDate
        let laterDate
    }
    componentDidMount() {
        this.props.clients.salesSinceDate()
    }

    createChartDataThree(array) {
        let datesArray = []
        this.earlyDate = moment(array[0].first_contact).format("DD-MM-YYYY")
        this.laterDate = moment(array[array.length - 1].first_contact).format("DD-MM-YYYY")
        array.map(item => {
            let itemNotParsed = parseInt(item["SUM(sold)"])
            let newDate = moment(item.first_contact).format("DD-MM-YYYY")
            datesArray.push({ Sales: itemNotParsed, Date: newDate })
        })
        return datesArray

    }

    render() {
        const salesSinceLastMonth = this.props.clients.salesByDate
        const chartDataThree = salesSinceLastMonth[0] ? this.createChartDataThree(salesSinceLastMonth) : null

        return (
            <div>
                <h1>Sales Between {this.earlyDate} And {this.laterDate}</h1>
                <LineChart width={730} height={250} data={chartDataThree}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" interval={3} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#e67e22" strokeWidth={2.5} />
                </LineChart>
            </div>
        )
    }
}

export default SalesSince