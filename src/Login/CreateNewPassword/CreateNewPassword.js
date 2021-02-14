import React from "react";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../../Header/Header";
import { Grid } from "@material-ui/core";

function CreateNewPassword() {
  const history = useHistory();
  const style = {
    root: {
      width: "30%",
      marginLeft: "30em",
      marginTop: "4em",
    },
  };
  const useStyle = makeStyles(style);

  const classes = useStyle();
  return (
    <Formik
      initialValues={{
        CreateNewPassword: "",
        ConfirmPassword: "",
      }}
      validationSchema={Yup.object({
        CreateNewPassword: Yup.string()
          .min(8, "Must be greater than 8")
          .required("required"),
        ConfirmPassword: Yup.string()
          .oneOf([Yup.ref("CreateNewPassword")], "Password not matchs")
          .required("required"),
      })}
      onSubmit={() => {
        history.push("/Facility/SignUp");
      }}
    >
      {(formik) => (
        <div>
          <Header />
          <div className="enterOtp__head">
            <Link to="/EnterOtp">
              <div>
                <ArrowBackIcon />
              </div>
            </Link>
            <h2>Enter Password</h2>
          </div>
          <Grid
            container
            xs={12}
            xl={12}
            md={12}
            lg={12}
            className="createNewPassword"
          >
            <Grid item xs={12} xl={1} md={1} lg={12} />
            <Grid item xs={12} xl={10} md={1} lg={12}>
              <TextField
                className={classes.root}
                variant="outlined"
                label="Create a New Password"
                type="tel"
                name="CreateNewPassword"
                onChange={formik.handleChange}
                value={formik.values.CreateNewPassword}
                onBlur={formik.handleBlur}
              />
              {formik.touched.CreateNewPassword &&
                formik.errors.CreateNewPassword && (
                  <p className="FacilitysignUp__form">
                    {formik.errors.CreateNewPassword}
                  </p>
                )}
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            xl={12}
            md={12}
            lg={12}
            className="createNewPassword"
          >
            <Grid item xs={12} xl={1} md={1} lg={12} />
            <Grid item xs={12} xl={10} md={1} lg={12}>
              <TextField
                className={classes.root}
                variant="outlined"
                label="Confirm the Password"
                type="tel"
                name="ConfirmPassword"
                onChange={formik.handleChange}
                value={formik.values.ConfirmPassword}
                onBlur={formik.handleBlur}
              />
              {formik.touched.ConfirmPassword &&
                formik.errors.ConfirmPassword && (
                  <p className="FacilitysignUp__form">
                    {formik.errors.ConfirmPassword}
                  </p>
                )}
            </Grid>
          </Grid>
          <Link to="/CreateNewPassword">
            <button type="submit" className="enterOtp__button">
              Login
            </button>
          </Link>
        </div>
      )}
    </Formik>
  );
}

export default CreateNewPassword;
