import React from "react";
import "./JobsMain.css";
import FilterDetail from "./Filter/FilterDetail";
import JobsHeader from "./JobsHeader/JobsHeader";
import Search from "./SearchBar/Search";
import JobFooter from "./JobFooter/JobFooter";
import DatePickers from "./DatePicker/DatePickers";
import Pagination from "./Pagination/Pagination";
import JobDetails from "./JobDetails/JobDetails";

function JobsMain() {
  return (
    <div>
      <JobsHeader />
      <Search />
      <DatePickers />
      <Pagination />

      <div className="jobsmain">
        <JobDetails />
        <FilterDetail />
      </div>
      <Pagination />
      <JobFooter />
    </div>
  );
}

export default JobsMain;
