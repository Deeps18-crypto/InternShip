import React, { useState } from "react";
import "./Info.css";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "./Datepicker";
import * as Yup from "yup";
import { Formik } from "formik";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { BasicInfo } from "../../auth/userAction";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  margin: {
    height: theme.spacing(4),
  },
}));

const marks = [
  {
    value: 10,
    label: "10 miles",
  },
  {
    value: 20,
    label: "20 miles",
  },

  {
    value: 30,
    label: "30 miles",
  },
  {
    value: 40,
    label: "40 miles",
  },
  {
    value: 50,
    label: "50 miles",
  },
  {
    value: 60,
    label: "60 miles",
  },

  {
    value: 70,
    label: "70 miles",
  },
  {
    value: 80,
    label: "80 miles",
  },
  {
    value: 90,
    label: "90 miles",
  },
  {
    value: 100,
    label: "100 miles",
  },
];

const Info = ({ BasicInfo, jwtToken, user }) => {
  const [submit, setsubmit] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        phone_no: "",
        emergency_phone_no: "",
        secondary_email: "",
        dob: "",

        address: {
          street_address: "",
          city: "",
          state: "",
          zip_code: "",
        },

        qualification: {
          rn: false,
          lpn: false,
          crna: false,
          cnm: false,
          cnastna: false,
        },
        work_shift_types: {
          morning: false,
          evening: false,
          night: false,
          weekend: false,
          weekday: false,
          rotating: false,
        },
        work_in_shifts: {
          six: false,
          eight: false,
          ten: false,
          twelve: false,
          no_preference: false,
        },
        willingness_to_commute: 10,
        experience: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        first_name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required("required"),
        last_name: Yup.string()
          .max(20, "Must be 20 characters or less")
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required("required"),
        secondary_email: Yup.string()
          .email("Invalid email address")
          .required("required"),
        phone_no: Yup.string().required("required"),
        emergency_phone_no: Yup.string().matches(
          /^[0-9\b]+$/,
          "Must be a number"
        ),
        dob: Yup.date("").required("").nullable().required("required"),
        street_address: Yup.string().matches(/[a-z]/gi, "Must be a alphabet"),
        state: Yup.string().matches(/[a-z]/gi, "Must be a alphabet"),
        zipcode: Yup.string()
          .matches(/^[0-9\b]+$/, "Must be a number")
          .max(5, "Must be 5 number ")
          .min(5, "Must be 5 number "),
        city: Yup.string().matches(/[a-z]/gi, "Must be a alphabet"),
        qualification: Yup.object(),
        work_in_shifts: Yup.object(),
        work_shift_types: Yup.object(),
        terms: Yup.bool().oneOf([true], "required"),
      })}
      onSubmit={(inputData, { setSubmitting, setFieldError }) => {
        setsubmit(inputData);
        console.log(inputData);
        BasicInfo(inputData, history, setFieldError, setSubmitting, jwtToken);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <>
            <div className="info">
              <div className="info__head">
                <div className="info__first">
                  <div className="info__title">
                    <h4>
                      First Name<p>*</p>
                      {formik.touched.first_name &&
                        formik.errors.first_name && (
                          <p>{formik.errors.first_name}</p>
                        )}
                    </h4>
                  </div>
                  <input
                    type="text"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="info__second">
                  <div className="info__title">
                    <h4>
                      Last Name<p>*</p>
                      {formik.touched.last_name && formik.errors.last_name && (
                        <p>{formik.errors.last_name}</p>
                      )}
                    </h4>
                  </div>
                  <input
                    type="text"
                    name="last_name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="info__head">
                <div className="info__first">
                  <div className="info__title">
                    <h4>
                      Phone Number(You'll recieve an OTP for verification)
                      <p>*</p>
                      {formik.touched.phone_no && formik.errors.phone_no && (
                        <p>{formik.errors.phone_no}</p>
                      )}
                    </h4>
                  </div>
                  <input
                    type="tel"
                    name="phone_no"
                    placeholder="+91"
                    value={formik.values.phone_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="info__second">
                  <div className="info__title">
                    <h4>
                      Emergency Phone Number
                      {formik.touched.emergency_phone_no &&
                        formik.errors.emergency_phone_no && (
                          <p>{formik.errors.emergency_phone_no}</p>
                        )}
                    </h4>
                  </div>
                  <input
                    type="tel"
                    name="emergency_phone_no"
                    placeholder="+91"
                    value={formik.values.emergency_phone_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="info__street">
                <div className="info__title">
                  <h4>
                    Street Address<p>*</p>
                    {formik.touched.street_address &&
                      formik.errors.street_address && (
                        <p>{formik.errors.street_address}</p>
                      )}
                  </h4>
                </div>

                <input
                  id="street_address"
                  type="text"
                  name="address.street_address"
                  value={formik.values.address.street_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="info__cityHead">
                <div className="info__city">
                  <div className="info__title">
                    <h4>
                      City<p>*</p>
                      {formik.touched.city && formik.errors.city && (
                        <p>{formik.errors.city}</p>
                      )}
                    </h4>
                  </div>
                  <input
                    type="text"
                    id="city"
                    name="address.city"
                    value={formik.values.address.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="info__state">
                  <div className="info__title">
                    <h4>
                      State<p>*</p>
                      {formik.touched.state && formik.errors.state && (
                        <p>{formik.errors.state}</p>
                      )}
                    </h4>
                  </div>
                  <input
                    id="state"
                    type="text"
                    name="address.state"
                    value={formik.values.address.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="info__zipCode">
                  <div className="info__title">
                    <h4>
                      Zip Code<p>*</p>
                      {formik.touched.zipcode && formik.errors.zipcode && (
                        <p>{formik.errors.zipcode}</p>
                      )}
                    </h4>
                  </div>
                  <input
                    type="tel"
                    name="address.zip_code"
                    value={formik.values.address.zip_code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="info__head">
                <div className="info__first">
                  <div className="info__title">
                    <h4>
                      Secondary Email(Optional)<p>*</p>
                      {formik.touched.secondary_email &&
                        formik.errors.secondary_email && (
                          <p>{formik.errors.secondary_email}</p>
                        )}
                    </h4>
                  </div>
                  <input
                    type="email"
                    name="secondary_email"
                    value={formik.values.secondary_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="info__second">
                  <div className="info__title">
                    <h4>
                      Date Of Birth<p>*</p>
                      {formik.touched.dob && formik.errors.dob && (
                        <p>{formik.errors.dob}</p>
                      )}
                    </h4>
                  </div>
                  <DatePicker name="dob" className="info__datepicker" />
                </div>
              </div>
              <div className="info__title">
                <h4>
                  1) Select your qualification type<p>*</p>
                  {formik.touched.qualification &&
                    formik.errors.qualification && (
                      <p>{formik.errors.qualification}</p>
                    )}
                </h4>
              </div>
              <div className="info__qualification">
                <div className="info__type1">
                  <input
                    type="checkbox"
                    name="qualification.rn"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>RN</h4>
                </div>
                <div className="info__type2">
                  <input
                    type="checkbox"
                    name="qualification.lpn"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>LPN</h4>
                </div>
                <div className="info__type3">
                  <input
                    type="checkbox"
                    name="qualification.crna"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>CRNA</h4>
                </div>
                <div className="info__type4">
                  <input
                    type="checkbox"
                    name="qualification.cnm"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>CNM</h4>
                </div>
                <div className="info__type5">
                  <input
                    type="checkbox"
                    name="qualification.cns"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>CNS</h4>
                </div>
                <div className="info__type6">
                  <input
                    type="checkbox"
                    name="qualification.cnastna"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>CNA/STNA</h4>
                </div>
              </div>
              <div className="info__title">
                <h4>
                  2) What type shifts are you lookin for?(choose as many as you
                  like)<p>*</p>
                  {formik.touched.work_shift_types &&
                    formik.errors.work_shift_types && (
                      <p>{formik.errors.work_shift_types}</p>
                    )}
                </h4>
              </div>
              <div className="info__shift">
                <div className="info__shift1">
                  <input
                    type="checkbox"
                    name="work_shift_types.morning"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>Morning</h4>
                </div>
                <div className="info__shift2">
                  <input
                    type="checkbox"
                    name="work_shift_types.weekend"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>Weekend</h4>
                </div>
                <div className="info__shift3">
                  <input
                    type="checkbox"
                    name="work_shift_types.night"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>Night</h4>
                </div>
              </div>
              <div className="info__shift">
                <div className="info__shift1">
                  <input
                    type="checkbox"
                    name="work_shift_types.evening"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>Evening</h4>
                </div>
                <div className="info__shift2">
                  <input
                    type="checkbox"
                    name="work_shift_types.weekday"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>Weekday</h4>
                </div>
                <div className="info__shift3">
                  <input
                    type="checkbox"
                    name="work_shift_types.rotating"
                    value="true"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h4>Rotating</h4>
                </div>
              </div>
              <div className="info__timeline">
                <div className="info__title">
                  <h4>
                    Willingness to Commute <p>*</p>{" "}
                  </h4>
                </div>
                <Slider
                  className={classes.root}
                  defaultValue={10}
                  step={10}
                  valueLabelDisplay="auto"
                  marks={marks}
                  value={formik.values.willingness_to_commute}
                  name="willingness_to_commute"
                  onChange={(e, v) => {
                    formik.setFieldValue("willingness_to_commute", v);
                  }}
                />
              </div>
              <div className="info__title">
                <h4>
                  3) I prefer to work in shifs of <p>*</p>
                  {formik.touched.work_in_shifts &&
                    formik.errors.work_in_shifts && (
                      <p>{formik.errors.work_in_shifts}</p>
                    )}
                </h4>
              </div>
              <div className="info__workInfo">
                <div className="info__work1">
                  <input
                    type="checkbox"
                    name="work_in_shifts.six"
                    value="true"
                    onChange={formik.handleChange}
                  />
                  <h4>6 Hrs</h4>
                </div>
                <div className="info__work2">
                  <input
                    type="checkbox"
                    name="work_in_shifts.eight"
                    value="true"
                    onChange={formik.handleChange}
                  />
                  <h4>8 Hrs</h4>
                </div>
                <div className="info__work3">
                  <input
                    type="checkbox"
                    name="work_in_shifts.ten"
                    value="true"
                    onChange={formik.handleChange}
                  />
                  <h4>10 Hrs</h4>
                </div>
                <div className="info__work4">
                  <input
                    type="checkbox"
                    name="work_in_shifts.twelve"
                    value="true"
                    onChange={formik.handleChange}
                  />
                  <h4>12 Hrs</h4>
                </div>
                <div className="info__work5">
                  <input
                    type="checkbox"
                    name="work_in_shifts.no_preference"
                    value="true"
                    onChange={formik.handleChange}
                  />
                  <h4>No Preference</h4>
                </div>
              </div>
              <div className="info__title">
                <h4>
                  4) How many years of licenced work experience do you have
                  <p>*</p>
                  {formik.touched.experience && formik.errors.experience && (
                    <p>{formik.errors.experience}</p>
                  )}
                </h4>
              </div>
              <div className="info__shift">
                <div className="info__shift1">
                  <input
                    type="radio"
                    name="experience"
                    value="lessthanayear"
                    onChange={formik.handleChange}
                  />
                  <h4>Less than a year</h4>
                </div>
                <div className="info__shift2">
                  <input
                    type="radio"
                    name="experience"
                    value="oneTwo"
                    onChange={formik.handleChange}
                  />
                  <h4>1-2 years</h4>
                </div>
                <div className="info__shift3">
                  <input
                    type="radio"
                    name="experience"
                    value="2"
                    onChange={formik.handleChange}
                  />
                  <h4>2+ years</h4>
                </div>
              </div>

              <div className="info__agreeInfo">
                <input
                  className="personalInfo__checkbox"
                  type="checkbox"
                  name="terms"
                  value={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="personal__label">
                  <label>
                    I agree to NURSD &nbsp;&nbsp;
                    <a
                      style={{ color: "#38B1FF" }}
                      href="https://www.nursdhealth.com/terms-and-policies//"
                    >
                      Terms & Conditions
                    </a>
                    &nbsp;&nbsp; and &nbsp;&nbsp;
                    <a
                      href="https://nursdhealth.com/privacy/"
                      style={{ color: "#38B1FF" }}
                    >
                      Privacy Policy
                    </a>
                  </label>
                  <p style={{ color: "red" }}>*</p>
                </div>
                {formik.errors.terms && (
                  <p style={{ color: "red" }}>{formik.errors.terms}</p>
                )}
              </div>
            </div>

            <div className="info__button">
              {!submit ? (
                <div className="info__button1">
                  <button type="submit">Save</button>
                </div>
              ) : (
                <div className="info__button2">
                  <button type="submit">Save</button>
                </div>
              )}
              {!submit ? (
                <Link to="/OtpVerification">
                  <div className="info__button2">
                    <button type="submit" disabled>
                      Next
                    </button>
                  </div>
                </Link>
              ) : (
                <Link to="/OtpVerification">
                  <div className="info__button2">
                    <button type="submit">Next</button>
                  </div>
                </Link>
              )}
            </div>
          </>
        </form>
      )}
    </Formik>
  );
};
const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { BasicInfo })(Info);
