import React, { useEffect } from "react";
import "./JobApplication.css";
import DcarouselImage from "../DetailedJobs/DetailedImage/DcarouselImage";
import Calendar from "../assests/calendar 1.png";
import Clock from "../assests/clock.png";
import Map from "../assests/map-pin 1.png";
import Stethoscope from "../assests/uil_stethoscope.png";

function JobApplication({ time, qualification, amount, date, id, place }) {
  return (
    <div className="jobApplication">
      <div className="jobApplication__img">
        <DcarouselImage />
        {id}
      </div>
      <div className="jobApplication__content">
        <button>${amount} .00/hr</button>
        <div className="jobApplication__input1">
          <p>
            <img src={Map} />
            {place}
          </p>

          <br />
        </div>
        <div className="jobApplication__input">
          <div className="jobApplication__input2">
            <p>
              <img src={Calendar} />
              {date}
            </p>
          </div>
          <div className="jobApplication__inputTime">
            <p>
              <img src={Clock} />
              {time}
            </p>
          </div>
        </div>
        <div className="jobApplication__input1">
          <p>
            <img src={Stethoscope} />
            {qualification}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobApplication;
