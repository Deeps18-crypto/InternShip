import React from "react";
import JobsHeader from "../../JobsHeader";
import UpComingShiftCard from "../UpcomingShifts/UpComingShiftCard";
import MaskImg from "../../../../assests/Mask Grouph.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./CompletedShifts.css";
function CompletedShifs() {
  return (
    <div>
      <JobsHeader />
      <div className="completedShifts">
        <div className="completedShifts__left">
          <img src={MaskImg} />
          <h2>Anna C.</h2>
          <button className="completedShifts__button1">UpcomingShifts</button>
          <button className="completedShifts__button2">CompletedShifts</button>
          <button className="completedShifts__button3">SavedShifts</button>
        </div>
        <div className="completedShifts__right">
          <div className="completedShifts__rightIcons">
            <ArrowBackIosIcon />
            5th July20 - 11th July20
            <ArrowForwardIosIcon />
          </div>
          <hr />
          <UpComingShiftCard />
          <UpComingShiftCard />
          <UpComingShiftCard />
          <UpComingShiftCard />
          <UpComingShiftCard />
        </div>
      </div>
    </div>
  );
}

export default CompletedShifs;
