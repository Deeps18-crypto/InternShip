import React from 'react'
import JobsHeader from "../Jobs/JobsHeader/JobsHeader"
import DetailedJobs from "./DetailedJobs"
import DetailedRows from "./DetailedRows/DetailedRows"
import JobFooter from "../Jobs/JobFooter/JobFooter"


function DetailedMain() {
    return (
        <div>
             <JobsHeader/>
            <DetailedJobs/>
            <DetailedRows/>
            <JobFooter/>
            </div>
    )
}

export default DetailedMain
