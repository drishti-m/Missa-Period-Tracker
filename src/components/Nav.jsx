import './Nav.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav className="nav">
            <h2> Missa Period Tracker </h2>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home Page</li>
                </Link>
                <Link style={navStyle} to="/about-us">
                    <li> About Us </li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li> Login</li>
                </Link>
                <Link style={navStyle} to="/sign-up">
                    <li> Sign Up</li>
                </Link>
            </ul>
        </nav >
    );
}

class DashboardNav extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "Drishti" };
    }
    render() {
        const navStyle = {
            color: 'white'
        };
        return (
            <nav className="nav" >
                <h2> Hi, {this.state.username} </h2>

                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home Page</li>
                    </Link>
                    <Link style={navStyle} to="/dashboard/symptoms">
                        <li> Symptoms </li>
                    </Link>
                    <Link style={navStyle} to="/dashboard/calendar">
                        <li> Calendar</li>
                    </Link>
                    <Link style={navStyle} to="/dashboard/blog">
                        <li> Blog </li>
                    </Link>
                    <Link style={navStyle} to="/dashboard/settings">
                        <li> Settings </li>
                    </Link>
                </ul>
            </nav >
        );
    }
}
export { Nav, DashboardNav };

