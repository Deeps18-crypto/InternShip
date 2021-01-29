import React, { useEffect } from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import BasicInfo from "./BasicInfo/BasicInfo";
import Otp from "./ConfirmPhoneNum/Otp";
import ScheduleInterview from "./ScheduleInterview/ScheduleInterview";
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
import EnterOtp from "./Login/EnterOtp/EnterOtp";
import CreateNewPassword from "./Login/CreateNewPassword/CreateNewPassword";
import InterviewSchedule from "./InterviewSchedule/InterviewSchedule";
import RescheduleInterview from "./RescheduleInterview/RescheduleInterview";
import AccountInformation from "./AccountInformation/AccountInformation";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      console.log("the user is", authuser);
      if (authuser) {
        dispatch({
          type: "ADD_USER",
          user: authuser,
        });
      } else {
        dispatch({
          type: "ADD_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/AccountInformation">
            <AccountInformation />
          </Route>
          <Route path="/ContactInformation">
            <AccountInformation />
          </Route>
          <Route path="/ShiftPreferences">
            <AccountInformation />
          </Route>
          <Route path="/DisciplinaryQuestions">
            <AccountInformation />
          </Route>
          <Route path="/InterviewSchedule">
            <InterviewSchedule />
          </Route>
          <Route path="/ScheduleInterview">
            <ScheduleInterview />
          </Route>
          <Route path="/RescheduleInterview">
            <RescheduleInterview />
          </Route>
          <Route path="/CreateNewPassword">
            <CreateNewPassword />
          </Route>
          <Route path="/ForgetPassword">
            <ForgetPassword />
          </Route>
          <Route path="/EnterOtp">
            <EnterOtp />
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
          <Route path="/OtpVerification">
            <Otp />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
