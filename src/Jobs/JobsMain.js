import React from 'react'
import "./JobsMain.css"
import FilterDetail from "./Filter/FilterDetail"
import JobsHeader from "./JobsHeader/JobsHeader"
import Search from "./SearchBar/Search"
import JobFooter from "./JobFooter/JobFooter"
import Details from "./JobDetails/Details"
import DatePickers from "./DatePicker/DatePickers"
import Pagination from "./Pagination/Pagination"



function JobsMain() {
    return (
        <div>
        <JobsHeader/>
        <Search/>
        <DatePickers/>
        <Pagination/>
        
        <div className="jobsmain">
           <Details/>
            <FilterDetail/>

        </div>
        <Pagination/>

        <JobFooter/>
        </div>

    )
}

export default JobsMain
