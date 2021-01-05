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
        <div className="App bg-img">
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
          <footer class="bg-light text-center text-lg-start footer-custom">

            <div class="text-center text-dark p-3">
              © Made By: Drishti Maharjan
          </div>
          </footer>
        </div>
      </Router >
    );
  }
}



export default App;
