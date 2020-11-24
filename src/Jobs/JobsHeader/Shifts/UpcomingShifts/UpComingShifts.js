import React from "react";
import JobsHeader from "../../JobsHeader";
import "./UpComingShifts.css";
import MaskImg from "../../../../assests/Mask Grouph.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpComingShiftCard from "./UpComingShiftCard"
import {useHistory} from "react-router-dom"

function UpComingShifts() {
  const history = useHistory()

  const clickHandler = ()=>{
    history.push("./completedShifts")
  }
  const clickSaveHandler = ()=>{
    history.push("./savedShifts")
  }
   return (
    <div className="upComingShifts__header">
      <JobsHeader />
      <div className="upComingShifts">
        <div className="upComingShifts__left">
          <img src={MaskImg} />
          <h2>Anna C.</h2>
          <button className="upComingShifts__button1">UpcomingShifts</button><br/>
          <button className="upComingShifts__button2" onClick={clickHandler}>CompletedShifts</button><br/>
          <button className="upComingShifts__button3" onClick={clickSaveHandler}>SavedShifts</button>
        </div>
        <div className="upComingShifts__right">
          <div className="upComingShifts__rightIcons">
            <ArrowBackIosIcon />
            5th July20 - 11th July20
            <ArrowForwardIosIcon />
          </div>
          <hr />
           <UpComingShiftCard />
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
