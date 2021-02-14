import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { Link } from "react-router-dom";
import ContactProg from "../../ConfirmPhoneNum/ContactProgress/ContactProg";
import ContactInfo from "../../ConfirmPhoneNum/ContactInfo-Header/ContactInfo";
import { Formik, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Profile from "../../ScheduleHistory/Profile";
import Header from "../../Header/Header";

function AdditionalInfo() {
  const history = useHistory();

  return (
    <div>
      <Header />
      <ContactProg />
      <ContactInfo progress />
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
          bedCount: "",
          clinicalStaf: "",
          healthSystem: "",
          university: "",
          ratio: "one",
          hospital: "yes",
          clinicalResource: "",
          upload: "",
        }}
        validationSchema={Yup.object({
          bedCount: Yup.string()
            .matches(/^[0-9\b]+$/, "Must be a number")
            .required("required"),
          clinicalStaf: Yup.string()
            .matches(/^[0-9\b]+$/, "Must be a number")
            .required("required"),
          healthSystem: Yup.string()
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required("required"),
          university: Yup.string()
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required("required"),
          ratio: Yup.string().required("required"),
          hospital: Yup.string().required("required"),
          clinicalResource: Yup.string()
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required("required"),
        })}
        onSubmit={() => {
          history.push("/Facility/PersonalInfo");
        }}
      >
        {(formik) => (
          <form className="infoDetails" onSubmit={formik.handleSubmit}>
            <div className="infoDetails__select">
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Bed Count</h4>
                  <p>*</p>
                  {formik.touched.bedCount && formik.errors.bedCount && (
                    <p>{formik.errors.bedCount}</p>
                  )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.bedCount}
                  name="bedCount"
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Number of Clinical Staff</h4>
                  <p>*</p>
                  {formik.touched.clinicalStaf &&
                    formik.errors.clinicalStaf && (
                      <p>{formik.errors.clinicalStaf}</p>
                    )}
                </div>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.clinicalStaf}
                  name="clinicalStaf"
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>Health System </h4>
                <p>*</p>
                {formik.touched.healthSystem && formik.errors.healthSystem && (
                  <p>{formik.errors.healthSystem}</p>
                )}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.healthSystem}
                name="healthSystem"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>Facility Affiliated University </h4>
                <p>*</p>
                {formik.touched.university && formik.errors.university && (
                  <p>{formik.errors.university}</p>
                )}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.university}
                name="university"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="infoDetails__select">
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__error">
                  <h4>Nurse to Patient Ratio</h4>
                  <p>*</p>
                </div>
                <select type="text" onChange={formik.handleChange} name="ratio">
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                </select>
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__selectRow1">
                  <div className="infoDetails__error">
                    <h4>Is Facility a Magnet Hospital?</h4>
                    <p>*</p>
                  </div>
                  <select
                    type="text"
                    onChange={formik.handleChange}
                    name="hospital"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="infoDetails__input">
              <div className="infoDetails__error">
                <h4>
                  Clinical Resource (e.g: 5 MRI Machines, 12 Operation Rooms,
                  etc.)
                </h4>
                <p>*</p>
                {formik.touched.clinicalResource &&
                  formik.errors.clinicalResource && (
                    <p>{formik.errors.clinicalResource}</p>
                  )}
              </div>
              <input
                onChange={formik.handleChange}
                name="clinicalResource"
                value={formik.values.clinicalResource}
                onBlur={formik.handleBlur}
              />
              <div style={{ marginTop: "15px" }}>
                <div className="infoDetails__error">
                  <h4>Upload Photos of your Facility:</h4>
                  <p>*</p>
                </div>
                <Profile facility />
              </div>
            </div>
            <button className="infoDetails__button" type="submit">
              Next
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AdditionalInfo;
