import React from "react";
import JobsHeader from "../../JobsHeader";
import MaskImg from "../../../../assests/Mask Grouph.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import "./CompletedShifts.css";
import SavedAndCompShifts from "../SavedAndCompShifts";

function CompletedShifs({ completedShift }) {
  const history = useHistory();
  const clickHandler = () => {
    history.push("./upComingShifts");
  };
  const clickSaveHandler = () => {
    history.push("./savedShifts");
  };
  return (
    <div>
      <JobsHeader />
      <div className="completedShifts">
        <div className="completedShifts__left">
          <img src={MaskImg} />
          <h2>Anna C.</h2>
          <button className="completedShifts__button1" onClick={clickHandler}>
            UpcomingShifts
          </button>
          <button className="completedShifts__button2">CompletedShifts</button>
          <button
            className="completedShifts__button3"
            onClick={clickSaveHandler}
          >
            SavedShifts
          </button>
        </div>
        <div className="completedShifts__right">
          <div className="completedShifts__rightIcons">
            <h2>Completed Shifts for</h2>
            <ArrowBackIosIcon />
            5th July20 - 11th July20
            <ArrowForwardIosIcon />
          </div>
          <hr />
          <SavedAndCompShifts  />
          <SavedAndCompShifts  />
          <SavedAndCompShifts  />
          <SavedAndCompShifts  />
          <SavedAndCompShifts  />
        </div>
      </div>
    </div>
  );
}

export default CompletedShifs;
