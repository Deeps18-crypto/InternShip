import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import "./CreateNewPassword.css";
import Header from "../../Header/Header";
import Spinner from "../../Spinner";

const style = {
  root: {
    width: "30%",
    marginBottom: "2.2em",
    marginLeft: "35em",
    marginTop: "5em",
  },
};
const useStyle = makeStyles(style);

function CreateNewPassword() {
  const [Load, setLoad] = useState(false);

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      Create_NewPassword: "",
      Confirmpassword: "",
    },
    onSubmit: (inputData) => {
      setLoad(true);
      history.push("/EnterOtp");
      console.log(inputData);
      setLoad(false);
    },
  });
  const classes = useStyle();

  let load = (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <TextField
        className={classes.root}
        variant="outlined"
        label="Create New Password"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.Create_NewPassword &&
        formik.errors.Create_NewPassword && (
          <p className="createNewPassword__form">
            {formik.errors.Create_NewPassword}
          </p>
        )}
      <TextField
        className={classes.root}
        variant="outlined"
        label="Confirm the Password"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.Confirmpassword && formik.errors.Confirmpassword && (
        <p className="createNewPassword__form">
          {formik.errors.Confirmpassword}
        </p>
      )}

      <button type="submit" className="createNewPassword__button">
        Login
      </button>
    </form>
  );
  if (Load) {
    load = <Spinner />;
  }
  return (
    <div>
      <Header />
      <div className="createNewPassword">
        <Link to="/EnterOtp">
          <div>
            <ArrowBackIcon />
          </div>
        </Link>
        <h2>Enter Password</h2>
      </div>
      {load}
    </div>
  );
}

export default CreateNewPassword;
