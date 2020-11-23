import React from "react";
import Calendar from "../../../../assests/calendar 1.png";
import Clock from "../../../../assests/clock.png";
import Setting from "../../../../assests/settings.png";
import "./UpComingShiftCard.css";

function UpComingShiftCard() {
  return (
    <div className="upComingShiftCard">
      <h2>XYZ Hospital</h2>
      <p>illeonis, USA</p>
      <div className="upComingShiftCard__logo">
        <div className="upComingShiftCard__img">
          <img src={Calendar} />
          July 15th
        </div>
        <br />
        <div className="upComingShiftCard__time">
          <div className="upComingShiftCard__img">
            <img src={Clock} />
            7:00AM - 10:30AM
          </div>
          <h3>$41.00/hr</h3>
        </div>
        <br />
        <div className="upComingShiftCard__spec">
          <div className="upComingShiftCard__img">
            <img src={Setting} />
            Specialization
          </div>
          <button className="upComingShiftCard__specButton1">
            Reschedule Shift
          </button>
          <button className="upComingShiftCard__specButton2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpComingShiftCard;
