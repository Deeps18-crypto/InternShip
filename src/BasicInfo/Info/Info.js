import React, { useState } from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import { useFormik, useFormikContext, Formik, Form } from "formik";
import axios from "axios";
import DatePicker from "./Datepicker";
import * as Yup from "yup";

const Info = () => {
  const formik = useFormik({});

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        phone_number: "",
        emergency_number: "",
        secondary_email: "",
        dob: null,

        street_address: "",
        state: "",
        zipcode: "",
        city: "",

        qualification: "",
        work_shift_types: "",
        work_in_shifts: "",
        willingness_to_commute: 5,
        experience: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("*"),
        lastname: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("*"),
        secondary_email: Yup.string()
          .email("Invalid email address")
          .required("*"),
        phone_number: Yup.string().required("*"),
        emergency_number: Yup.string().required("*"),
        dob: Yup.date("Must be valid dob").required("*").nullable(),
        street_address: Yup.string().required("*"),
        state: Yup.string().required("*"),
        zipcode: Yup.string()
          .required("*")
          .max(5, "Must be 5 characters ")
          .min(5, "Must be 5 characters "),
        city: Yup.string().required("*"),
        qualification: Yup.array().required("*"),
        work_in_shifts: Yup.array().required("*"),
        work_shift_types: Yup.array().required("*"),
        experience: Yup.array().required("*"),
        terms: Yup.bool().oneOf([true], "Agree to save the informations"),
      })}
      onSubmit={(inputData, { setSubmitting }) => {
        axios
          .post(
            "https://nursd-42b0a-default-rtdb.firebaseio.com/Info.json",
            inputData
          )
          .then((response) => {
            console.log(response);
            setSubmitting(false);
          })
          .catch((error) => {
            alert("Network error!!");
            console.log(error);
          });
        console.log(inputData);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="info">
            <div className="info__head">
              <div className="info__first">
                <div className="info__title">
                  <h4>
                    First Name
                    {formik.touched.firstname && formik.errors.firstname && (
                      <p>{formik.errors.firstname}</p>
                    )}
                  </h4>
                </div>
                <input
                  type="text"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="info__second">
                <div className="info__title">
                  <h4>
                    Last Name
                    {formik.touched.lastname && formik.errors.lastname && (
                      <p>{formik.errors.lastname}</p>
                    )}
                  </h4>
                </div>
                <input
                  type="text"
                  name="lastname"
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
                    Phone Number (You'll recieve an OTP for verification)
                    {formik.touched.phone_number &&
                      formik.errors.phone_number && (
                        <p>{formik.errors.phone_number}</p>
                      )}
                  </h4>
                </div>
                <input
                  type="text"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="info__second">
                <div className="info__title">
                  <h4>
                    Emergency Phone Number
                    {formik.touched.emergency_number &&
                      formik.errors.emergency_number && (
                        <p>{formik.errors.emergency_number}</p>
                      )}
                  </h4>
                </div>
                <input
                  type="text"
                  name="emergency_number"
                  value={formik.values.emergency_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="info__street">
              <div className="info__title">
                <h4>
                  Street Address
                  {formik.touched.street_address &&
                    formik.errors.street_address && (
                      <p>{formik.errors.street_address}</p>
                    )}
                </h4>
              </div>

              <input
                id="street_address"
                type="text"
                name="street_address"
                value={formik.values.street_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="info__cityHead">
              <div className="info__city">
                <div className="info__title">
                  <h4>
                    City
                    {formik.touched.city && formik.errors.city && (
                      <p>{formik.errors.city}</p>
                    )}
                  </h4>
                </div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="info__state">
                <div className="info__title">
                  <h4>
                    State
                    {formik.touched.state && formik.errors.state && (
                      <p>{formik.errors.state}</p>
                    )}
                  </h4>
                </div>
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="info__zipCode">
                <div className="info__title">
                  <h4>
                    Zip Code
                    {formik.touched.zipcode && formik.errors.zipcode && (
                      <p>{formik.errors.zipcode}</p>
                    )}
                  </h4>
                </div>
                <input
                  type="text"
                  name="zipcode"
                  value={formik.values.zipcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="info__head">
              <div className="info__first">
                <div className="info__title">
                  <h4>
                    Secondary Email (Optional)
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
                    Date Of Birth
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
                1) Select your qualification type
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
                  name="qualification"
                  value="RN"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>RN</h4>
              </div>
              <div className="info__type2">
                <input
                  type="checkbox"
                  name="qualification"
                  value="LPN"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>LPN</h4>
              </div>
              <div className="info__type3">
                <input
                  type="checkbox"
                  name="qualification"
                  value="CRNA"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>CRNA</h4>
              </div>
              <div className="info__type4">
                <input
                  type="checkbox"
                  name="qualification"
                  value="CNM"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>CNM</h4>
              </div>
              <div className="info__type5">
                <input
                  type="checkbox"
                  name="qualification"
                  value="CNS"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>CNS</h4>
              </div>
              <div className="info__type6">
                <input
                  type="checkbox"
                  name="qualification"
                  value="CNASTNA"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>CNA/STNA</h4>
              </div>
            </div>
            <div className="info__title">
              <h4>
                2) What type shifts are you lookin for?(choose as many as you
                like)
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
                  name="work_shift_types"
                  value="morning"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>Morning</h4>
              </div>
              <div className="info__shift2">
                <input
                  type="checkbox"
                  name="work_shift_types"
                  value="afternoon"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>Afternoon</h4>
              </div>
              <div className="info__shift3">
                <input
                  type="checkbox"
                  name="work_shift_types"
                  value="night"
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
                  name="work_shift_types"
                  value="weekend"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>Weekend</h4>
              </div>
              <div className="info__shift2">
                <input
                  type="checkbox"
                  name="work_shift_types"
                  value="weekday"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>Weekday</h4>
              </div>
              <div className="info__shift3">
                <input
                  type="checkbox"
                  name="work_shift_types"
                  value="rotating"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h4>Rotating</h4>
              </div>
            </div>
            <div className="info__timeline">
              <div className="info__title">
                <h4>Willingness to Commute </h4>
              </div>
              <label className="info__timeline__label1">5</label>
              <label className="info__timeline__label2">10</label>
              <label className="info__timeline__label3">15</label>
              <label className="info__timeline__label4">20</label>
              <label className="info__timeline__label5">25</label>
              <label className="info__timeline__label6">30</label>
              <label className="info__timeline__label7">35</label>
              <label className="info__timeline__label8">40</label>
              <label className="info__timeline__label9">45</label>
              <input
                type="range"
                min="0"
                max="50"
                name="willingness_to_commute"
                onChange={formik.handleChange}
                value={formik.values.willingness_to_commute}
                step={5}
              />
            </div>
            <div className="info__title">
              <h4>
                3) I prefer to work in shifs of
                {formik.touched.work_in_shifts &&
                  formik.errors.work_in_shifts && (
                    <p>{formik.errors.work_in_shifts}</p>
                  )}
              </h4>
            </div>
            <div className="info__qualification">
              <div className="info__work1">
                <input
                  type="checkbox"
                  name="work_in_shifts"
                  value="6 Hrs"
                  onChange={formik.handleChange}
                />
                <h4>6 Hrs</h4>
              </div>
              <div className="info__work2">
                <input
                  type="checkbox"
                  name="work_in_shifts"
                  value="8 Hrs"
                  onChange={formik.handleChange}
                />
                <h4>8 Hrs</h4>
              </div>
              <div className="info__work3">
                <input
                  type="checkbox"
                  name="work_in_shifts"
                  value="10 Hrs"
                  onChange={formik.handleChange}
                />
                <h4>10 Hrs</h4>
              </div>
              <div className="info__work4">
                <input
                  type="checkbox"
                  name="work_in_shifts"
                  value="12 Hrs"
                  onChange={formik.handleChange}
                />
                <h4>12 Hrs</h4>
              </div>
              <div className="info__work5">
                <input
                  type="checkbox"
                  name="work_in_shifts"
                  value="No preference"
                  onChange={formik.handleChange}
                />
                <h4>No Preference</h4>
              </div>
            </div>
            <div className="info__title">
              <h4>
                4) How many years of licenced work experience do you have
                {formik.touched.experience && formik.errors.experience && (
                  <p>{formik.errors.experience}</p>
                )}
              </h4>
            </div>
            <div className="info__shift">
              <div className="info__shift1">
                <input
                  type="checkbox"
                  name="experience"
                  value="lessthanayear"
                  onChange={formik.handleChange}
                />
                <h4>Less than a year</h4>
              </div>
              <div className="info__shift2">
                <input
                  type="checkbox"
                  name="experience"
                  value="onetwo"
                  onChange={formik.handleChange}
                />
                <h4>1-2 years</h4>
              </div>
              <div className="info__shift3">
                <input
                  type="checkbox"
                  name="experience"
                  value="two"
                  onChange={formik.handleChange}
                />
                <h4>+2 years</h4>
              </div>
            </div>
            <div className="info__agree">
              <input
                className="info__agree1"
                type="checkbox"
                name="terms"
                value={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="info__title">
                <label>
                  I agree to NURSD &nbsp;&nbsp;
                  <a href="">Terms & Conditions </a>
                  &nbsp;&nbsp; and &nbsp;&nbsp;<a href=""> Privacy Policy </a>
                  &nbsp;&nbsp;
                  {formik.touched.terms && formik.errors.terms && (
                    <p>{formik.errors.terms}</p>
                  )}
                </label>
              </div>
            </div>
            <div className="info__button">
              <div className="info__button1">
                <button type="submit">Save</button>
              </div>
              <Link to="/OtpVerification">
                <div className="info__button2">
                  <button>Next</button>
                </div>
              </Link>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Info;
// import React from "react";
// import { useFormik } from "formik";
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };
// function Info() {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//     <label htmlFor="firstName">First Name</label>
//     <input
//       id="firstName"
//       name="firstName"
//       type="text"
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value={formik.values.firstName}
//     />
//     {formik.touched.firstName && formik.errors.firstName ? (
//       <div>{formik.errors.firstName}</div>
//     ) : null}
//     <label htmlFor="lastName">Last Name</label>
//     <input
//       id="lastName"
//       name="lastName"
//       type="text"
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value={formik.values.lastName}
//     />
//     {formik.touched.lastName && formik.errors.lastName ? (
//       <div>{formik.errors.lastName}</div>
//     ) : null}
//     <label htmlFor="email">Email Address</label>
//     <input
//       id="email"
//       name="email"
//       type="email"
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value={formik.values.email}
//     />
//     {formik.touched.email && formik.errors.email ? (
//       <div>{formik.errors.email}</div>
//     ) : null}
//     <button type="submit">Submit</button>
//   </form>
// );
// }

// export default Info;
