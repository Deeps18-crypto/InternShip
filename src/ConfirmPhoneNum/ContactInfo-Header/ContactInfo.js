import React from "react";
import "./ContactInfo.css";
import { Link } from "react-router-dom";

function ContactInfo({ progress }) {
  return (
    <div>
      {!progress ? (
        <div className="contactInfoHeader">
          <div className="contact_basicInfo">
            <Link to="/BasicInfo">
              <div className="contact_basic">
                <h3>Basic Info</h3>
              </div>
            </Link>
          </div>
          <div className="contact_contactInfo">
            <Link to="/OtpVerification">
              <div className="contact_contact">
                <h3>Confirm Phone Number</h3>
              </div>
            </Link>
          </div>
          <div className="contact_scheduleInfo">
            <h3>Schedule Interview</h3>
          </div>
        </div>
      ) : (
        <div className="contactInfoHeader">
          <div className="contact_basicInfo">
            <Link to="/Facility/Info">
              <div className="contact_basic">
                <h3>Facility</h3>
              </div>
            </Link>
          </div>
          <div className="contact_contactInfo">
            <Link to="/OtpVerification">
              <div className="contact_contact">
                <h3>Additional Facility Info</h3>
              </div>
            </Link>
          </div>
          <div className="contact_personalInfo">
            <h3>Personal Info</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactInfo;
