import React from "react";
import JobsHeader from "../Jobs/JobsHeader/JobsHeader";
import MaskImg from "../assests/Mask Grouph.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import ScheduleHistory from "./ScheduleHistory";
import "./ScheduleHistoryMain.css";

function LiveFeed() {
  const history = useHistory();

  const clickLiveHandler = () => {
    history.push("./liveFeed");
  };
  return (
    <div>
      <JobsHeader />
      <div className="scheduleHistoryMain">
        <div className="scheduleHistoryMain__left">
          <img src={MaskImg} />
          <h2>Anna C.</h2>
          <button className="scheduleHistoryMain__button1">
            Scheduled History
          </button>
          <button className="scheduleHistoryMain__button2">
            Scheduled Nurses
          </button>
          <button
            className="scheduleHistoryMain__button3"
            onClick={clickLiveHandler}
          >
            Live Feed
          </button>
          <button className="scheduleHistoryMain__button4">Billing</button>
          <button className="scheduleHistoryMain__button5">
            Shift Details
          </button>
        </div>
        <div className="scheduleHistoryMain__right">
          <div className="scheduleHistoryMain__rightIcons">
            <h2>Schedule For</h2>
            <ArrowBackIosIcon />
            12th July20
            <ArrowForwardIosIcon />
          </div>
          <hr />
          <div className="scheduleHistoryMain__table">
            <ScheduleHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveFeed;
