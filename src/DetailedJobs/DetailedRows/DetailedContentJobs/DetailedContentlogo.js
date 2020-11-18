import React from 'react'
import "./DetailedContentlogo.css"
import Calendar from "../../../assests/calendar 1.png"
import Clock from "../../../assests/clock.png"

function DetailedContentJobs() {
    return (
        <div className="detailedcontentlogo">
            <div className="detailedcontentlogo__logo1">
            <div className="detailedcontentlogo__logo12">
                  <img src={Calendar} alt=""/> <label>07/05/2020</label>
            </div>
            <div className="detailedcontentlogo__logo123">
                  <img src={Clock} alt=""/> <label>7:00 AM - 3:30 PM</label>
            </div>
            
            </div>
            <div className="detailedcontentlogo__logo2">
            <div className="detailedcontentlogo__logo22">
                  <img src={Calendar} alt=""/> <label>RCN Clinical Management</label>
            </div>
            <div className="detailedcontentlogo__logo223">
                  <p>$41.00/hr</p>
            </div>
            
            </div>
        </div>
    )
}

export default DetailedContentJobs
