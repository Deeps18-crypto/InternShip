import React from "react";
import Progressbar from "../../BasicInfo/Progressbar/Progressbar";
import Header from "../../Jobs/JobsHeader/JobsHeader";
import FacilityInfo from "../Info/FacilityInfo";
import InfoDetails from "../Info/InfoDetails";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import InfoHeader from "../../BasicInfo/Basicinfo-Header/InfoHeader";
import ContactProg from "../../ConfirmPhoneNum/ContactProgress/ContactProg";
import ContactInfo from "../../ConfirmPhoneNum/ContactInfo-Header/ContactInfo";
import { Formik, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

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
          ratio: "",
          hospital: "",
          clinicalResource: "",
          upload: "",
        }}
        validationSchema={Yup.object({
          bedCount: Yup.string()
            .max(15, "Must be 15 characters or less")
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          clinicalStaf: Yup.string()
            .max(20, "Must be 20 characters or less")
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          healthSystem: Yup.string()
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          university: Yup.string()
            .matches(/[a-z]/gi, "Must be a alphabet")
            .required(""),
          ratio: Yup.string().required(""),
          hospital: Yup.string().required(""),
          clinicalResource: Yup.string().matches(
            /[a-z]/gi,
            "Must be a alphabet"
          ),
          // upload: Yup.string().matches(/[a-z]/gi, "Must be a alphabet"),
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
                  <option value="nursd">nursd</option>
                  <option value="nursd">nursd</option>
                  <option value="nursd">nursd</option>
                </select>
              </div>
              <div className="infoDetails__selectRow1">
                <div className="infoDetails__selectRow1">
                  <div className="infoDetails__error">
                    <h4>Is Facility a Magnet Hospital</h4>
                    <p>*</p>
                  </div>
                  <select
                    type="text"
                    onChange={formik.handleChange}
                    name="hospital"
                  >
                    <option value="nursd">nursd</option>
                    <option value="nursd">nursd</option>
                    <option value="nursd">nursd</option>
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
