import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class UpdateClient extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            employer: "",
            emailType: ""
        }
    }
    alertMsg = () =>{
        alert("Must Enter A Client's Name!")
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
        const employeeName = this.state.name
        const nameSplitted = employeeName.split(" ")
        const clientToUpdate = this.props.clients.clients.find(client => 
            client.firstName === nameSplitted[0] && client.lastName === nameSplitted[1]
        )
        if (clientToUpdate === undefined) {return}
        if (event.target.className === "transferEmployer"){
            this.props.clients.updateClientStatus(clientToUpdate.id, "employer", this.state.employer)
        } else if (event.target.className === "emailType"){
            this.props.clients.updateClientStatus(clientToUpdate.id, "emailType", this.state.emailType)
        } else {
            this.props.clients.updateClientStatus(clientToUpdate.id, "sold", true)
        }

    }

    render() {

        return (
            <div id="update-client-section">
                <h5>UPDATE</h5>
                <form action="">
                <div>
                    <span>Client Name</span> 
                    <input list="clientsNames" onChange={this.handleInput} name="name" required="required" onInvalid={this.alertMsg}/>
                    <datalist id="clientsNames" >
                    {this.props.clients.clients.map((client, index)=> <option key={index} value={client.firstName+" "+client.lastName}>{client.firstName} {client.lastName}</option>)}
                    </datalist>
                </div>
                <div>
                    <p>Transfer Ownership to:</p>
                    <input list="employers" onChange={this.handleInput} name="employer" />
                    <datalist id="employers">
                        {this.props.employers.map((employer, index) => <option key={index} value={employer}>{employer}</option>)}
                    </datalist> 
                    <button className="transferEmployer" onClick={this.handleEvent}>Transfer</button>
                </div>
                <div>
                    <p>Send Email:</p>
                    <input list="emailType" onChange={this.handleInput} name="emailType"/>
                    <datalist id="emailType">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </datalist>
                    <button className="emailType" onClick={this.handleEvent}>Send</button>
                </div>
                <div>
                    Declare Sale!
                    <button onClick={this.handleEvent}>Sale</button>
                </div>
                </form>
            </div>
        )
    }
}

export default UpdateClient