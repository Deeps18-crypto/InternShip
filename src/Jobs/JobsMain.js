import React from "react";
import "./JobsMain.css";
import FilterDetail from "./Filter/FilterDetail";
import JobsHeader from "./JobsHeader/JobsHeader";
import Search from "./SearchBar/Search";
import JobFooter from "./JobFooter/JobFooter";
import DatePickers from "./DatePicker/DatePickers";
import JobDetails from "./JobDetails/JobDetails";

function JobsMain() {
  return (
    <div>
      <JobsHeader />
      <div className="jobsmain__search">
        <Search />
      </div>
      <DatePickers />
      <div className="jobsmain__main">
        <JobDetails />
        <FilterDetail />
      </div>
      <JobFooter />
    </div>
  );
}

export default JobsMain;
