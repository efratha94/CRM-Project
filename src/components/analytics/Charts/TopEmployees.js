import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { toJS } from "mobx"
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

@inject("person", "clients")
@observer

class TopEmployees extends Component{
    constructor(props){
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

    componentDidMount(){
        this.props.clients.employersBySalesFunction()
    }
    
    createData(array){
        const data = [{name: array[0].employer, value: array[0]["COUNT(sold)"]}, {name: array[1].employer, value: array[1]["COUNT(sold)"]}, {name: array[2].employer, value: array[2]["COUNT(sold)"]}]
        return data
    }

    render(){
        const employers = this.props.clients.employersBySales
        const chartData = employers[0] ? this.createData(employers) : null
        

        return (
            <div>
                
            </div>
        )
    }
}

export default TopEmployees