import React, { useState, useEffect } from "react";
import "./AccountInformationRight.css";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import UpdateAccountInformation from "../UpdateAccountInformtion/UpdateAccountInformation";
import { useFormik, Formik } from "formik";

function AccountInformationRightChild({
  firstname,
  lastname,
  phone_number,
  emergency_number,
  secondary_email,
  dob,
  street_address,
  state,
  zipcode,
  city,
  qualification,
  work_shift_types,
  work_in_shifts,
  willingness_to_commute,
}) {
  const [Open, setOpen] = useState(false);
  return (
    <Formik
      initialValues={{
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
        value6: "",
        value7: "",
        value8: "",
        value9: "",
      }}
      onSubmit={(inputData) => {
        console.log(inputData);
      }}
    >
      {(formik) => (
        <div className="accountInformationRight">
          <form onSubmit={formik.handleSubmit}>
            <div className="accountInformationRight__form">
              <div className="accountInformationRight__head">
                <h5>Account Information</h5>
                <div className="accountInformationRight__headIcon">
                  <div
                    className="accountInformationRight__Popup"
                    onClick={() => setOpen(true)}
                  >
                    <h5>Update</h5>
                    <EditIcon />
                  </div>

                  <UpdateAccountInformation
                    Open={Open}
                    onClick={() => setOpen(false)}
                  />
                </div>
              </div>
              <Link></Link>
              <div className="accountInformationRight__email">
                <h4>Email</h4>
                <input type="text" value={""} />
              </div>
              <div className="accountInformationRight__email">
                <h4>Password</h4>
                <input type="password" value={""} />
              </div>
              <div className="accountInformationRight__head">
                <h5>Contact Information</h5>
                <div className="accountInformationRight__headIcon">
                  <h5>Update</h5>
                  <EditIcon />
                </div>
              </div>
              <div className="accountInformationRight__Row1">
                <div className="accountInformationRight__FirstName">
                  <h4>First Name</h4>
                  <input type="text" value={firstname} />
                </div>
                <div className="accountInformationRight__LastName ">
                  <h4>Last Name</h4>
                  <input type="text" value={lastname} />
                </div>
              </div>
              <div className="accountInformationRight__Row1">
                <div className="accountInformationRight__FirstName">
                  <h4>Phone Number</h4>
                  <input type="text" value={phone_number} />
                </div>
                <div className="accountInformationRight__LastName ">
                  <h4>Emergency Phone Number</h4>
                  <input type="text" value={emergency_number} />
                </div>
              </div>
              <div className="accountInformationRight__email ">
                <h4>Street Address</h4>
                <input type="text" value={street_address} />
              </div>
              <div className="accountInformationRight__Country ">
                <div className="accountInformationRight__City">
                  <h4>City</h4>
                  <input type="text" value={city} />
                </div>
                <div className="accountInformationRight__City">
                  <h4>State</h4>
                  <input type="text" value={state} />
                </div>
                <div className="accountInformationRight__City">
                  <h4>ZipCode</h4>
                  <input type="text" value={zipcode} />
                </div>
              </div>
              <div className="accountInformationRight__Row1">
                <div className="accountInformationRight__FirstName">
                  <h4>Secondary Email</h4>
                  <input type="text" value={secondary_email} />
                </div>
                <div className="accountInformationRight__LastName ">
                  <h4>Date of Birth</h4>
                  <input type="text" placeholder="MM/DD/YY" value={dob} />
                </div>
              </div>
              <div className="accountInformationRight__head">
                <h5>Shift Information</h5>
                <div className="accountInformationRight__headIcon">
                  <h5>Update</h5>
                  <EditIcon />
                </div>
              </div>
              <div>Type of shift</div>
              <div className="accountInformationRight__shift ">
                <div className="accountInformationRight__shift1">
                  <input
                    type="checkbox"
                    value={work_shift_types}
                    checked={work_shift_types == "Morning"}
                  />
                  <h4>Morning</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input
                    type="checkbox"
                    checked={work_shift_types == "morning"}
                  />
                  <h4>Afternoon</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input
                    type="checkbox"
                    checked={work_shift_types == "night"}
                  />
                  <h4>Night &nbsp;&nbsp;&nbsp;&nbsp;</h4>
                </div>
              </div>
              <div className="accountInformationRight__shift ">
                <div className="accountInformationRight__shift1">
                  <input
                    type="checkbox"
                    checked={work_shift_types == "weekend"}
                  />
                  <h4>Weekend</h4>
                </div>
                <div className="accountInformationRight__Weekday">
                  <input
                    type="checkbox"
                    checked={work_shift_types == "weekday"}
                  />
                  <h4>Weekday</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input
                    type="checkbox"
                    checked={work_shift_types == "rotating"}
                  />
                  <h4>Rotating</h4>
                </div>
              </div>
              <div className="accountInformationRight__label">
                Qualification Type
              </div>
              <div className="accountInformationRight__shift ">
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={qualification == "RN"} />
                  <h4>RN</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={qualification == "LPN"} />
                  <h4>LPN</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={qualification == "CRNA"} />
                  <h4>CRNA</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={qualification == "CNM"} />
                  <h4>CNM</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={qualification == "CNS"} />
                  <h4>CNS</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input
                    type="checkbox"
                    checked={qualification == "CNA/STNA"}
                  />
                  <h4>CNA/STNA</h4>
                </div>
              </div>
              <div className="accountInformationRight__label">
                Preferred working hours
              </div>
              <div className="accountInformationRight__shift ">
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={work_in_shifts == "6 Hrs"} />
                  <h4>6 Hrs</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={work_in_shifts == "8 Hrs"} />
                  <h4>8 Hrs</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={work_in_shifts == "10 Hrs"} />
                  <h4>10 Hrs</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input type="checkbox" checked={work_in_shifts == "12 Hrs"} />
                  <h4>12 Hrs</h4>
                </div>
                <div className="accountInformationRight__shift1">
                  <input
                    type="checkbox"
                    checked={work_in_shifts == "No preference"}
                  />
                  <h4>No Preference</h4>
                </div>
              </div>
              <div className="accountInformationRight__label">
                Facilities range
              </div>
              <div className="accountInformationRight__timeline">
                <label className="accountInformationRight__label0">0</label>
                <label className="accountInformationRight__label1">5</label>
                <label className="accountInformationRight__label2">10</label>
                <label className="accountInformationRight__label3">15</label>
                <label className="accountInformationRight__label4">20</label>
                <label className="accountInformationRight__label5">25</label>
                <label className="accountInformationRight__label6">30</label>
                <label className="accountInformationRight__label7">35</label>
                <label className="accountInformationRight__label8">40</label>
                <label className="accountInformationRight__label9">45</label>
                <label className="accountInformationRight__label10">50</label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  name="willingness_to_commute"
                  step={5}
                  value={willingness_to_commute}
                />
              </div>

              <div className="accountInformationRight__head">
                <h5>Disciplinary Questions</h5>
                <div className="accountInformationRight__headIcon">
                  <h5>Update</h5>
                  <EditIcon />
                </div>
              </div>
              <p>
                Have any of the following ever been, or currently are in the
                process of being, denied, revoked, suspended, reduced, limited,
                placed on probation, not renewed, surrendered, investigated,
                terminated, lost, withdrawn, restricted, reprimanded,
                disciplined, stipulated, fined, excluded or discharged made
                subject to a consent order or relinquished? Willful and
                substantial omissions or misrepresentation may result in denial.
              </p>
              <div className="accountInformationRight__radioForm">
                <p>Do you have a medical license in any state?</p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      value="yes"
                      name="value1"
                      checked={formik.values.value1 === "yes"}
                      onChange={formik.handleChange}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      value="no"
                      name="value1"
                      checked={formik.values.value1 === "no"}
                      onChange={formik.handleChange}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>Do you have any other professional registration/ license?</p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value2"
                      value="yes"
                      checked={formik.values.value2 === "yes"}
                      onChange={formik.handleChange}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value2"
                      value="no"
                      checked={formik.values.value2 === "no"}
                      onChange={formik.handleChange}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>Do you have any clinical priviledges?</p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value3"
                      value="yes"
                      onChange={formik.handleChange}
                      checked={formik.values.value3 === "yes"}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value3"
                      value="no"
                      onChange={formik.handleChange}
                      checked={formik.values.value3 === "no"}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>Do you have any institutional affiliation/ status?</p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value4"
                      value="yes"
                      onChange={formik.handleChange}
                      checked={formik.values.value4 === "yes"}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value4"
                      value="no"
                      onChange={formik.handleChange}
                      checked={formik.values.value4 === "no"}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>
                  Do you have any professional sanction (ex: government,
                  administrative agency, or other?)
                </p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value5"
                      value="yes"
                      onChange={formik.handleChange}
                      checked={formik.values.value5 === "yes"}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value5"
                      value="no"
                      onChange={formik.handleChange}
                      checked={formik.values.value5 === "no"}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>
                  Is there any reason that you are unable to perform the
                  essential functions of the position for which you are applying
                  safely and according to accepted standards of performance with
                  or without reasonable accommodation?
                </p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value6"
                      value="yes"
                      onChange={formik.handleChange}
                      checked={formik.values.value6 === "yes"}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value6"
                      value="no"
                      onChange={formik.handleChange}
                      checked={formik.values.value6 === "no"}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>
                  Are you currently using or have you ever used illegal drugs or
                  legal drugs in an illegal manner?
                </p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value7"
                      value="yes"
                      onChange={formik.handleChange}
                      checked={formik.values.value7 === "yes"}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value7"
                      value="no"
                      onChange={formik.handleChange}
                      checked={formik.values.value7 === "no"}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>
                  Is there any other issue which should be disclosed that may
                  have an adverse impact on your ability to deliver effective
                  clinical health care services?
                </p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value8"
                      value="yes"
                      onChange={formik.handleChange}
                      checked={formik.values.value8 === "yes"}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value8"
                      value="no"
                      onChange={formik.handleChange}
                      checked={formik.values.value8 === "no"}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__radioForm">
                <p>
                  Have you ever been named as a defendant in a professional
                  liability action?
                </p>
                <div className="accountInformationRight__radio">
                  <div className="accountInformationRight__radio1">
                    <input
                      type="radio"
                      name="value9"
                      value="yes"
                      onChange={formik.handleChange}
                      checked={formik.values.value9 === "yes"}
                    />
                    &nbsp; Yes
                  </div>
                  <div className="accountInformationRight__radio2">
                    <input
                      type="radio"
                      name="value9"
                      value="no"
                      onChange={formik.handleChange}
                      checked={formik.values.value9 === "no"}
                    />
                    &nbsp; No
                  </div>
                </div>
              </div>
              <div className="accountInformationRight__button">
                <button type="submit">Save</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default AccountInformationRightChild;
