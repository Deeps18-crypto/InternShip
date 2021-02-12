import React, { useState } from "react";
import "./InfoDetails.css";
import { Formik, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

function InfoDetails({ AddionalInfo }) {
  const history = useHistory();

  // auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((auth) => {
  //     console.log(auth);
  //     history.push("/BasicInfo");
  //     setloading(false);
  //   })
  //   .catch((e) => alert(e.message));

  return (
    <Formik
      initialValues={{
        facilityName: "",
        settingType: "Assisted nursing Home",
        ifOther: "",
        phoneNumber: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        zipcode: "",
        website: "",
      }}
      validationSchema={Yup.object({
        facilityName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        settingType: Yup.string().required(""),
        ifOther: Yup.string().matches(/[a-z]/gi, "Must be a alphabet"),
        phoneNumber: Yup.string()
          .matches(/^[0-9\b]+$/, "Must be a number")
          .required(""),
        email: Yup.string().email("Invalid email address").required(""),
        streetAddress: Yup.string()
          .max(15, "Must be 15 characters or less")
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        city: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        state: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        zipcode: Yup.string()
          .max(5, "Must be 5 number ")
          .min(5, "Must be 5 number ")
          .matches(/^[0-9\b]+$/, "Must be a number")
          .required(""),
        website: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
      })}
      onSubmit={(Values) => {
        history.push("/Facility/AdditionalInfo");
        console.log(Values);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="infoDetails">
            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>Facility Name</h4>
                <p>*</p>
                {formik.touched.facilityName && formik.errors.facilityName && (
                  <p>{formik.errors.facilityName}</p>
                )}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.facilityName}
                name="facilityName"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="infoDetails__select">
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Setting Type</h4>
                  <p>*</p>
                </div>
                <select
                  type="text"
                  onChange={formik.handleChange}
                  name="settingType"
                  value={formik.values.settingType}
                >
                  <option value="Assisted nursing Home">
                    Assisted nursing Home
                  </option>
                  <option value="Senior Living">Senior Living</option>
                  <option value="Hospital">Hospital </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>If Other, please specify</h4>
                  {formik.values.settingType === "Other" ? <p>*</p> : null}
                </div>
                {formik.values.settingType === "Other" ? (
                  <div className="infoDetails__selectRow1">
                    <input
                      onChange={formik.handleChange}
                      name="ifOther"
                      onBlur={formik.handleBlur}
                      required
                    />
                  </div>
                ) : (
                  <div className="infoDetails__selectRow1">
                    <input
                      onChange={formik.handleChange}
                      name="ifOther"
                      onBlur={formik.handleBlur}
                      disabled
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="infoDetails__select">
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Facility Phone Number</h4>
                  <p>*</p>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <p>{formik.errors.phoneNumber}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                  onBlur={formik.handleBlur}
                  type="tel"
                  placeholder="XXX-XX-XXXX"
                />
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Facility Email</h4>
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
            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>Street Address</h4>
                <p>*</p>
                {formik.touched.streetAddress &&
                  formik.errors.streetAddress && (
                    <p>{formik.errors.streetAddress}</p>
                  )}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
                name="streetAddress"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="infoDetails__select">
              <div className="infoDetails__selectState">
                <div className="infoDetails__error">
                  <h4>City</h4>
                  <p>*</p>
                  {formik.touched.city && formik.errors.city && (
                    <p>{formik.errors.city}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  name="city"
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="infoDetails__selectState">
                <div className="infoDetails__error">
                  <h4>State</h4>
                  <p>*</p>
                  {formik.touched.state && formik.errors.state && (
                    <p>{formik.errors.state}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.state}
                  name="state"
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="infoDetails__selectState">
                <div className="infoDetails__error">
                  <h4>ZIP Code</h4>
                  <p>*</p>
                  {formik.touched.zipcode && formik.errors.zipcode && (
                    <p>{formik.errors.zipcode}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.zipcode}
                  name="zipcode"
                  onBlur={formik.handleBlur}
                  type="tel"
                />
              </div>
            </div>
            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>Website</h4>
                <p>*</p>
                {formik.touched.website && formik.errors.website && (
                  <p>{formik.errors.website}</p>
                )}
              </div>

              <input
                onChange={formik.handleChange}
                value={formik.values.website}
                name="website"
                onBlur={formik.handleBlur}
              />
            </div>
            <button className="infoDetails__button" type="submit">
              Next
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default InfoDetails;
