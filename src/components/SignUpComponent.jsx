import './Nav.css';
import React, { Component } from 'react';
import sha256 from 'crypto-js/sha256';

//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "", username: "", email_id: "",
            password: "", confirm_pw: "", dob: "2021-01-01", matchingPassword: true,
            valid_username: true, entered_name: true, entered_email: true,
            entered_pw: true, entered_matching_pw: true, success: false,
            backend_username: "", pwHash: "", existing_email: false
        };

    }
    check_user_name(value) {
        //check if the entry exists
        const url = "http://127.0.0.1:5000/search?username=" + value;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.length === 0) {
                    this.setState({ valid_username: true, username: value });
                }
                else {
                    this.setState({ valid_username: false, username: value });
                }
            })
            .catch(console.log)
        return;
    }
    check_password(confirm_password) {
        this.setState({ confirm_pw: confirm_password })
        if (this.state.password === confirm_password) {
            this.setState({ matchingPassword: true, entered_matching_pw: true });
        }
        else {
            this.setState({ matchingPassword: false, entered_matching_pw: true });
        }
        return;
    }
    sha_hash(password) {
        var hash = sha256(password);
        return hash.toString();
    }
    get_random_number(min, max) {
        const rand = min + Math.random() * (max - min);
        return rand;
    }
    check_submission(e) {
        e.preventDefault();
        if (this.state.name === "") {
            this.setState({ entered_name: false });
        }
        if (this.state.username === "") {
            this.setState({ valid_username: false });
        }
        if (this.state.email_id === "") {
            this.setState({ entered_email: false });
        }
        if (this.state.password === "") {
            this.setState({ entered_pw: false });
        }
        if (this.state.confirm_pw === "") {
            this.setState({ entered_matching_pw: false });
        }
        if (this.state.email_id !== "" && this.state.name !== "" &&
            this.state.password !== "" && this.state.confirm_pw !== "" &&
            this.state.username !== "") {

            var pwHash = this.sha_hash(this.state.password);
            //console.log("hash: " + pwHash);
            // add to database through API
            const url = "http://127.0.0.1:5000/signup?email=" + this.state.email_id +
                "&username=" + this.state.username +
                "&name=" + this.state.name +
                "&pw=" + pwHash +
                "&dob=" + this.state.dob;
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    if (data[0].hasOwnProperty('error')) {
                        this.setState({ success: false, existing_email: true });
                    }
                    else if (data[0].hasOwnProperty('Username')) {
                        this.setState({ success: true, backend_username: data[0].Username, existing_email: false });
                        this.props.username(data[0].Username);
                        this.props.onSignup(true);
                        this.props.routerprops.history.push("/dashboard/calendar");
                        //this.props.history.push("/dashboard/calendar");
                    }
                    else {
                        this.setState({ success: false });
                    }
                })
                .catch(console.log)

        }

        return;

    }

    render() {
        return (
            < form className="login" >
                <h3> Sign Up </h3>
                <div className="form-group">
                    <label> Name </label>
                    <input type="name" className="form-control" placeholder="Your Full Name" onChange={(e) => this.setState({ name: e.target.value, entered_name: true })} />
                    <p></p>
                </div>
                <div className="form-group">
                    <label> User Name </label>
                    <input type="name" className="form-control" placeholder="Your User Name (should be unique)" onChange={(e) => this.check_user_name(e.target.value)} />
                    {this.state.valid_username ? <p></p> : <p> Username already exists! Please try another one.</p>}
                </div>
                <div className="form-group">
                    <label> Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.setState({ email_id: e.target.value, entered_email: true })} />
                    <p></p>
                </div>

                <div className="form-group">
                    <label> Create Password </label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => this.setState({ password: e.target.value, entered_pw: true })} />
                    <p></p>
                </div>

                <div className="form-group">
                    <label> Confirm Password </label>
                    <input type="password" className="form-control" placeholder="Confirm your password" onChange={(e) => this.check_password(e.target.value)} />
                    {!this.state.matchingPassword ? <p>password does not match!</p> : <p></p>}
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={(e) => this.check_submission(e)}> Submit </button>
                { this.state.entered_name === false ? <p> Name field blank not allowed! </p> : <p></p>}
                { this.state.entered_email === false ? <p> Email field blank not allowed! </p> : <p></p>}
                { this.state.valid_username === false ? <p> Invalid username not allowed! </p> : <p></p>}
                { this.state.entered_pw === false ? <p> Password blank not allowed!</p> : <p></p>}
                { this.state.entered_matching_pw === false ? <p> Matching password blank not allowed! </p> : <p></p>}
                {this.state.existing_email === true ? <p> An account with the email already exists!</p> : <p></p>}
                <p className="forgot-password-text-right" >
                    Forgot <a href="#"> password?</a>
                </p>

            </form >
        );
    }
}


export default SignUp;
