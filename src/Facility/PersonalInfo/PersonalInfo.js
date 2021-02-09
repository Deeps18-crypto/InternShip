import React, { useState } from "react";
import Header from "../../Jobs/JobsHeader/JobsHeader";
import ScheduleHead from "../../ScheduleInterview/ScheduleHead/ScheduleHead";
import ScheduleProgress from "../../ScheduleInterview/ScheduleProgress/ScheduleProgress";
import { Formik, useFormik } from "formik";
import { useHistory, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./PersonalInfo.css";

import * as Yup from "yup";
import UpdateAccountInformation from "../../AccountInformation/UpdateAccountInformtion/UpdateAccountInformation";

function PersonalInfo() {
  const history = useHistory();
  const [Open, setOpen] = useState(false);

  return (
    <div>
      <Header />
      <ScheduleProgress />
      <ScheduleHead personalInfo />
      <div className="facilityInfo__head">
        <Link to="/Facility/Info">
          <ArrowBackIcon className="basicInfo__arrowIcon" />
        </Link>
        <h2>
          Hi there!,
          <br />
          Enter your basic details
        </h2>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNo: "",
          email: "",
          createPassword: "",
          confirmPassword: "",
          jobTitle: "",
          otherQuestion: "",
          terms: false,
          clientTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          phoneNo: Yup.string().required(""),
          email: Yup.string().email("Invalid email address").required(""),
          createPassword: Yup.string()
            .min(8, "Must be greater than 8")
            .required(""),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("createPassword")], "Passwords must match")
            .required(""),
          jobTitle: Yup.string()
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          otherQuestion: Yup.string()
            .max(15, "Must be 15 characters or less")
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          terms: Yup.bool().oneOf([true], ""),
          clientTerms: Yup.bool().oneOf([true], ""),
        })}
        onSubmit={() => {
          history.push("/Facility/Congratulation");
        }}
      >
        {(formik) => (
          <form className="infoDetails" onSubmit={formik.handleSubmit}>
            <div className="infoDetails__select">
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>First Name</h4>
                  <p>*</p>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p>{formik.errors.firstName}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  name="firstName"
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Last Name</h4>
                  <p>*</p>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p>{formik.errors.lastName}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  name="lastName"
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="infoDetails__select">
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Phone No.</h4>
                  <p>*</p>
                  {formik.touched.phoneNo && formik.errors.phoneNo && (
                    <p>{formik.errors.phoneNo}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.phoneNo}
                  name="phoneNo"
                  onBlur={formik.handleBlur}
                  type="number"
                />
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Email</h4>
                  <p>*</p>
                  {formik.touched.email && formik.errors.email && (
                    <p>{formik.errors.email}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="infoDetails__select">
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Create Password</h4>
                  <p>*</p>
                  {formik.touched.createPassword &&
                    formik.errors.createPassword && (
                      <p>{formik.errors.createPassword}</p>
                    )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.createPassword}
                  name="createPassword"
                  onBlur={formik.handleBlur}
                  type="password"
                />
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Confirm Password</h4>
                  <p>*</p>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p>{formik.errors.confirmPassword}</p>
                    )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  name="confirmPassword"
                  onBlur={formik.handleBlur}
                  type="password"
                />
              </div>
            </div>
            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>Job Title </h4>
                <p>*</p>
                {formik.touched.jobTitle && formik.errors.jobTitle && (
                  <p>{formik.errors.jobTitle}</p>
                )}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.jobTitle}
                name="jobTitle"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>Other questions or comments: </h4>
                <p>*</p>
                {formik.touched.otherQuestion &&
                  formik.errors.otherQuestion && (
                    <p>{formik.errors.otherQuestion}</p>
                  )}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.otherQuestion}
                name="otherQuestion"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="personalInfo__input">
              <input
                type="checkbox"
                name="clientTerms"
                value={formik.values.clientTerms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="personal__label">
                <label className="personal__label">
                  I agree to NURSD &nbsp;&nbsp;
                  <p style={{ color: "#38B1FF" }} onClick={() => setOpen(true)}>
                    Client Terms
                  </p>
                  <UpdateAccountInformation
                    Open={Open}
                    onClick={() => setOpen(false)}
                  />
                </label>
                <p style={{ color: "red" }}>*</p>
              </div>
              {formik.errors.clientTerms && <p>{formik.errors.clientTerms}</p>}
            </div>
            <div className="personalInfo__input">
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
                  <a style={{ color: "#38B1FF" }} href="">
                    Terms & Conditions
                  </a>
                  &nbsp;&nbsp; and &nbsp;&nbsp;
                  <a href="" style={{ color: "#38B1FF" }}>
                    Privacy Policy
                  </a>
                </label>
                <p style={{ color: "red" }}>*</p>
              </div>
              {formik.errors.terms && <p>{formik.errors.terms}</p>}
            </div>
            <button className="infoDetails__button" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default PersonalInfo;
