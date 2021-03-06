import './Nav.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/missa_logo.png';
function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="navbar-brand d-flex">
                    <img src={logo} alt="logo" height="36" class="d-inline-block align-top custom"></img>
                    Missa Period Tracker
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="me-auto">

                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/sign-up">Sign Up</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}




//TO-DO: save username state after refreshing page: localstorage and hooks?
class DashboardNav extends Component {
    constructor(props) {
        super(props);
        //this.state = { username: "User" };
    }
    Logout = (e) => {
        this.props.onLogout(false);
    }
    render() {

        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="navbar-brand d-flex">
                        <img src={logo} alt="logo" height="36" class="d-inline-block align-top custom"></img>
                    Missa Period Tracker

                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="me-auto">

                        </div>
                        <p className="navbar-nav nav-link username">
                            Hey, {this.props.username}
                        </p>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">
                                    Home
                            </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/dashboard/symptoms">Symptoms</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/dashboard/calendar">Calendar</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">
                                    <span onClick={this.Logout}>Logout</span></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
export { Nav, DashboardNav };

