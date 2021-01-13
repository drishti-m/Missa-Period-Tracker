import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/LoginComponent';
import { DashboardNav, Nav } from './components/Nav';
import SignUp from './components/SignUpComponent';
import AboutUs from './components/AboutUsComponent';
import Dashboard from './components/Dashboard';
import Home from './components/Home';


class App extends Component {

  constructor() {
    super();
    this.state = { loggedIn: true, username: "User" };
  }
  ChangeLogin = (e) => {
    this.setState({ loggedIn: e });
  }

  CLogin = (props) => {
    return <Login onLogin={this.ChangeLogin} routerprops={props} username={this.setUsername} />
  }
  setUsername = (e) => {
    this.setState({ username: e });
  }

  CSignup = (props) => {
    return <SignUp onSignup={this.ChangeLogin} routerprops={props} username={this.setUsername} />
  }

  render() {
    return (
      <Router>
        <div className="App">
          {!this.state.loggedIn ? <Nav onLogin={this.ChangeLogin} /> : <DashboardNav onLogout={this.ChangeLogin} username={this.state.username} />}
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/login" component={this.CLogin} />
              <Route path="/sign-up" component={this.CSignup} />
              <Route path="/dashboard/" component={Dashboard} />
            </Switch>
          </div>
          <div class="card-footer text-muted text-center footer-custom">
            © Made By: Drishti Maharjan
          </div>
        </div>
      </Router >
    );
  }
}



export default App;
