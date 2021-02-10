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
        zipcode: Yup.string().min(5, "zipcode should be five").required(""),
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
              <div className="signUp">
                <div className="signUp__left">
                  <div className="signUp__leftHead">
                    <Link to="/Facility/ZipCode">
                      <div className="signUp__leftArrow">
                        <ArrowBackIcon />
                      </div>
                    </Link>

                    <h2>
                      Great,<br></br>
                      Let's start with your application
                    </h2>
                  </div>

                  <div className="signUp__input">
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                      <TextField
                        className={classes.root}
                        variant="outlined"
                        label="Enter ZIP Code of your Medical Facility"
                        type="number"
                        name="zipcode"
                        onChange={formik.handleChange}
                        value={formik.values.zipcode}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.zipcode && formik.errors.zipcode && (
                        <p className="signUp__form">{formik.errors.zipcode}</p>
                      )}
                      <br />
                      <FormControl variant="outlined" className={classes.root}>
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
                          <p className="useforms__form">
                            {formik.errors.confirmpassword}
                          </p>
                        )}
                      <button className="signUp__button" type="submit">
                        Next
                      </button>
                    </form>
                  </div>
                  <div className="signUp__bottom">
                    <p>Could not find your Facility?</p>
                    <button
                      className="signUp__button2"
                      onClick={() => history.push("/Facility/Info")}
                    >
                      Register Here
                    </button>
                  </div>
                </div>
                <div className="signUp__right">
                  <img src={Image} />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <Header />
              </div>
              <div className="signUp">
                <div className="signUp__left">
                  <div className="signUp__leftHead">
                    <Link to="/">
                      <div className="signUp__leftArrow">
                        <ArrowBackIcon />
                      </div>
                    </Link>

                    <h2>
                      Great,<br></br>
                      Let's start with your application
                    </h2>
                  </div>

                  <div className="signUp__input">
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                      <TextField
                        className={classes.root}
                        variant="outlined"
                        label="Enter ZIP Code of your Medical Facility"
                        type="number"
                        name="zipcode"
                        onChange={formik.handleChange}
                        value={formik.values.zipcode}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.zipcode && formik.errors.zipcode && (
                        <p className="signUp__form">{formik.errors.zipcode}</p>
                      )}
                      <br />

                      <button className="signUp__button" type="submit">
                        Next
                      </button>
                    </form>
                  </div>
                </div>
                <div className="signUp__right">
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
