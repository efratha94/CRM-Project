import React, { Component } from 'react';
import { observer, inject } from "mobx-react"

@inject("person", "clients")
@observer

class EmailsSent extends Component {

    render() {
        const EmailTypeNotNull = this.props.clients.clients.filter(client => client.emailType != "null")

        return (
            <div>
                <h2>{EmailTypeNotNull.length}</h2>
                <h4>Emails Sent</h4>
            </div>
        )
    }
}

export default EmailsSent