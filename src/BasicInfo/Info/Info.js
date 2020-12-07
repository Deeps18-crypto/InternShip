import React, { useState } from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  margin: {
    height: theme.spacing(),
  },
}));

const validate = (values) => {
  let errors = {};
  if (!values.firstname.trim()) {
    errors.firstname = "Firstname is required";
  }
  if (!values.lastname.trim()) {
    errors.lastname = "Lastname is required";
  }
  if (!values.phnnum.trim()) {
    errors.phnnum = "Phonenumber is required";
  }
  if (!values.emgnum.trim()) {
    errors.emgnum = "Emergency number is required";
  }
  if (!values.address.street_address.trim()) {
    errors.street_address = "Address is required";
  }
  if (!values.address.city.trim()) {
    errors.city = "city is required";
  }
  if (!values.address.state.trim()) {
    errors.state = "state required";
  }
  if (!values.address.zipcode.trim()) {
    errors.zipcode = "zipcode required";
  } else if (values.address.zipcode.length < 5) {
    errors.zipcode = "zipcode is to short";
  } else if (values.address.zipcode.length > 5) {
    errors.zipcode = "zipcode is undefined";
  }
  if (!values.secondary_email.trim()) {
    errors.secondary_email = "email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.secondary_email)
  ) {
    errors.secondary_email = "Email address is invalid";
  } else if (!values.secondary_email.includes("@gmail.com")) {
    errors.secondary_email = "invalid mail";
  }
  if (!values.dob.trim()) {
    errors.dob = "DOB is required";
  } else if (!values.dob.includes("/")) {
    errors.dob = "/ is required";
  } else if (values.dob.length > 10) {
    errors.dob = "invalid DOB";
  } else if (values.dob.length < 10) {
    errors.dob = "invalid DOB";
  }

  return errors;
};

const Info = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phnnum: "",
      emgnum: "",
      secondary_email: "",
      dob: "",
      address: {
        street_address: "",
        city: "",
        state: "",
        zipcode: "",
      },

      qualification: {
        RN: false,
        LPN: false,
        CRNA: false,
        CNM: false,
        CNS: false,
        CNASTNA: false,
      },
      work_shift_types: {
        morning: false,
        afternoon: false,
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
        nopreference: false,
      },
      willingness_to_commute: 40,
      experience: [],
      // lessthanayear: false,
      // onetwo: false,
      // two: false,
    },
    validate,
    onSubmit: (inputData) => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", inputData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          alert("Network error!!");
          console.log(error);
        });
      console.log(inputData);
    },
  });
  const marks = [
    {
      value: 5,
      label: "5 miles",
    },
    {
      value: 15,
      label: "15 miles",
    },

    {
      value: 30,
      label: "30 miles",
    },

    {
      value: 45,
      label: "45 miles",
    },

    {
      value: 60,
      label: "60 miles",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const classes = useStyles();

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="info">
        <div className="info__head">
          <div className="info__first">
            <h4>First Name</h4>

            <input
              type="text"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
            {formik.errors.firstname && <p>{formik.errors.firstname}</p>}
          </div>
          <div className="info__second">
            <h4>Last Name</h4>
            <input
              type="text"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
            {formik.errors.lastname && <p>{formik.errors.lastname}</p>}
          </div>
        </div>
        <div className="info__head">
          <div className="info__first">
            <h4>Phone Number (You'll recieve an OTP for verification)</h4>
            <input
              type="text"
              name="phnnum"
              value={formik.values.phnnum}
              onChange={formik.handleChange}
            />
            {formik.errors.phnnum && <p>{formik.errors.phnnum}</p>}
          </div>
          <div className="info__second">
            <h4>Emergency Phone Number</h4>
            <input
              type="text"
              name="emgnum"
              value={formik.values.emgnum}
              onChange={formik.handleChange}
            />
            {formik.errors.emgnum && <p>{formik.errors.emgnum}</p>}
          </div>
        </div>
        <div className="info__street">
          <h4>Street Address</h4>
          <input
            type="text"
            name="address.street_address"
            value={formik.values.address.street_address}
            onChange={formik.handleChange}
          />
          {formik.errors.street_address && (
            <p>{formik.errors.street_address}</p>
          )}
        </div>
        <div className="info__cityHead">
          <div className="info__city">
            <h4>City</h4>
            <input
              type="text"
              name="address.city"
              value={formik.values.address.city}
              onChange={formik.handleChange}
            />
            {formik.errors.city && <p>{formik.errors.city}</p>}
          </div>
          <div className="info__state">
            <h4>State</h4>
            <input
              type="text"
              name="address.state"
              value={formik.values.address.state}
              onChange={formik.handleChange}
            />
            {formik.errors.state && <p>{formik.errors.state}</p>}
          </div>
          <div className="info__zipCode">
            <h4>Zip Code</h4>
            <input
              type="text"
              name="address.zipcode"
              value={formik.values.address.zipcode}
              onChange={formik.handleChange}
            />
            {formik.errors.zipcode && <p>{formik.errors.zipcode}</p>}
          </div>
        </div>
        <div className="info__head">
          <div className="info__first">
            <h4>Secondary Email (Optional)</h4>
            <input
              type="email"
              name="secondary_email"
              value={formik.values.secondary_email}
              onChange={formik.handleChange}
            />
            {formik.errors.secondary_email && (
              <p>{formik.errors.secondary_email}</p>
            )}
          </div>
          <div className="info__second">
            <h4>Date Of Birth</h4>
            <input
              type="text"
              name="dob"
              placeholder="MM/DD/YYYY"
              value={formik.values.dob}
              onChange={formik.handleChange}
            />
            {formik.errors.dob && <p>{formik.errors.dob}</p>}
          </div>
        </div>
        <h4>1) Select your qualification type</h4>
        <div className="info__qualification">
          <div className="info__type1">
            <input
              type="checkbox"
              name="qualification.RN"
              value={formik.values.qualification.RN}
              onChange={formik.handleChange}
            />
            <h4>RN</h4>
          </div>
          <div className="info__type2">
            <input
              type="checkbox"
              name="qualification.LPN"
              value={formik.values.qualification.LPN}
              onChange={formik.handleChange}
            />
            <h4>LPN</h4>
          </div>
          <div className="info__type3">
            <input
              type="checkbox"
              name="qualification.CRNA"
              value={formik.values.qualification.CRNA}
              onChange={formik.handleChange}
            />
            <h4>CRNA</h4>
          </div>
          <div className="info__type4">
            <input
              type="checkbox"
              name="qualification.CNM"
              value={formik.values.qualification.CNM}
              onChange={formik.handleChange}
            />
            <h4>CNM</h4>
          </div>
          <div className="info__type5">
            <input
              type="checkbox"
              name="qualification.CNS"
              value={formik.values.qualification.CNS}
              onChange={formik.handleChange}
            />
            <h4>CNS</h4>
          </div>
          <div className="info__type6">
            <input
              type="checkbox"
              name="qualification.CNASTNA"
              value={formik.values.qualification.CNASTNA}
              onChange={formik.handleChange}
            />
            <h4>CNA/STNA</h4>
          </div>
        </div>
        <h4>
          2) What type shifts are you lookin for?(choose as many as you like)
        </h4>
        <div className="info__shift">
          <div className="info__shift1">
            <input
              type="checkbox"
              name="work_shift_types.morning"
              value={formik.values.work_shift_types.morning}
              onChange={formik.handleChange}
            />
            <h4>Morning</h4>
          </div>
          <div className="info__shift2">
            <input
              type="checkbox"
              name="work_shift_types.afternoon"
              value={formik.values.work_shift_types.afternoon}
              onChange={formik.handleChange}
            />
            <h4>Afternoon</h4>
          </div>
          <div className="info__shift3">
            <input
              type="checkbox"
              name="work_shift_types.night"
              value={formik.values.work_shift_types.night}
              onChange={formik.handleChange}
            />
            <h4>Night</h4>
          </div>
        </div>
        <div className="info__shift">
          <div className="info__shift1">
            <input
              type="checkbox"
              name="work_shift_types.weekend"
              value={formik.values.work_shift_types.weekend}
              onChange={formik.handleChange}
            />
            <h4>Weekend</h4>
          </div>
          <div className="info__shift2">
            <input
              type="checkbox"
              name="work_shift_types.weekday"
              value={formik.values.work_shift_types.weekday}
              onChange={formik.handleChange}
            />
            <h4>Weekday</h4>
          </div>
          <div className="info__shift3">
            <input
              type="checkbox"
              name="work_shift_types.rotating"
              value={formik.values.work_shift_types.rotating}
              onChange={formik.handleChange}
            />
            <h4>Rotating</h4>
          </div>
        </div>
        <div className="info__timeline">
          <h4>Willingness to Commute</h4>
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
            marks={marks}
          />
        </div>
        <h4>3) I prefer to work in shifs of</h4>
        <div className="info__qualification">
          <div className="info__work1">
            <input
              type="checkbox"
              name="work_in_shifts.six"
              value={formik.values.work_in_shifts.six}
              onChange={formik.handleChange}
            />
            <h4>6 Hrs</h4>
          </div>
          <div className="info__work2">
            <input
              type="checkbox"
              name="work_in_shifts.eight"
              value={formik.values.work_in_shifts.eight}
              onChange={formik.handleChange}
            />
            <h4>8 hRs</h4>
          </div>
          <div className="info__work3">
            <input
              type="checkbox"
              name="work_in_shifts.ten"
              value={formik.values.work_in_shifts.ten}
              onChange={formik.handleChange}
            />
            <h4>10 Hrs</h4>
          </div>
          <div className="info__work4">
            <input
              type="checkbox"
              name="work_in_shifts.twelve"
              value={formik.values.work_in_shifts.twelve}
              onChange={formik.handleChange}
            />
            <h4>12 Hrs</h4>
          </div>
          <div className="info__work5">
            <input
              type="checkbox"
              name="work_in_shifts.nopreference"
              value={formik.values.work_in_shifts.nopreference}
              onChange={formik.handleChange}
            />
            <h4>No Preference</h4>
          </div>
        </div>
        <h4>4) How many years of licenced work experience do you have</h4>
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
          <div className="info__agree1">
            <input type="checkbox" />
            <h4>
              I agree to NURSD <a href="">Terms & Conditions</a> and{" "}
              <a href="">Privacy Policy</a>
            </h4>
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
  );
};

export default Info;
