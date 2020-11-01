import React from 'react'
import {NavLink} from "react-router-dom"
import "./infoHeader.css";

function InfoHeader() {
    return (
        <div className="infoHeader">
         <NavLink activeStyle={{color:"#1082cb"}} exact to="/BasicInfo">
            <div>
              <h2 >Basic Info</h2>
           </div>
        </NavLink>
         <div className="infoHeader__2">
              <h2 >Confirm Phone Number</h2>
         </div>
         <div  className="infoHeader__3">
             <h2>Schedule Interview</h2>
         </div>
        </div>
    )
}

export default InfoHeader
