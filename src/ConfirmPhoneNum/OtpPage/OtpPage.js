import React, { useState } from "react";
import "./OtpPage.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid } from "@material-ui/core";

function OtpPage() {
  const [Otp, setOpt] = useState(new Array(4).fill(""));
  const [disable, setDisable] = useState(true);
  console.log(Otp);
  const handlerChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOpt([...Otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    setDisable(false);

    console.log(element);
  };

  return (
    <div className="otpPage">
      <Grid container xs={12} xl={12} md={12} lg={12}  className="otpPage__head">
        <Grid item xs={12} xl={1} md={1} lg={1}>
          <Link to="/BasicInfo">
            <ArrowBackIcon />
          </Link>
        </Grid>
        <Grid item xs={12} xl={4} md={4} lg={4}>
          <h2>Confirm your phone number</h2>
        </Grid>
      </Grid>

      <h4>Enter the code you received from via sms</h4>
      {Otp.map((data, index) => {
        return (
          <input
            autoComplete="off"
            type="text"
            maxLength="1"
            name="otp"
            key={index}
            value={data}
            onChange={(e) => handlerChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        );
      })}
      <h4>A code has been sent to the phone number you entered via sms</h4>
      <Link to="/ScheduleInterview">
        <div className="otpPage__button">
          <button disabled={disable}>Confirm</button>
        </div>
      </Link>
    </div>
  );
}

export default OtpPage;
