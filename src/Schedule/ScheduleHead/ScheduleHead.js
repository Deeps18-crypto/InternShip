import React from 'react'
import {Link} from "react-router-dom"
import "./ScheduleHead.css"

function ScheduleHead() {
    return (
        <div className="scheduleHead">
        
        <div className="schedule_basicInfo">
         <Link to ="/BasicInfo">
             <div className="schedule_basic">
                <h3 >Basic Info</h3>
             </div>
         </Link>
        </div>
    <div className="schedule_contactInfo">
         <Link  to="/OtpVerification">
             <div className="schedule_contact">
               <h3 >Confirm Phone Number</h3>
            </div>
         </Link>
     </div>
         <div  className="schedule_scheduleInfo">
             <h3>Schedule Interview</h3>
         </div>
</div>
    )
}

export default ScheduleHead
