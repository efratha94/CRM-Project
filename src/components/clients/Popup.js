import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class Popup extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            surname: "",
            country: ""
        }
    }
    // Popup = (handleClose, show) => {
    //     const showOrHide = show ? "popup-show" : "popup-hide"
        
    // }
    closePopup = () => {
        this.props.close()
    }

    updateEmployee = () => {
        this.props.clients.updateClient(this.props.client.id, this.state.name, this.state.surname, this.state.country)
    }

    handleInput = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        const client = this.props.client
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h4>Update Employee</h4>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleInput} name="name"/>
                    <input type="text" placeholder="Surname" value={this.state.surname} onChange={this.handleInput} name="surname"/>
                    <input type="text" placeholder="Country" value={this.state.country} onChange={this.handleInput} name="country"/>
                    <button onClick={this.updateEmployee}>Update</button>
                    <button onClick={this.closePopup}>X</button>
                </div>
            </div>
        )
    }
}

export default Popup