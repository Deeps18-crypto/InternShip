import React from "react";
import "./EnterOtp.css";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function EnterOtp() {
  return (
    <div className="enterOtp">
      <div className="enterOtp__head">
        <Link to="/login">
          <div>
            <ArrowBackIcon />
          </div>
        </Link>
        <h2>Enter Otp</h2>
      </div>
      <h3>
        Enter the verification code sent to you on your
        <br />
        registered Email address
      </h3>
    </div>
  );
}

export default EnterOtp;
