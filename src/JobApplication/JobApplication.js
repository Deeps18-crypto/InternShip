import React from "react";
import "./JobApplication.css";
import DcarouselImage from "../DetailedJobs/DetailedImage/DcarouselImage";

function JobApplication({
  title,
  image,
  time,
  qualification,
  amount,
  place,
  date,
}) {
  return (
    <div className="jobApplication">
      <div className="jobApplication__img">
        <DcarouselImage />
      </div>
      <div className="jobApplication__content">
        <button>{amount}</button>
        <div className="jobApplication__input1">
          <p>{title}</p>
          <br />
        </div>
        <div className="jobApplication__input2">
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div className="jobApplication__input1">
          <p>{place}</p>
        </div>
      </div>
    </div>
  );
}

export default (JobApplication);
