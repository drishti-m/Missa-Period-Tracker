
import './Nav.css';
import './AboutUs.css';
import React from 'react';
import logo from '../assets/missa_logo.png';

//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function AboutUs() {
    return (
        <div className="aboutus">
            <div class="container p-1 p-sm-3">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-center about-us-title"> About Missa Period Tracker</h2>
                        <hr />
                    </div>
                    <div class="col-md-3">
                        <img src={logo} class="logo"></img>
                    </div>
                    <div class="col-9">
                        <p class="description">
                            Missa Period Tracker is a period-tracker app for women
                            to help them track their period dates and symptoms. "Missa" 
                            
                            <a href="https://en.wikipedia.org/wiki/Newar_language">
                            (Newari) </a>
                            translates to "Woman", and Missa Period Tracker is here to be a friendly health assistant for
                            women in their periods. Keeping track of periods, whether regular or irregular, manually
                            is a strenuous task. Missa helps you save daily logs to keep your health in check.
                        </p>
                        <p class="description">
                            This is an open-source project developed by Drishti Maharjan, a Computer Science Student in
                            Jacobs University Bremen.<hr />
                        </p>
                        <p class="contact">
                            Contact me at: d.maharjan@jacobs-university.de
                            
                        </p>
                    </div>
                    <hr />
                </div>
            </div>


        </div >
    );
}


export default AboutUs;
