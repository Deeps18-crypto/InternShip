import React from "react";
import Frame from "../assests/Frame 14.png";
import "./JobApplication.css";
import DcarouselImage from "../DetailedJobs/DetailedImage/DcarouselImage";

function JobApplication() {
  return (
    <div className="jobApplication">
      <div className="jobApplication__img">
        <DcarouselImage />
      </div>
      <div className="jobApplication__content">
        <button>$41.00/hr</button>
        <div className="jobApplication__input1">
          <input type="text" />
          <br />
        </div>
        <div className="jobApplication__input2">
          <input type="text" />
          <input type="text" />
        </div>
        <div className="jobApplication__input1">
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default JobApplication;
