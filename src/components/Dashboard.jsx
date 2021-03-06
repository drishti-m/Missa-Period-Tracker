import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PeriodCalendar from './Calendar';
import Symptoms from './Symptoms';
import App from '../App';
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { username: this.props.username }
    }
    CPeriodCalendar = (props) => {
        return <PeriodCalendar username={this.state.username} />
    }

    render() {
        return (
            //TO-DO: if logged in, show dashboard otherwise redirect to homepage
            <div className="dashboard" >

                <Switch>
                    <Route path="/dashboard/symptoms" component={Symptoms} />
                    <Route path="/dashboard/calendar" component={this.CPeriodCalendar} />
                    <Route path="/dashboard/logout" component={App} />
                </Switch>
            </div >
        );
    }
}


export default Dashboard;