import React from "react";
import JobsHeader from "../../JobsHeader";
import "./SavedShifts.css";
import MaskImg from "../../../../assests/Mask Grouph.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpComingShiftCard from "../UpcomingShifts/UpComingShiftCard";
import { useHistory } from "react-router-dom";
import SavedAndCompShifts from "../SavedAndCompShifts";
import Profile from "../../../../ScheduleHistory/Profile";

function UpComingShifts() {
  const history = useHistory();

  const clickHandler = () => {
    history.push("./completedShifts");
  };
  const clickupHandler = () => {
    history.push("./upComingShifts");
  };
  return (
    <div className="savedShifts__header">
      <JobsHeader />
      <div className="savedShifts">
        <div className="savedShifts__left">
          <Profile />
          <button className="savedShifts__button1" onClick={clickupHandler}>
            UpcomingShifts
          </button>
          <br />
          <button className="savedShifts__button2" onClick={clickHandler}>
            CompletedShifts
          </button>
          <br />
          <button className="savedShifts__button3">SavedShifts</button>
        </div>
        <div className="savedShifts__right">
          <div className="savedShifts__rightIcons">
            <h2>Saved Shifts for</h2>
            <ArrowBackIosIcon />
            5th July20 - 11th July20
            <ArrowForwardIosIcon />
          </div>
          <hr />
          <p>Expired shifts are automatically removed from this list</p>
          <SavedAndCompShifts hidebookmark />
          <SavedAndCompShifts hidebookmark />
          <SavedAndCompShifts hidebookmark />
          <SavedAndCompShifts hidebookmark />
          <SavedAndCompShifts hidebookmark />
        </div>
      </div>
    </div>
  );
}

export default UpComingShifts;
