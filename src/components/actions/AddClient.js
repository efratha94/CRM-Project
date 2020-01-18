import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class AddClient extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            surname: "",
            country: "",
            employer: ""
        }
    }

    handleInput = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }
    handleEvent = (event) => {
        event.preventDefault()
        this.props.clients.addNewClients(this.state.name, this.state.surname, this.state.country, this.state.employer)
    }

    render() {
        return (
            <div id="add-client-form">
                <h5>ADD NEW CLIENT</h5>
                <form action="">
                    <p>First Name:
                    <input type="text" name="name" onChange={this.handleInput}/>
                    </p>
                    <p>Surname:
                    <input type="text" name="surname" onChange={this.handleInput}/>
                    </p>
                    <p>Country:
                    <input type="text" name="country" onChange={this.handleInput}/>
                    </p>
                    <p>Employer:
                    <input list="employers" onChange={this.handleInput} name="employer" />
                        <datalist id="employers">
                            {this.props.employers.map((employer, index) => <option key={index} value={employer}>{employer}</option>)}
                        </datalist>
                    </p>
                    <button onClick={this.handleEvent}>Add New Client</button>
                </form>
            </div>
        )
    }
}

export default AddClient