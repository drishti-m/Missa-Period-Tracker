import './Home.css';
import React from 'react';
import homePic from '../assets/women-dribbble.jpg';
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import calendarImg from '../assets/calendar-icon.png';
import community from '../assets/community.png';
import insights from '../assets/insights.png';

function Home() {
    return (
        <div className="home">
            <div className="row">
                <div className="col">
                    <p className="main-tag"> Your Personal Period Tracker and Health Assistant </p>
                    <p className="sub-tag"> Track your cycle with us! </p>
                </div>
                <div className="col text-end">
                    <img className="homeImg " src={homePic} alt=""></img>
                </div>
            </div>
            <div className="featuresContainer">
                <div className="row">
                    <div class="col">
                        <div class="card text-dark bg-light mb-3">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-sm-3.5">
                                        <img src={calendarImg}></img>
                                    </div>
                                    <div className="col-sm-7.3">
                                        <p class="card-text">Log Your Period and Symptoms</p>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-dark bg-light mb-3">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-sm-3.5">
                                        <img src={insights}></img>
                                    </div>
                                    <div className="col-sm-7.3">
                                        <p class="card-text">
                                            Read insights from experts
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                    <div className="col">
                        <div class="card text-dark bg-light mb-3">
                            <div class="card-body">
                                <p class="card-text">
                                    <div className="row">
                                        <div className="col-sm-3.5">
                                            <img src={community}></img>
                                        </div>
                                        <div className="col-sm-7.3">
                                            Join a Period-Friendly Community
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Home;