import React, { Component } from 'react';
import './calendar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from 'react-date-range';
import moment from 'moment';


//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class PeriodCalendar extends Component {

    constructor() {
        super();
        this.state = {
            selectedDate: new Date(),
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        };
    }
    SelectDate = (date) => {
        console.log("Before setting Date selected as 'e' is: ", date);
        this.setState({ selectedDate: date });
        console.log("after setting, Date selected is: ", this.state.selectedDate, date);
    }
    saveStartDate = (e) => {
        this.setState({ startDate: this.state.selectedDate });
    }
    saveEndDate = (e) => {
        this.setState({ endDate: this.state.selectedDate });
    }
    render() {
        return (
            <div className="PeriodCalendar" >
                <h2 className="logTitle"> Log Your Period</h2>
                <div className="calendarDiv">
                    <Calendar
                        date={this.state.selectedDate}
                        onChange={this.SelectDate} />
                </div>

                <div class="container">

                    <div class="center-block text-center">
                        <button type="submit" class="btn btn-secondary btn-lg active custom-button" onClick={this.saveStartDate}>Save as Start Date</button>
                        <button type="submit" class="btn btn-secondary btn-lg active" onClick={this.saveEndDate}>Save as End Date</button>
                    </div>


                </div>

                <div class="col custom-range-box">
                    <div class="card text-dark bg-light mb-3 mx-auto w-50">
                        <div class="card-body">
                            <div className="col">
                                <p class="card-text custom-range-text">Current selected date range is  <b>
                                    {moment(this.state.startDate).format('MMMM DD YYYY')} </b>
                                        to <b> {moment(this.state.endDate).format('MMMM DD YYYY')}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default PeriodCalendar;
