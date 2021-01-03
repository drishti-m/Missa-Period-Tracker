import logo from './assets/missa_logo.png'
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/LoginComponent';
import { DashboardNav, Nav } from './components/Nav';
import SignUp from './components/SignUpComponent';
import AboutUs from './components/AboutUsComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Symptoms from './components/Symptoms';
import Calendar from './components/Calendar';
import Blog from './components/Blog';
import Settings from './components/Settings';


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
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/dashboard/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1> Home Page</h1>
  </div>
)


export default App;
