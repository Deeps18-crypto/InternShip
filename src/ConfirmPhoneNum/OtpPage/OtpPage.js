import React, { useState } from "react";
import "./OtpPage.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid } from "@material-ui/core";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { userOtp } from "../../auth/userAction";
import { connect } from "react-redux";

function OtpPage({ userOtp }) {
  const formik = useFormik({
    initialValues: {
      email: "sharathgolluri@gmail.com",
      password: "55555555",
      otp: "",
      login_type: 4,
    },

    onSubmit: (values, { setSubmitting, setFieldError }) => {
      console.log(values);
      userOtp(values, history, setFieldError, setSubmitting);
    },
  });
  // const [Otp, setOpt] = useState(new Array(6).fill(""));
  // const [disable, setDisable] = useState(true);
  // const handlerChange = (element, index) => {
  //   if (isNaN(element.value)) return false;
  //   setOpt([...Otp.map((d, idx) => (idx === index ? element.value : d))]);

  //   if (element.nextSibling) {
  //     element.nextSibling.focus();
  //   }
  //   setDisable(false);
  // };

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
        <TextField
          variant="outlined"
          label="Email"
          name="otp"
          onChange={formik.handleChange}
          value={formik.values.otp}
          onBlur={formik.handleBlur}
        />
        <h4>A code has been sent to the phone number you entered via sms</h4>
        <div className="otpPage__button">
          <button type="submit">Confirm</button>
        </div>
      </div>
    </form>
  );
}

export default connect(null, { userOtp })(OtpPage);
