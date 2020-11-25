import React from "react";
import JobsHeader from "../Jobs/JobsHeader/JobsHeader";
import MaskImg from "../assests/Mask Grouph.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import LiveFeedCard from "./LiveFeedCard";
import "./LiveFeed.css";

function LiveFeed() {
  const history = useHistory();

  return (
    <div>
      <JobsHeader />
      <div className="liveFeed">
        <div className="liveFeed__left">
          <img src={MaskImg} />
          <h2>Anna C.</h2>
          <button className="liveFeed__button1">Scheduled History</button>
          <button className="liveFeed__button2">Scheduled Nurses</button>
          <button className="liveFeed__button3">Live Feed</button>
          <button className="liveFeed__button4">Billing</button>
          <button className="liveFeed__button5">Shift Details</button>
        </div>
        <div className="liveFeed__right">
          <div className="liveFeed__rightIcons">
            <h2>Live Feed for</h2>
            <ArrowBackIosIcon />
            12th July20
            <ArrowForwardIosIcon />
          </div>
          <hr />
          <LiveFeedCard />
          <LiveFeedCard />
          <LiveFeedCard />
        </div>
      </div>
    </div>
  );
}

export default LiveFeed;
