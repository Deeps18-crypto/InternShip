import React, { Component } from 'react';
import Home from "./Home/Home"
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import SignUp from "./SignUp/SignUp"
import BasicInfo from "./BasicInfo/BasicInfo"
import Otp from "./ConfirmPhoneNum/Otp"
import Schedule from './Schedule/Schedule'
import JobsMain from "./Jobs/JobsMain"
import DetailedMain from "./DetailedJobs/DetailedMain"
import JobApplicationMain from "./JobApplication/JobApplicationMain"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="app">
      <Router>
       <Switch>
       <Route path="/jobs"><JobsMain/></Route>
       <Route path="/Detailedjobs"><DetailedMain/></Route>
       <Route path="/JobApplicationMain"><JobApplicationMain/></Route>
      <Route path="/BasicInfo"><BasicInfo/></Route>
       <Route path="/Schedule"><Schedule/></Route>
       <Route path="/OtpVerification"><Otp/></Route>
       <Route exact path="/SignUp"><SignUp/></Route>
       <Route path="/"><Home/> </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
