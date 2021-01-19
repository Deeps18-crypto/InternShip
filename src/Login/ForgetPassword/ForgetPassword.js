import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./ForgetPassword.css";
import ForgetPasswordimg from "../../assests/Frame.png";

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
  // let errors = {};
  // if (!values.email.trim()) {
  //   errors.email = "email is required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = "email address is invalid";
  // } else if (!values.email.includes("@gmail.com")) {
  //   errors.email = "invalid email";
  // }
  // if (!values.password.trim()) {
  //   errors.password = "password is required";
  // } else if (values.password.length < 8) {
  //   errors.password = "password should be greater than eight";
  // }
  // if (!values.confirmpassword.trim()) {
  //   errors.confirmpassword = "confirm password is required";
  // } else if (values.confirmpassword !== values.password) {
  //   errors.confirmpassword = "password does not match";
  // }
  // return errors;
};
function ForgetPassword() {
  const [loading, setloading] = useState(false);

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit: (inputData) => {
      setloading(true);
      history.push("/EnterOtp");
      console.log(inputData);
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
      {formik.touched.email && formik.errors.email && (
        <p className="useforms__form">{formik.errors.email}</p>
      )}
      <p className="forgetPassword__para">
        You'll recieve a 4-digit code in your email for verification
      </p>
      <button type="submit" className="forgetPassword__button">
        Send
      </button>
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
