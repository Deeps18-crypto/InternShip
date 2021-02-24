import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./LoginContent.css";
import { useHistory, Link } from "react-router-dom";
import Backdrop from "../AccountInformation/UpdateAccountInformtion/Backdorp/Backdrop";
import { connect } from "react-redux";
import { loginUser } from "../auth/userAction";
import { useFormik } from "formik";
import Spinner from "../Spinner";
import { Grid } from "@material-ui/core";

const validate = (values) => {
  let errors = {};

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

  return errors;
};
const style = {
  root: {
    width: "90%",
    marginTop: "2em",
    marginLeft: "4em",
  },
};

const useStyles = makeStyles(style);

const InputAdornments = ({ loginUser }) => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    showPassword: false,
  });

  const history = useHistory();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      login_type: 4,
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      loginUser(values, history, setSubmitting, setloading, setError);
    },
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let load = (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Email"
        className={classes.root}
        variant="outlined"
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Grid container xs={12} xl={12} md={12} lg={7}>
        <Grid item xs={4} xl={1} md={2} lg={2} />

        <Grid item xs={8} xl={8} md={10} lg={5}>
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          )}
        </Grid>
      </Grid>
      <FormControl className={classes.root} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          type={values.showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Grid container xs={12} xl={12} md={12} lg={12}>
        <Grid item xs={4} xl={1} md={1} lg={1} />

        <Grid item xs={8} xl={10} md={10} lg={10}>
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          )}
        </Grid>
      </Grid>
      <Grid container xs={12} xl={12} md={12} lg={12} marginBottom="10px">
        <Grid item xs={2} xl={1} md={1} lg={1} />

        <Grid item xs={6} xl={6} md={11} lg={11}>
          {error && <p style={{ color: "red", display: "flex" }}>{error}</p>}
        </Grid>
      </Grid>
      <div className="loginContent__password">
        <div className="loginContent__checkbox">
          <input type="checkbox" className="loginContent__input" />
          <label className="loginContent__label">Remember Me</label>
        </div>
        <div className="loginContent__passwordPara">
          <Link to="/ForgetPassword">
            <p>Forget Password</p>
          </Link>
        </div>
      </div>
      <button className="loginContent__button" type="submit  ">
        Login
      </button>
      <p className="loginContent__para">
        Not yet registered ?
        <Link className="loginContent__link" to="/SignUp">
          Sign Up
        </Link>
      </p>
    </form>
  );

  if (loading) {
    load = <Spinner />;
  }
  return (
    <div className={classes.root}>
      <div>
        <div>{load}</div>
      </div>
    </div>
  );
};
export default connect(null, { loginUser })(InputAdornments);
