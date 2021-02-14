import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./ForgetPassword.css";
import ForgetPasswordimg from "../../assests/Frame.png";
import { Grid } from "@material-ui/core";

const style = {
  root: {
    width: "30%",
    marginBottom: "2.2em",
    marginLeft: "35em",
    marginTop: "2em",
  },
};
const useStyle = makeStyles(style);

const validate = (values) => {
  let errors = {};
  if (!values.email.trim()) {
    errors.email = "email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "email address is invalid";
  }

  return errors;
};
function ForgetPassword() {
  const [loading, setloading] = useState(false);

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: () => {
      history.push("/EnterOtp");
    },
  });
  const classes = useStyle();
  let load = (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <TextField
        className={classes.root}
        variant="outlined"
        label="Email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      <Grid container xs={12} xl={10} md={12} lg={10}>
        <Grid item xs={4} xl={3} md={2} lg={4} />

        <Grid item xs={8} xl={7} md={10} lg={7}>
          {formik.touched.email && formik.errors.email && (
            <p className="useformsSignup__form">{formik.errors.email}</p>
          )}
        </Grid>
      </Grid>
      <div>
        <p className="forgetPassword__para">
          You'll recieve a 4-digit code in your email for verification
        </p>
        <button type="submit" className="forgetPassword__button">
          Send
        </button>
      </div>
    </form>
  );

  return (
    <div className="forgetPassword">
      <div className="forgetPassword__head">
        <Link to="/login">
          <div>
            <ArrowBackIcon />
          </div>
        </Link>
        <h2>Forget Password?</h2>
      </div>
      <img src={ForgetPasswordimg} className="forgetPassword__img" />
      <p>Please enter the Email associated with your account</p>
      {load}
    </div>
  );
}

export default ForgetPassword;
