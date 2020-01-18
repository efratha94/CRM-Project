import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Actions from "./components/actions/Actions"
import Analytics from "./components/analytics/Analytics"
import Clients from "./components/clients/Clients"
import axios from "axios"

import React, { Component } from 'react';
class App extends Component{
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return (
          <Router>
          <div id="main-container">
            <div id="navbar">
              <Link to="/" className="navbar-link">Home</Link>
              <Link to="/clients" className="navbar-link">Clients</Link>
              <Link to="/actions" className="navbar-link">Actions</Link>
              <Link to="/analytics" className="navbar-link">Analytics</Link>
            </div>
          <Route path="/clients" exact render={({match}) => <Clients match={match}/>}/>
          <Route path="/actions" exact render={({match}) => <Actions match={match}/>}/>
          <Route path="/analytics"exact render={({match}) => <Analytics match={match}/>}/>
          </div>
          </Router>
        )
    }
}

export default App
