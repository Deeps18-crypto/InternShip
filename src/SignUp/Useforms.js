import React from "react";
import "./Useforms.css";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import axios from "axios";
import {useHistory} from "react-router-dom"

const style = {
  root: {
    width: "50%",
    marginBottom: "2.2em",
    marginLeft: "7em",
    marginTop: "3em",
  },
};
const useStyle = makeStyles(style);

const validate = (values) => {
  let errors = {};

  if (!values.email.trim()) {
    errors.email = "email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "email address is invalid";
  } else if (!values.email.includes("@gmail.com")) {
    errors.email = "invalid email";
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
  return errors;
};
function Useforms() {
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit: (inputData) => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", inputData)
        .then((response) => {
          history.push("/BasicInfo")
          console.log(response);
        })
        .catch((error) => {
          alert("Network error!!")
          console.log(error);
        });
      console.log(inputData);
    },
  });
  const classes = useStyle();
  return (
    <div className="useforms">
      <Link to="/">
        <div className="useforms__align">
          <ArrowBackIcon className="useforms__arrowIcon" />
        </div>
      </Link>
      <h2>
        Great,<br></br>
        Let's start with your application
      </h2>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          className={classes.root}
          variant="outlined"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <p className="useforms__form">{formik.errors.email}</p>
        )}
        <TextField
          className={classes.root}
          variant="outlined"
          label="Create a Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <p className="useforms__form">{formik.errors.password}</p>
        )}

        <TextField
          className={classes.root}
          variant="outlined"
          label="Confirm a Password"
          type="password"
          name="confirmpassword"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
        />
        {formik.errors.confirmpassword && (
          <p className="useforms__form">{formik.errors.confirmpassword}</p>
        )}
        <button className="useforms__button" type="submit">
          Create a Account
        </button>
      </form>
    </div>
  );
}

export default Useforms;
