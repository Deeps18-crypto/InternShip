import React from "react";
import JobsImage from "./Image/JobsImage";
import Content from "./Content/Content";

import "./JobDetails.css";

function JobDetails() {
  return (
    <div className="jobdetails">
      <JobsImage />
      <Content />
    </div>
  );
}

export default JobDetails;
