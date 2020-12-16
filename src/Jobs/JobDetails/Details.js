import React from "react";
import JobDetails from "./JobDetails";
import "./Details.css";

function Details() {
  return (
    <div className="details">
      <div className="details__row">
        <JobDetails />
      </div>
      <div className="details__row">
        <JobDetails />
      </div>
      <div className="details__row">
        <JobDetails />
      </div>
    </div>
  );
}

export default Details;
