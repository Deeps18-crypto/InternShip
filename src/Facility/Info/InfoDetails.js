import React from "react";
import "./InfoDetails.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

const validate = (values) => {
  let errors = {};
  let letter = /[a-z]/gi;
  if (!values.facilityName.trim()) {
    errors.facilityName = "";
  } else if (!values.facilityName.match(letter)) {
    errors.facilityName = "Must be a alphabet";
  }
  if (!values.ifOther.trim()) {
    errors.ifOther = "";
  } else if (!values.ifOther.match(letter)) {
    errors.ifOther = "Must be a alphabet";
  }
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "";
  }
  if (!values.email.trim()) {
    errors.email = "";
  } else if (
    !values.email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    errors.email = "email is not valid";
  }
  if (!values.streetAddress.trim()) {
    errors.streetAddress = "";
  } else if (!values.streetAddress.match(letter)) {
    errors.streetAddress = "Must be a alphabet";
  }
  if (!values.city.trim()) {
    errors.city = "";
  } else if (!values.city.match(letter)) {
    errors.city = "Must be a alphabet";
  }
  if (!values.state.trim()) {
    errors.state = "";
  } else if (!values.state.match(letter)) {
    errors.state = "Must be a alphabet";
  }
  if (!values.zipcode.trim()) {
    errors.zipcode = "";
  }
  if (!values.website.trim()) {
    errors.zipcode = "";
  }
  return errors;
};
function InfoDetails({ AddionalInfo }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
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
    },
    validate,
    onSubmit: () => {
      history.push("/Facility/AdditionalInfo");
      // auth
      //   .createUserWithEmailAndPassword(email, password)
      //   .then((auth) => {
      //     console.log(auth);
      //     history.push("/BasicInfo");
      //     setloading(false);
      //   })
      //   .catch((e) => alert(e.message));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {!AddionalInfo ? (
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
              <select type="text">
                <option>nursd</option>
                <option>nursd</option>
                <option>nursd</option>
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
              {formik.touched.streetAddress && formik.errors.streetAddress && (
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
      ) : (
        <div className="infoDetails">
          <div className="infoDetails__select">
            <div className="infoDetails__selectRow1">
              <h4>Bed Count</h4>
              <input />
            </div>
            <div className="infoDetails__selectRow1">
              <h4>Number of Clinical Staff</h4>
              <input type="text" />
            </div>
          </div>
          <div className="infoDetails__input">
            <h4>Health System </h4>
            <input />
          </div>
          <div className="infoDetails__input">
            <h4>Facility Affiliated University </h4>
            <input />
          </div>
          <div className="infoDetails__select">
            <div className="infoDetails__selectRow1">
              <h4>Nurse to Patient Ratio</h4>
              <select type="text">
                <option>nursd</option>
                <option>nursd</option>
                <option>nursd</option>
              </select>
            </div>
            <div className="infoDetails__selectRow1">
              <div className="infoDetails__selectRow1">
                <h4>Is Facility a Magnet Hospital</h4>
                <select type="text">
                  <option>nursd</option>
                  <option>nursd</option>
                  <option>nursd</option>
                </select>
              </div>
            </div>
          </div>

          <div className="infoDetails__input">
            <h4>
              Clinical Resource (e.g: 5 MRI Machines, 12 Operation Rooms, etc.)
            </h4>
            <input />
          </div>
          <button className="infoDetails__button" type="submit">
            Next
          </button>
        </div>
      )}
    </form>
  );
}

export default InfoDetails;
