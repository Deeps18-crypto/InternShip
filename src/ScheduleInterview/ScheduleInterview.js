import React from "react";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import ScheduleProgress from "./ScheduleProgress/ScheduleProgress";
import ScheduleHead from "./ScheduleHead/ScheduleHead";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Table from "./SchedulteTable/Table";
import "./ScheduleInterview.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function ScheduleInterview() {
  return (
    <div className="scheduleInterview">
      <LogoHeader />
      <ScheduleProgress />
      <ScheduleHead />
      <Link to="/OtpVerification">
        <ArrowBackIcon className="arrow" />
      </Link>
      <h2>
        Set up a telephonic Interview <br></br> whichever time you like
      </h2>
      <p>A quick 20 minute interview to refrom your Nursing Career</p>
      <div className="scheduleInterview__table">
        <Table />
      </div>
      <p>
        Still worried about what your first Interview with NURSD team would look
        like?
      </p>
      <div className="scheduleInterview__video">
        <PlayCircleOutlineIcon />
        <h4>Watch a demo Interview</h4>
      </div>
      <Link to="/InterviewSchedule">
        <button className="scheduleInterview__button">Book</button>
      </Link>
    </div>
  );
}

export default ScheduleInterview;
