import React from 'react'
import JobApplication from "./JobApplication"
import "./JobApplicationMain.css"
import JobsHeader from "../Jobs/JobsHeader/JobsHeader"
import onelogo from "../assests/Group 62.png"
import DetailedRows from "../DetailedJobs/DetailedRows/DetailedRows"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import JobFooter from "../Jobs/JobFooter/JobFooter"

import {Link} from "react-router-dom"



function JobApplicationMain() {
    return (
        <div className="jobApplicationMain">
                 <JobsHeader/>
             <div className="jobApplicationMain__head">
                 <Link to="/Detailedjobs">
                 <ArrowBackIosIcon/>
                 </Link>
                    <h2>XYZ Facility is looking for talented professionals like you</h2>
            </div>  
                <JobApplication/>
            <div className="jobApplicationMain__content">
                 <h2>Complete these Necessary Steps</h2>
             <div className="jobApplicationMainbody">
             <div className="jobApplicationMainbody__logo">
                      <img src={onelogo}/>
             </div>
             <div className="jobApplicationMainbody__content">
                      <h4>Provide additional documents relevant for this job</h4>
                      <p>The facility you're applying for needed these documents.<br/>
                      You'll be unable to submit your application without these.</p>
                        <button className="jobApplicationMainbody__button1">Upload</button>
                        <button className="jobApplicationMainbody__button2">Submit the application</button>
             </div>
            </div>
        </div>
            <DetailedRows/>
            <JobFooter/>
        </div>
    )
}

export default JobApplicationMain
