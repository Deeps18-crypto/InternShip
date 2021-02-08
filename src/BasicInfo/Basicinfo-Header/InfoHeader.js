import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./InfoHeader.css";

function InfoHeader({ progressHeader }) {
  return (
    <div>
      {!progressHeader ? (
        <div className="infoHeader">
          <NavLink activeStyle={{ color: "#1082cb" }} exact to="/BasicInfo">
            <div>
              <h3>Basic Info</h3>
            </div>
          </NavLink>
          <div className="infoHeader__2">
            <h3>Confirm Phone Number</h3>
          </div>
          <div className="infoHeader__3">
            <h3>Schedule Interview</h3>
          </div>
        </div>
      ) : (
        <div className="infoHeader">
          <Link exact to="/BasicInfo" className="infoHeader__link">
            <div>
              <h3>Facility Info</h3>
            </div>
          </Link>
          <div className="infoHeader__2">
            <h3> Additional Facility Info </h3>
          </div>
          <div className="infoHeader__3">
            <h3>Personal Info</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoHeader;
