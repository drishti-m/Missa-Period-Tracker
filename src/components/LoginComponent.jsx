import { es } from 'date-fns/esm/locale';
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email_id: "", password: "", goToDashboard: false, entered_email: true,
            entered_pw: true, valid_credentials: true, backend_user_name: ""
        };

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

        const url = "http://127.0.0.1:5000/authentication?email=" +
            this.state.email_id + "&password=" + this.state.password;
        var username;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.length > 0) {
                    username = data[0].Username;
                    this.setState({ backend_user_name: username, valid_credentials: true });
                    this.props.username(username);
                    this.props.onLogin(true);
                    this.props.routerprops.history.push("/dashboard/calendar");
                }
                else {
                    this.setState({ valid_credentials: false });
                }


            })
            .catch(console.log)

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
                {this.state.valid_credentials === false ? <p> Wrong email or password! Please try again! </p> : <p></p>}

                <p className="forgot-password-text-right">
                    Forgot <a href="#"> password?</a>
                </p>

            </form>
        );
    }
}


export default Login;