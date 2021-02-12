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

const style = {
  root: {
    width: "90%",
    marginBottom: "2em",
    marginLeft: "3em",
    marginTop: "2em",
  },
};

const useStyles = makeStyles(style);

export default function InputAdornments() {
  const [values, setValues] = useState({
    showPassword: false,
  });

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const history = useHistory();
  const classes = useStyles();

  const clickHandler = (e) => {
    e.preventDefault();
    setloading(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/jobs");
          setloading(false);
        }
      })
      .catch((e) => seterror(e.message));
    setloading(false);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let load = (
    <form>
      <TextField
        label="Email"
        className={classes.root}
        variant="outlined"
        onChange={(e) => setemail(e.target.value)}
      />
      <FormControl className={classes.root} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          type={values.showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
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
      <button
        onClick={clickHandler}
        className="loginContent__button"
        type="submit  "
      >
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
}
