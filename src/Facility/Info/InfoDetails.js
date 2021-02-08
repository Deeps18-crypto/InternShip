import React from "react";
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
        settingType: "",
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
        settingType: Yup.string()
          .max(20, "Must be 20 characters or less")
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),

        ifOther: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        phoneNumber: Yup.string().required(""),
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
          .required("")
          .max(5, "Must be 5 number ")
          .min(5, "Must be 5 number "),
        website: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
      })}
      onSubmit={() => {
        history.push("/Facility/AdditionalInfo");
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
                  name="settingType"
                  onChange={formik.handleChange}
                >
                  <option value="nursd">nursd</option>
                  <option value="nursd">nursd</option>
                  <option value="nursd">nursd</option>
                </select>
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>If Other, please specify</h4>
                  <p>*</p>
                  {formik.touched.ifOther && formik.errors.ifOther && (
                    <p>{formik.errors.ifOther}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.ifOther}
                  name="ifOther"
                  onBlur={formik.handleBlur}
                />
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
                  type="number"
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
                  type="number"
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
