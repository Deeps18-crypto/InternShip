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
import { auth } from "../firebase";
import Backdrop from "../AccountInformation/UpdateAccountInformtion/Backdorp/Backdrop";
import { connect } from "react-redux";
import { loginUser } from "../auth/userAction";
import { useFormik } from "formik";
import Spinner from "../Spinner";

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
    marginBottom: "2em",
    marginLeft: "4em",
  },
};

const useStyles = makeStyles(style);

const InputAdornments = ({ loginUser }) => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
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
    onSubmit: (values, { setSubmitting, setFieldError }) => {
      console.log(values);
      loginUser(values, history, setFieldError, setSubmitting, setloading);
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
      />
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
          labelWidth={70}
        />
      </FormControl>
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
        {error && (
          <div>
            <Backdrop onClick={() => seterror(null)} />
            <div className="loginContent__error">{error && error}</div>
          </div>
        )}
        <div>{load}</div>
      </div>
    </div>
  );
};
export default connect(null, { loginUser })(InputAdornments);
