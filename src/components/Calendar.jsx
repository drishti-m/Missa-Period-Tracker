import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function PeriodCalendar() {
    const [dateState, setDateState] = useState(new Date());
    const changeDate = (e) => { setDateState(e) }

    return (

        <div className="calendar">
            <h2> Page Calendar</h2>
            <Calendar className="calendar" value={dateState} onChange={changeDate} />
            <p>Current selected date is <b>
                {moment(dateState).format('MMMM DD YYYY')}</b></p>
        </div >
    );
}


export default PeriodCalendar;
