import React, { Component } from 'react';
import Header from "./Header/Header"
import Home from "./Home/Home"
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Application from "./ApplicationPage/Application"
import BasicInfo from "./BasicInfo/BasicInfo"
import Otp from "./ConfirmPhoneNum/Otp"
import Schedule from './Schedule/Schedule'

class App extends Component {
  render() {
    return (
      <Router>
       <Switch>
       <Route path="/BasicInfo"><BasicInfo/></Route>
       <Route path="/Schedule"><Schedule/></Route>
       <Route path="/OtpVerification"><Otp/></Route>
       <Route path="/Application-page"><Header/><Application/></Route>
       <Route path="/"><Header/><Home/> </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
