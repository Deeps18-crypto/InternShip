import React, { Component } from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import BasicInfo from "./BasicInfo/BasicInfo";
import Otp from "./ConfirmPhoneNum/Otp";
import Schedule from "./Schedule/Schedule";
import JobsMain from "./Jobs/JobsMain";
import DetailedMain from "./DetailedJobs/DetailedMain";
import JobApplicationMain from "./JobApplication/JobApplicationMain";
import UpComingShifts from "./Jobs/JobsHeader/Shifts/UpcomingShifts/UpComingShifts";
import CompletedShifts from "./Jobs/JobsHeader/Shifts/CompletedShifts/CompletedShifts";
import SavedShifts from "./Jobs/JobsHeader/Shifts/SavedShifts/SavedShifts";
import LiveFeed from "./LiveFeed/Livefeed";
import ScheduleHistoryMain from "./ScheduleHistory/ScheduleHistoryMain";
import "./App.css";
import Login from "./Login/Login";
import ForgetPassword from "./Login/ForgetPassword/ForgetPassword";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/ForgetPassword">
              <ForgetPassword />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/jobs">
              <JobsMain />
            </Route>
            <Route path="/scheduleHistory">
              <ScheduleHistoryMain />
            </Route>
            <Route path="/liveFeed">
              <LiveFeed />
            </Route>
            <Route path="/upComingShifts">
              <UpComingShifts />
            </Route>
            <Route path="/completedShifts">
              <CompletedShifts />
            </Route>
            <Route path="/savedShifts">
              <SavedShifts />
            </Route>
            <Route path="/Detailedjobs">
              <DetailedMain />
            </Route>
            <Route path="/JobApplicationMain">
              <JobApplicationMain />
            </Route>
            <Route path="/BasicInfo">
              <BasicInfo />
            </Route>
            <Route path="/Schedule">
              <Schedule />
            </Route>
            <Route path="/OtpVerification">
              <Otp />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
