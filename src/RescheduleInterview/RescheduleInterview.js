import React, { useState } from "react";
import Header from "../Header/Header";
import RescheduleInterviewimg from "../assests/Frame (1).png";
import "./RescheduleInterview.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

function RescheduleInterview() {
  return (
    <div className="rescheduleInterview">
      <Header />
      <div className="rescheduleInterview__body">
        <div className="rescheduleInterview__content">
          <div className="rescheduleInterview__contenthead">
            <Link to="/ScheduleInterview">
              <ArrowBackIcon />
            </Link>
            <h2>Oops! Looks like you missed</h2>
          </div>
          <h2 className="rescheduleInterview__contentbottom">
            your interview call.
          </h2>
        </div>
      </div>
      <img src={RescheduleInterviewimg} className="RescheduleInterviewimg" />
      <button className="rescheduleInterview__rescheduleBottom">
        Reschedule
      </button>
      <div className="rescheduleInterview__bottom">
        <div className="rescheduleInterview__bottom1">
          <p>Want to complete the profile in the meantime ?</p>
          <button className="rescheduleInterview__bottomLogin">Login</button>
        </div>
        <div className="rescheduleInterview__bottom1">
          <p>Want to explore the NURSD website?</p>
          <button className="rescheduleInterview__bottomHome">
            <HomeIcon />
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default RescheduleInterview;
