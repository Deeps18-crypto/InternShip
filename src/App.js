import React, { Component } from 'react';
import Home from "./Home/Home"
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Application from "./ApplicationPage/Application"
import BasicInfo from "./BasicInfo/BasicInfo"
import Otp from "./ConfirmPhoneNum/Otp"
import Schedule from './Schedule/Schedule'
import Jobs from "./Jobs/Jobs"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="app">
      <Router>
       <Switch>
       <Route path="/jobs"><Jobs/></Route>
       <Route path="/BasicInfo"><BasicInfo/></Route>
       <Route path="/Schedule"><Schedule/></Route>
       <Route path="/OtpVerification"><Otp/></Route>
       <Route path="/Application-page"><Application/></Route>
       <Route path="/"><Home/> </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
