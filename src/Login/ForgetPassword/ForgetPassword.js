import React from "react";
import Header from "../../Header/Header";
import "./ForgetPassword.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ForgetPasswordimg from "../../assests/Frame.png";

function ForgetPassword() {
  return (
    <div className="forgetPassword">
      <Header />
      <div className="forgetPassword__content">
        <ArrowBackIcon className="forgetPassword__arrowBackIcon" />
        <h2>Forget Password ?</h2>
      </div>

      <img src={ForgetPasswordimg} className="forgetPassword__img" />
      <h3>Please enter the Email associated whit your account</h3>
      <input type="text" />
      <p>You'll recieve a 4-digit code in your email from verification</p>
      <button>Send</button>
    </div>
  );
}

export default ForgetPassword;
