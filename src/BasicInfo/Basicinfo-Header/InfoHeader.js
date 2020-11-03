import React from 'react'
import {NavLink} from "react-router-dom"
import "./infoHeader.css";

function InfoHeader() {
    return (
        <div className="infoHeader">
         <NavLink activeStyle={{color:"#1082cb"}} exact to="/BasicInfo">
            <div>
              <h3>Basic Info</h3>
           </div>
        </NavLink>
         <div className="infoHeader__2">
              <h3>Confirm Phone Number</h3>
         </div>
         <div  className="infoHeader__3">
             <h3>Schedule Interview</h3>
         </div>
        </div>
    )
}

export default InfoHeader
