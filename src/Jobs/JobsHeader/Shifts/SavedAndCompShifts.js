import React from "react";
import Calendar from "../../../assests/calendar 1.png";
import Clock from "../../../assests/clock.png";
import Setting from "../../../assests/settings.png";
import "./SavedAndCompShifts.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

function SavedAndCompShifts({ hidebookmark = false }) {
  return (
    <div className="savedAndCompShifts">
      {!hidebookmark ? (
        <div className="savedAndCompShifts__head">
          <h2>XYZ Hospital</h2>
          <p>illeonis, USA</p>
          <div className="savedAndCompShifts__logo">
            <div className="savedAndCompShifts__img">
              <img src={Calendar} />
              July 15th
            </div>
            <br />
            <div className="savedAndCompShifts__time">
              <div className="savedAndCompShifts__img">
                <img src={Clock} />
                7:00AM - 10:30AM
              </div>
              <h3>$41.00/hr</h3>
            </div>
            <br />
            <div className="savedAndCompShifts__spec">
              <div className="savedAndCompShifts__img">
                <img src={Setting} />
                Specialization
              </div>
              <button className="savedAndCompShifts__specButton1">
                Give feedback
              </button>
              <button className="savedAndCompShifts__specButton2">
                View Details
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="savedAndCompShifts__bookmark">
          <div className="savedAndCompShifts__bookmarkhead">
            <h2>XYZ Hospital</h2>
            <TurnedInIcon className="savedAndCompShifts__bookmarkimg" />
          </div>
          <p>illeonis, USA</p>
          <div className="savedAndCompShifts__logo">
            <div className="savedAndCompShifts__img">
              <img src={Calendar} />
              July 15th
            </div>
            <br />
            <div className="savedAndCompShifts__time">
              <div className="savedAndCompShifts__img">
                <img src={Clock} />
                7:00AM - 10:30AM
              </div>
              <h3>$41.00/hr</h3>
            </div>
            <br />
            <div className="savedAndCompShifts__spec">
              <div className="savedAndCompShifts__img">
                <img src={Setting} />
                Specialization
              </div>
              <button className="savedAndCompShifts__bookmarkButton1">
                Easy Apply
              </button>
              <button className="savedAndCompShifts__bookmarkButton2">
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedAndCompShifts;
