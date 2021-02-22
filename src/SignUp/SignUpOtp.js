import React, { useState } from "react";
import "./Useforms.css";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner";
import { Grid } from "@material-ui/core";
import { signupUser } from "../auth/userAction";
import { connect } from "react-redux";

const style = {
  root: {
    width: "50%",
    marginBottom: "2.2em",
    marginLeft: "10em",
    marginTop: "2em",
  },
};
const useStyle = makeStyles(style);

const validate = (values) => {
  // if (!values.otp.trim()) {
  //   errors.otp = "Otp is required";
  // }
  // if (values.otp.length < 6) {
  //   errors.otp = "Otp must be a six digit";
  // } else if (values.otp.length > 6) {
  //   errors.otp = "Otp must be a six digit";
  // }

  return errors;
};
const SignUpOtp = ({ signupUser, user }) => {
  const [Otp, setOtp] = useState(false);
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
      otp: "",
      login_type: 4,
    },
    validate,
    onSubmit: (values, { setSubmitting, setFieldError }) => {
      console.log(values);
      setOtp(true);
      signupUser(values, history, setFieldError, setSubmitting);
    },
  });

  const classes = useStyle();

  return (
    <div className="useformsSignup">
      <>
        <h4 className="useform__h4">Enter the Otp you received</h4>
        <TextField
          className={classes.root}
          variant="outlined"
          label="Enter the Otp"
          type="string"
          name="otp"
          onChange={formik.handleChange}
          value={formik.values.otp}
          onBlur={formik.handleBlur}
        />
        <Grid container xs={12} xl={9} md={12} lg={7}>
          <Grid item xs={4} xl={2} md={2} lg={4} />

          <Grid item xs={8} xl={5} md={10} lg={5}>
            {formik.touched.otp && formik.errors.otp && (
              <p className="useformsSignup__form">{formik.errors.otp}</p>
            )}
          </Grid>
        </Grid>

        <Grid container xs={12} xl={12} md={12} lg={8}>
          <Grid item xs={4} xl={2} md={2} lg={4} />

          <Grid item xs={8} xl={10} md={10} lg={5}>
            <button className="useformsSignup__button" type="submit">
              Create a Account
            </button>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { signupUser })(SignUpOtp);
