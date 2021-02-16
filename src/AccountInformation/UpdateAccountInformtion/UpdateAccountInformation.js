import React from "react";
import "./UpdateAccountInformation.css";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "./Backdorp/Backdrop";

import { Link, useHistory } from "react-router-dom";

const style = {
  root: {
    width: "70%",
    marginBottom: "2.2em",
  },
};
const useStyle = makeStyles(style);

function UpdateAccountInformation({ Open, onClick, terms }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      Currnet_Password: "",
      Create_NewPassword: "",
      Confirmpassword: "",
    },
    onSubmit: (inputData) => {
      console.log(inputData);
    },
  });
  const classes = useStyle();
  if (!Open) return null;
  return (
    <>
      {!terms ? (
        <div>
          <Backdrop onClick={onClick} />
          <div className="updateAccountInformation">
            <div className="updateAccountInformation__head">
              <h4>Update Account Information</h4>
              <CloseIcon onClick={onClick} />
            </div>
            <div className="updateAccountInformation__form">
              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <TextField
                  className={classes.root}
                  variant="outlined"
                  label="Current Password"
                  name="Current_Password"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <br />
                {formik.touched.Create_NewPassword &&
                  formik.errors.Create_NewPassword && (
                    <p className="createNewPassword__form">
                      {formik.errors.Create_NewPassword}
                    </p>
                  )}
                <TextField
                  className={classes.root}
                  variant="outlined"
                  label="New Password"
                  name="New_Password"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <br />
                {formik.touched.Create_NewPassword &&
                  formik.errors.Create_NewPassword && (
                    <p className="createNewPassword__form">
                      {formik.errors.Create_NewPassword}
                    </p>
                  )}
                <TextField
                  className={classes.root}
                  variant="outlined"
                  label="Confirm Password"
                  name="Confirm_Password"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Confirmpassword &&
                  formik.errors.Confirmpassword && (
                    <p className="createNewPassword__form">
                      {formik.errors.Confirmpassword}
                    </p>
                  )}

                <button
                  type="submit"
                  className="updateAccountInformation__button"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Backdrop onClick={onClick} />
          <div className="updateAccountInformation__terms">
            <div className="updateAccountInformation__headTerms">
              <h4>Client Terms</h4>
              <CloseIcon onClick={onClick} />
            </div>
            <div className="updateAccountInformation__formterms">
              Simple, Convenient, and Flexible terms let you focus on hiring
              providers:
            </div>
            <div className="updateAccountInformation__formtermsPara">
              <p>•$10k flat fee for permanent placements.</p>
              <p>•15% flat fee on per diem nurse assignments.</p>
              <p>
                •NURSD holds an exclusice engagement with all Providers that
                have been in direct contact through NURSD, with Client in the
                past 2 years.
              </p>
              <p>
                •NURSD shall arrange occurance - based insurance, unless Client
                prefers to provide alternate insurance coverage.{" "}
              </p>
              <p>
                •Invoices are billed biweekly and payment is due within 30 days.
              </p>
            </div>

            <div className="updateAccountInformation__formterms">
              Read the full NURSD &nbsp;
              <a
                href="https://www.nursdhealth.com/terms-and-policies/"
                style={{ color: "#38B1FF" }}
              >
                Client Terms
              </a>
              &nbsp;here.
            </div>
            <div className="updateAccountInformation__bottomTerms">
              A NURSD representative will be in touch to sign this contract
              offline.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateAccountInformation;
