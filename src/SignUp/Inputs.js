import React from "react";
import "./Inputs.css";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Useforms from "./Useforms";
import Validate from "./Validate";

const style = {
  root: {
    width: "50%",
    marginBottom: "2.2em",
    marginLeft: "8em",
    marginTop: "1em",
  },
};
const useStyle = makeStyles(style);

function Inputs({ submitform }) {
  const { submitHandler, handlerChange, values, errors,formisValid } = Useforms(
    submitform,
    Validate
  );

  const classes = useStyle();
  return (
    <div className="inputs">
      <Link to="/">
        <div className="inputs__align">
          <ArrowBackIcon className="inputs__arrowIcon" />
        </div>
      </Link>

      <h2>
        Great,<br></br>
        Let's start with your application
      </h2>
      <form onSubmit= {submitHandler}>
        <div className="inputs__form">
          <TextField
            className={classes.root}
            variant="outlined"
            label="Email"
            name="email"
            onChange={handlerChange}
            value={values.email}
          />
          {errors.email && <p>{errors.email}</p>}

          <TextField
            className={classes.root}
            variant="outlined"
            label="Create a Password"
            type="password"
            name="password"
            onChange={handlerChange}
            value={values.password}
          />
          <br />
          {errors.password && <p>{errors.password}</p>}

          <TextField
            className={classes.root}
            variant="outlined"
            label="Confirm a Password"
            type="password"
            name="confirmpassword"
            onChange={handlerChange}
            value={values.confirmpassword}
          />
          <br />
          {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
              <button
                className="inputs__button"
                type="submit"
                disabled={!formisValid}
              >
                Create a Account
              </button>
            </div>
      </form>
    </div>
  );
}

export default Inputs;
