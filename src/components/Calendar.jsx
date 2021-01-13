import React, { Component } from 'react';
import './calendar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from 'react-date-range';
import moment from 'moment';



class PeriodCalendar extends Component {


    constructor() {
        super();
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 17);

        this.state = {
            selectedDate: new Date(),
            startDate: new Date(),
            endDate: currentDate,
            key: 'selection',
            validDate: true,
        };
    }
    SelectDate = (date) => {
        console.log("Before setting Date selected as 'e' is: ", date);
        this.setState({ selectedDate: date });
        console.log("after setting, Date selected is: ", this.state.selectedDate, date);
    }
    saveStartDate = (e) => {
        if (this.state.selectedDate <= this.state.endDate) {
            this.setState({ validDate: true, startDate: this.state.selectedDate });
        }
        else {
            this.setState({ validDate: false });
        }

    }
    saveEndDate = (e) => {
        if (this.state.selectedDate >= this.state.startDate) {
            this.setState({ validDate: true, endDate: this.state.selectedDate });
        }
        else {
            this.setState({ validDate: false });
        }
    }
    retrieveAPI = (e) => {
        const url = "http://127.0.0.1:5000/user?id=drish";
        //fetch('')
        fetch(url)
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch(console.log)
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
                {console.log("state:", this.state.validDate)}
                {this.state.validDate ? <p class="d-lg-none"></p> :
                    <div class="center-block text-center custom-invalid">
                        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover"
                            title="Popover title" data-bs-content=" Start Date can't be later than End Date!">Invalid Date Range</button>
                    </div>}

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
                <button onClick={this.retrieveAPI}>Get Data</button>
            </div >
        )
    }
}


export default PeriodCalendar;
