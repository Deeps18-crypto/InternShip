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
  let errors = {};
  let phone = /^[0-9\b]+$/;

  if (!values.email.trim()) {
    errors.email = "email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "email address is invalid";
  }

  if (!values.password.trim()) {
    errors.password = "password is required";
  } else if (values.password.length < 8) {
    errors.password = "password should be greater than eight";
  }

  if (!values.confirmpassword.trim()) {
    errors.confirmpassword = "confirm password is required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "password does not match";
  }

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
const Useforms = ({ signupUser, jwtToken }) => {
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
      signupUser(values, history, setFieldError, setSubmitting, jwtToken);
    },
  });
  const handleChange = () => {
    history.push("/BasicInfo");
  };
  const classes = useStyle();
  let load = (
    <>
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
        <Grid container xs={12} xl={9} md={12} lg={7}>
          <Grid item xs={4} xl={2} md={2} lg={4} />

          <Grid item xs={8} xl={5} md={10} lg={5}>
            {formik.touched.email && formik.errors.email && (
              <p className="useformsSignup__form">{formik.errors.email}</p>
            )}
          </Grid>
        </Grid>

        <TextField
          className={classes.root}
          variant="outlined"
          label="Create a Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        <Grid container xs={12} xl={9} md={12} lg={7}>
          <Grid item xs={4} xl={2} md={2} lg={4} />

          <Grid item xs={8} xl={5} md={10} lg={5}>
            {formik.touched.password && formik.errors.password && (
              <p className="useformsSignup__form">{formik.errors.password}</p>
            )}
          </Grid>
        </Grid>

        <TextField
          className={classes.root}
          variant="outlined"
          label="Confirm a Password"
          type="password"
          name="confirmpassword"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          onBlur={formik.handleBlur}
        />

        <Grid container xs={12} xl={9} md={12} lg={7}>
          <Grid item xs={4} xl={2} md={2} lg={3} />

          <Grid item xs={8} xl={5} md={10} lg={8}>
            {formik.touched.confirmpassword &&
              formik.errors.confirmpassword && (
                <p className="useformsSignup__form">
                  {formik.errors.confirmpassword}
                </p>
              )}
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={8}>
          <Grid item xs={4} xl={2} md={2} lg={4} />

          <Grid item xs={8} xl={10} md={10} lg={5}>
            <button className="useformsSignup__button" type="submit">
              Verify Account
            </button>
          </Grid>
        </Grid>
      </form>
      <form onSubmit={formik.handleSubmit}>
        {Otp ? (
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
        ) : null}
      </form>
    </>
  );
  // if (loading) {
  //   load = <Spinner />;
  // }

  return (
    <div className="useformsSignup">
      <div className="useformsSignup__head">
        <Link to="/">
          <div className="useformsSignup__align">
            <ArrowBackIcon className="useformsSignup__arrowIcon" />
          </div>
        </Link>
        <h2>
          Great,<br></br>
          Let's start with your application
        </h2>
      </div>
      {load}
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
  jwtToken: session.jwtToken,
});

export default connect(mapStateToProps, { signupUser })(Useforms);
