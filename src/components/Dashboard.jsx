import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PeriodCalendar from './Calendar';
import Symptoms from './Symptoms';
import App from '../App';
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function Dashboard() {
    return (
        //TO-DO: if logged in, show dashboard otherwise redirect to homepage
        <div className="dashboard">

            <Switch>
                <Route path="/dashboard/symptoms" component={Symptoms} />
                <Route path="/dashboard/calendar" component={PeriodCalendar} />
                <Route path="/dashboard/logout" component={App} />
            </Switch>
        </div >
    );
}


export default Dashboard;