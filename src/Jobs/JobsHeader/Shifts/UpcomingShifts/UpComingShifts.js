import React from "react";
import JobsHeader from "../../JobsHeader";
import "./UpComingShifts.css";
import MaskImg from "../../../../assests/Mask Grouph.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpComingShiftCard from "./UpComingShiftCard"
function UpComingShifts() {
  return (
    <div className="upComingShifts__header">
      <JobsHeader />
      <div className="upComingShifts">
        <div className="upComingShifts__left">
          <img src={MaskImg} />
          <h2>Anna C.</h2>
          <h4>UpComingShifts</h4>
          <h4>CompletedShifts</h4>
          <h4>SavedShifts</h4>
        </div>
        <div className="upComingShifts__right">
          <div className="upComingShifts__rightIcons">
            <ArrowBackIosIcon />
            5th July20 - 11th July20
            <ArrowForwardIosIcon />
          </div>
          <hr />
           <UpComingShiftCard/>
           <UpComingShiftCard/>
           <UpComingShiftCard/>
           <UpComingShiftCard/>
           <UpComingShiftCard/>
        </div>
      </div>
    </div>
  );
}

export default UpComingShifts;
