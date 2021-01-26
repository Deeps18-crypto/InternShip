import React from "react";
import "./JobsMain.css";
import JobsHeader from "./JobsHeader/JobsHeader";
import JobFooter from "./JobFooter/JobFooter";
import Content from "./JobDetails/Content/Content";

function JobsMain() {
  return (
    <div>
      <JobsHeader />
      <div className="jobsmain__main">
        <Content />
      </div>
      <JobFooter />
    </div>
  );
}

export default JobsMain;
