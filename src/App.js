import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/LoginComponent';
import { DashboardNav, Nav } from './components/Nav';
import SignUp from './components/SignUpComponent';
import AboutUs from './components/AboutUsComponent';
import Dashboard from './components/Dashboard';
import Home from './components/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: true };
  }
  render() {
    return (
      <Router>
        <div className="App">
          {!this.state.loggedIn ? <Nav /> : <DashboardNav />}
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/dashboard/" component={Dashboard} />
            </Switch>
          </div>
          <div class="card-footer text-muted text-center">
            © Made By: Drishti Maharjan
  </div>




        </div>
      </Router >
    );
  }
}



export default App;
