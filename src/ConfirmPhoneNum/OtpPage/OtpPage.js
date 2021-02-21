import React, { useState } from "react";
import "./OtpPage.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid } from "@material-ui/core";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { mobileOtp } from "../../auth/userAction";
import { connect } from "react-redux";

function OtpPage({ mobileOtp, user }) {
  const formik = useFormik({
    initialValues: {
      otp: "",
      login_type: 4,
    },

    onSubmit: (values, { setSubmitting, setFieldError }) => {
      console.log(values);
      userOtp(values, history, setFieldError, setSubmitting);
    },
  });
  const [Otp, setOpt] = useState(new Array(6).fill(""));
  const [disable, setDisable] = useState(true);
  const handlerChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOpt([...Otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    setDisable(false);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="otpPage">
        <Grid
          container
          xs={12}
          xl={12}
          md={12}
          lg={12}
          className="otpPage__head"
        >
          {user.email}
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
        <div className="otpPage__button">
          <button type="submit">Confirm</button>
        </div>
      </div>
    </form>
  );
}
const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { mobileOtp })(OtpPage);
