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

function UpdateAccountInformation({ children, Open, onClick }) {
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

            <button type="submit" className="updateAccountInformation__button">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateAccountInformation;
