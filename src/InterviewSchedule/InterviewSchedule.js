import React, { useState } from "react";
import Header from "../Header/Header";
import Capture from "../assests/Capture.JPG";
import "./InterviewSchedule.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Congrats from "../assests/set-relax-success-people_1893-2255 1.png";
import Congratulation from "../Facility/Congratulation/Congratulation";

function InterviewSchedule({ congratulation }) {
  const history = useHistory();
  const changeHandler = () => {
    history.push("/Login");
  };

  return (
    <>
      {!congratulation ? (
        <div className="interviewSchedule">
          <Header />
          <div className="interviewSchedule__body">
            <div className="interviewSchedule__content">
              <div className="interviewSchedule__contenthead">
                <Link to="/ScheduleInterview">
                  <ArrowBackIcon />
                </Link>
                <h2>Congratulations!</h2>
              </div>
              <h2 className="interviewSchedule__contentbottom">
                Your interview has been scheduled.
              </h2>
            </div>
          </div>
          <img src={Capture} className="imgCapture" />
          <p className="interviewSchedule__contentbottompara">
            Please be available on &nbsp;<h4>7th July</h4> &nbsp;at &nbsp;
            <h4>10:00 A.M.</h4>&nbsp;
            <Link to="/ScheduleInterview">Reschedule?</Link>
          </p>
          <div className="interviewSchedule__bottom">
            <div className="interviewSchedule__bottom1">
              <p>Want to complete the profile in the meantime ?</p>
              <button
                className="interviewSchedule__bottomLogin"
                onClick={changeHandler}
              >
                Login
              </button>
            </div>
            <div className="interviewSchedule__bottom1">
              <p>Want to explore the NURSD website?</p>
              <a href="http://nursdhealth.com/">
                <button className="interviewSchedule__bottomHome">
                  <HomeIcon />
                  Home
                </button>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="interviewSchedule">
          <Header />
          <div className="interviewSchedule__body">
            <div className="interviewSchedule__content">
              <div className="interviewSchedule__contenthead">
                <Link to="/Facility/PersonalInfo">
                  <ArrowBackIcon />
                </Link>
                <h2>Congratulations!</h2>
              </div>
              <h2 className="interviewSchedule__contentbottom">
                Your Application has been processed.
              </h2>
            </div>
          </div>
          <img src={Congrats} className="imgCapture" />
          <p className="interviewSchedule__contentbottompara">
            You’ll get a call from our Sales Team soon.
          </p>
          <div className="interviewSchedule__bottomFacility">
            <a href="http://nursdhealth.com/">
              <button className="interviewSchedule__bottomHome">
                <HomeIcon />
                Home
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default InterviewSchedule;
