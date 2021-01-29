import React, { useState } from "react";
import "./Useforms.css";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner";

const style = {
  root: {
    width: "50%",
    marginBottom: "2.2em",
    marginLeft: "8em",
    marginTop: "4em",
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
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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

      axios
        .post(
          "https://nursd-42b0a-default-rtdb.firebaseio.com/SignUp.json",
          inputData
        )
        .then((response) => {
          history.push("/BasicInfo");
          setloading(false);

          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
        });
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
      {formik.touched.password && formik.errors.password && (
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
        onBlur={formik.handleBlur}
      />
      {formik.touched.confirmpassword && formik.errors.confirmpassword && (
        <p className="useforms__form">{formik.errors.confirmpassword}</p>
      )}
      <button className="useforms__button" type="submit">
        Create a Account
      </button>
    </form>
  );
  if (loading) {
    load = <Spinner />;
  }
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
      {load}
    </div>
  );
}

export default Useforms;
