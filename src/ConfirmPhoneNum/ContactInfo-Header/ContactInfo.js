import React from 'react'
import "./ContactInfo.css"
import {NavLink} from "react-router-dom"

function ContactInfo() {
    return (
<div className="contactInfoHeader">
        <div className="basicInfo">
            <NavLink activeClassName="active" to="/OtpVerification">
                <div>
                    <h2 >Basic Info</h2>
              </div>
            </NavLink>
        </div>
    <div className="contactInfo">
         <NavLink activeClassName="active" to="/OtpVerification">
             <div>
               <h2 >Confirm Phone Number</h2>
            </div>
         </NavLink>
     </div>
         <div  className="contactInfoHeader__3">
             <h2>Schedule Interview</h2>
         </div>
</div>
    )
}

export default ContactInfo
