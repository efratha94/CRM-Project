import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import Client from "./Client"
import axios from "axios"

@inject("person", "clients")
@observer

class Clients extends Component {
    constructor(){
        super();
        this.state = {
            searchInput: "",
            categories: ""
        }
    }

    handleInput = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name
        switch (value){
            case "Name":
                value = "firstName"
                break;
            case "Surname":
                value = "lastName"
                break;
            case "Country":
                value = "country"
                break;
            case "First Contact":
                value = "firstContact"
                break;
            case "Email Type":
                value = "emailType"
                break;
            case "Sold":
                value = "sold"
                break;
            case "Employer":
                value = "employer"
        }
        this.setState({
            [name]: value
        })
    }

    keyPress = (event) => {
        if (event.key === "Enter"){
           this.displaySearches()
           this.setState({
               searchInput: ""
           })
        }
    }

    displaySearches = () =>{
        let clientInput = this.state.searchInput.toLowerCase()
        let categoryInput = this.state.categories
        let clientsArray = [...this.props.clients.clients]
        let abc = []
        console.log(clientInput, categoryInput)
        //need to find how to get the categories straight
        let clientSearch = clientsArray.filter(client => {
            let clientCategoryValue = client[categoryInput].toLowerCase()
           return clientCategoryValue.includes(`${clientInput}`)
            
            // abc.push
        })
        console.log(clientSearch)
    }

    render() {
        const categoriesArray = this.props.clients.categories
        const clientsArray = this.props.clients.clients
        // console.log(Object.keys(clientsArray[0]))
        return (
            <div id="all-clients">
                <div id="client-categories">
                    {categoriesArray.map((category, index) => <span key={index}>{category}</span>)}
                </div>

                <div id="search-client">
                    <input type="text" name="searchInput" onChange={this.handleInput} onKeyPress={this.keyPress} value={this.state.searchInput}/>
                    <input list="categories" name="categories" onChange={this.handleInput}/>
                    <datalist id="categories">
                    
                {categoriesArray.map((category, index) => <option key={index} value={category}>{category}</option>)}
                    </datalist>
                </div>

                {clientsArray.map((client, index) => {
                    return (
                        <div key={index}>
                            <Client client={client} index={index} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Clients