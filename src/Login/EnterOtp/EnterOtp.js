import React, { useState, useEffect } from "react";
import "./EnterOtp.css";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Header from "../../Header/Header";

function EnterOtp() {
  const [count, setcount] = useState(30);

  useEffect(() => {
    let interval = null;
    interval =
      count > 0 &&
      setInterval(() => {
        setcount((count) => count - 1);
      }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="enterOtp">
      <Header />
      <div className="enterOtp__head">
        <Link to="/ForgetPassword">
          <div>
            <ArrowBackIcon />
          </div>
        </Link>
        <h2>Enter Otp</h2>
      </div>
      <p>
        Enter the verification code sent to you on your
        <br />
        registered Email address
      </p>
      <div className="enterOtp__input">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </div>
      <div className="enterOtp__para">
        Don't receive the code ? &nbsp;
        <p style={{ color: "#38B1FF" }}>Resend</p>
        <p className="enterOtp__timer">
          &nbsp;Wait for<h3> &nbsp;({count})</h3>
        </p>
      </div>
      <Link to="/CreateNewPassword">
        <button type="submit" className="enterOtp__button">
          Next
        </button>
      </Link>
    </div>
  );
}

export default EnterOtp;
