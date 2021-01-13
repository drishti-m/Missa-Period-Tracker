import { es } from 'date-fns/esm/locale';
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email_id: "", password: "", goToDashboard: false, entered_email: true, entered_pw: true, valid_credentials: true };

    }
    checkLogin = (e) => {
        //check credentials
        //if creds exist:
        e.preventDefault();
        if (this.state.email_id === "") {
            this.setState({ entered_email: false });
        }

        if (this.state.password === "") {
            this.setState({ entered_pw: false });
        }
        //TO-DO: check if this entry exists in database
        if (this.state.password === "test" && this.state.email_id === "test") {
            this.setState({ valid_credentials: true });
            //TO-DO: get corresponding username from database
            var username = "test";
            this.props.username(username);
            this.props.onLogin(true);
            this.props.routerprops.history.push("/dashboard/calendar");
        }
        else {
            this.setState({ valid_credentials: false });
        }

    }


    render() {
        return (
            <form className="login" >
                <h3> Log In </h3>
                <div className="form-group">
                    <label> Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.setState({ email_id: e.target.value, entered_email: true })} />
                    <p></p>
                </div>

                <div className="form-group">
                    <label> Password </label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => this.setState({ password: e.target.value, entered_pw: true })} />
                    <p></p>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.checkLogin}> Submit </button>
                {this.state.entered_email === false ? <p> Email not entered! </p> : <p></p>}
                {this.state.entered_pw === false ? <p>Password not entered! </p> : <p></p>}
                {this.state.valid_credentials === false ? <p> Wrong email or password! Pleae try again! </p> : <p></p>}

                <p className="forgot-password-text-right">
                    Forgot <a href="#"> password?</a>
                </p>

            </form>
        );
    }
}


export default Login;