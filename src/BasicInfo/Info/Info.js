import React, { useState } from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import { useFormik, Formik } from "formik";
import DatePicker from "./Datepicker";
import * as Yup from "yup";
import axios from "axios";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Useforms from "../../SignUp/Useforms";

const Info = () => {
  const formik = useFormik({});
  const [submit, setsubmit] = useState(false);
  const [data, setdata] = useState([]);
  const { dataId } = useParams();
  const [{ user }, dispatch] = useStateValue();

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
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        lastname: Yup.string()
          .max(20, "Must be 20 characters or less")
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        secondary_email: Yup.string()
          .email("Invalid email address")
          .required(""),
        phone_number: Yup.string().required(""),
        emergency_number: Yup.string().required(""),
        dob: Yup.date("Must be valid dob").required("").nullable(),
        street_address: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        state: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        zipcode: Yup.string()
          .required("")
          .max(5, "Must be 5 characters ")
          .min(5, "Must be 5 characters "),
        city: Yup.string()
          .matches(/[a-z]/gi, "Must be a alphabet")
          .required(""),
        qualification: Yup.array().required(""),
        work_in_shifts: Yup.array().required(""),
        work_shift_types: Yup.array().required(""),
        experience: Yup.array().required(""),
        terms: Yup.bool().oneOf([true], ""),
      })}
      onSubmit={(inputData) => {
        setsubmit(true);

        db.collection("users")
          .doc(user?.uid)
          .collection("info")
          .doc(inputData.id)
          .set(inputData);
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
                    First Name<p>*</p>
                    {formik.errors.firstname && (
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
                    Last Name<p>*</p>
                    {formik.errors.lastname && <p>{formik.errors.lastname}</p>}
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
                    Phone Number(You'll recieve an OTP for verification)<p>*</p>
                    {formik.errors.phone_number && (
                      <p>{formik.errors.phone_number}</p>
                    )}
                  </h4>
                </div>
                <input
                  type="number"
                  name="phone_number"
                  pattern="[0-9]{10}"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="info__second">
                <div className="info__title">
                  <h4>
                    Emergency Phone Number<p>*</p>
                    {formik.errors.emergency_number && (
                      <p>{formik.errors.emergency_number}</p>
                    )}
                  </h4>
                </div>
                <input
                  type="number"
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
                  Street Address<p>*</p>
                  {formik.errors.street_address && (
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
                    City<p>*</p>
                    {formik.errors.city && <p>{formik.errors.city}</p>}
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
                    State<p>*</p>
                    {formik.errors.state && <p>{formik.errors.state}</p>}
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
                    Zip Code<p>*</p>
                    {formik.errors.zipcode && <p>{formik.errors.zipcode}</p>}
                  </h4>
                </div>
                <input
                  type="number"
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
                    Secondary Email(Optional)<p>*</p>
                    {formik.errors.secondary_email && (
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
                    {formik.errors.dob && <p>{formik.errors.dob}</p>}
                  </h4>
                </div>
                <DatePicker name="dob" className="info__datepicker" />
              </div>
            </div>
            <div className="info__title">
              <h4>
                1) Select your qualification type<p>*</p>
                {formik.errors.qualification && (
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
                like)<p>*</p>
                {formik.errors.work_shift_types && (
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
                <h4>
                  Willingness to Commute <p>*</p>{" "}
                </h4>
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
                3) I prefer to work in shifs of <p>*</p>
                {formik.errors.work_in_shifts && (
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
                <p>*</p>
                {formik.errors.experience && <p>{formik.errors.experience}</p>}
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
                  <a style={{ color: "#38B1FF" }} href="">
                    Terms & Conditions
                  </a>
                  &nbsp;&nbsp; and &nbsp;&nbsp;
                  <a href="" style={{ color: "#38B1FF" }}>
                    Privacy Policy
                  </a>
                  <p>*</p>
                  &nbsp;&nbsp;
                  {formik.errors.terms && <p>{formik.errors.terms}</p>}
                </label>
              </div>
            </div>
            <div className="info__button">
              <div className="info__button1">
                <button type="submit">Save</button>
              </div>
              {submit && (
                <Link to="/OtpVerification">
                  <div className="info__button2">
                    <button type="submit">Next</button>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Info;
