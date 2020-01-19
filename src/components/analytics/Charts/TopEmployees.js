import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { toJS } from "mobx"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

@inject("person", "clients")
@observer

class TopEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // getOwnersWhoseEmployeesHaveSold = () => {
    //     const employersBySalesCopy = {...this.state.employersBySales}
    //     const clientsCopy = [...this.props.clients.clients]
    //     clientsCopy.map(client => {
    //         if (!employersBySalesCopy.hasOwnProperty(client.employer)){
    //             employersBySalesCopy[client.employer] = 0
    //         } else {
    //             if (client.sold){
    //                 employersBySalesCopy[client.employer] += client.sold
    //             }
    //         }
    //     })

    // }

    componentDidMount() {
        this.props.clients.employersBySalesFunction()
    }

    createData(array) {
        const data = [{ name: array[0].employer, Sales: array[0]["COUNT(sold)"] }, { name: array[1].employer, Sales: array[1]["COUNT(sold)"] }, { name: array[2].employer, Sales: array[2]["COUNT(sold)"] }]
        return data
    }

    render() {
        const employers = this.props.clients.employersBySales
        const chartData = employers[0] ? this.createData(employers) : null


        return (
            <div>
                <h1>Top Employees</h1>
                <ResponsiveContainer width={500} height={250}>
                <BarChart data={chartData} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip offset="0" label="false"/>
                    <Legend />
                    <Bar dataKey="Sales" fill="#8884d8" layout='horizontal' isAnimationActive={false}/>
                    
                </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default TopEmployees