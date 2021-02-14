import React from "react";
import "./Signup.css";
import Image from "../../assests/Mask Group.png";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../../Header/Header";
import { Grid } from "@material-ui/core";

function Signup({ zipcode = false }) {
  const history = useHistory();
  const style = {
    root: {
      width: "50%",
      marginLeft: "16em",
      marginTop: "4em",
    },
  };
  const useStyle = makeStyles(style);

  // setloading(true);
  // auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((auth) => {
  //     console.log(auth);
  //     history.push("/BasicInfo");
  //     setloading(false);
  //   })
  //   .catch((e) => alert(e.message));

  const classes = useStyle();
  return (
    <Formik
      initialValues={{
        zipcode: "",
        dropDown: "",
      }}
      validationSchema={Yup.object({
        zipcode: Yup.string()
          .max(5, "Must be 5 number ")
          .min(5, "Must be 5 number ")
          .matches(/^[0-9\b]+$/, "Must be a number")
          .required("required"),
      })}
      onSubmit={() => {
        history.push("/Facility/SignUp");
      }}
    >
      {(formik) => (
        <div>
          {!zipcode ? (
            <div>
              <div>
                <Header />
              </div>
              <div className="FacilitysignUp">
                <div className="FacilitysignUp__left">
                  <div className="FacilitysignUp__leftHead">
                    <Link to="/Facility/ZipCode">
                      <div className="FacilitysignUp__leftArrow">
                        <ArrowBackIcon />
                      </div>
                    </Link>

                    <h2>
                      Great,<br></br>
                      Let's start with your application
                    </h2>
                  </div>

                  <div className="FacilitysignUp__input">
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                      <Grid container xs={12} xl={12} md={12} lg={12}>
                        <Grid item xs={12} xl={1} md={1} lg={12} />
                        <Grid item xs={12} xl={10} md={1} lg={12}>
                          <TextField
                            className={classes.root}
                            variant="outlined"
                            label="Enter ZIP Code of your Medical Facility"
                            type="tel"
                            name="zipcode"
                            onChange={formik.handleChange}
                            value={formik.values.zipcode}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.zipcode && formik.errors.zipcode && (
                            <p className="FacilitysignUp__form">
                              {formik.errors.zipcode}
                            </p>
                          )}
                          <br />

                          <FormControl
                            variant="outlined"
                            className={classes.root}
                          >
                            <InputLabel htmlFor="outlined-age-native-simple">
                              Select your Facility
                            </InputLabel>
                            <Select
                              native
                              label="Select your Facility"
                              inputProps={{
                                name: "age",
                                id: "outlined-age-native-simple",
                              }}
                            >
                              <option aria-label="None" value="" />
                              <option value={10}>Ten</option>
                              <option value={20}>Twenty</option>
                              <option value={30}>Thirty</option>
                            </Select>
                          </FormControl>
                          {formik.touched.confirmpassword &&
                            formik.errors.confirmpassword && (
                              <p className="FacilitysignUp__form">
                                {formik.errors.confirmpassword}
                              </p>
                            )}

                          <button
                            className="FacilitysignUp__button"
                            type="submit"
                          >
                            Next
                          </button>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                  <div className="FacilitysignUp__bottom">
                    <Grid container xs={12} xl={8} md={12} lg={12}>
                      <Grid item xs={12} xl={1} md={1} lg={12} />
                      <Grid item xs={12} xl={10} md={1} lg={12}>
                        <p>Could not find your Facility?</p>
                        <button
                          className="FacilitysignUp__button2"
                          onClick={() => history.push("/Facility/Info")}
                        >
                          Register Here
                        </button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="FacilitysignUp__right">
                  <img src={Image} />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <Header />
              </div>
              <div className="FacilitysignUp">
                <div className="FacilitysignUp__left">
                  <div className="FacilitysignUp__leftHead">
                    <Link to="/">
                      <div className="FacilitysignUp__leftArrow">
                        <ArrowBackIcon />
                      </div>
                    </Link>

                    <h2>
                      Great,<br></br>
                      Let's start with your application
                    </h2>
                  </div>

                  <div className="FacilitysignUp__input">
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                      <Grid container xs={12} xl={12} md={12} lg={12}>
                        <Grid item xs={12} xl={1} md={1} lg={12} />

                        <Grid item xs={12} xl={10} md={1} lg={12}>
                          <TextField
                            className={classes.root}
                            variant="outlined"
                            label="Enter ZIP Code of your Medical Facility"
                            type="tel"
                            name="zipcode"
                            onChange={formik.handleChange}
                            value={formik.values.zipcode}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.zipcode && formik.errors.zipcode && (
                            <p className="FacilitysignUp__form">
                              {formik.errors.zipcode}
                            </p>
                          )}
                          <br />
                        </Grid>
                      </Grid>
                      <Grid container xs={12} xl={12} md={12} lg={12}>
                        <Grid item xs={12} xl={1} md={1} lg={12} />

                        <Grid item xs={12} xl={10} md={1} lg={12}>
                          <button
                            className="FacilitysignUp__button"
                            type="submit"
                          >
                            Next
                          </button>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </div>
                <div className="FacilitysignUp__right">
                  <img src={Image} />
                </div>
              </div>
            </div>
          )}
          )
        </div>
      )}
    </Formik>
  );
}

export default Signup;
