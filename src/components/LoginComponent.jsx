import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor() {
        super();
        this.state = { email_id: "", password: "" };

    }


    render() {
        return (

            <form className="login" >
                <h3> Log In </h3>
                <div className="form-group">
                    <label> Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label> Password </label>
                    <input type="password" className="form-control" placeholder="Enter password" />

                </div>

                <button type="submit" className="btn btn-primary btn-block"> Submit </button>
                <p className="forgot-password-text-right">
                    Forgot <a href="#"> password?</a>
                </p>

            </form>

        );
    }
}


export default Login;