import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class HottestCountry extends Component {

    render() {
        const countries = {}
        const salesByCountires = this.props.clients.clients.map(client => {
            if (!countries.hasOwnProperty(client.country)) {
                countries[client.country] = client.sold
            } else {
                countries[client.country] += client.sold
            }
        })
        
        const hottestCountrySales = Math.max(...Object.values(countries))
        const hottestountry = Object.keys(countries).find(key => countries[key] == hottestCountrySales)


        return (
            <div>
                <h2>{hottestountry}</h2>
                <h4>Hottest Country</h4>
                <h5>{hottestCountrySales} sales</h5>
            </div>
        )
    }
}

export default HottestCountry