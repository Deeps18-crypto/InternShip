import React from "react";
import "./Otp.css";
import ContactProg from "./ContactProgress/ContactProg";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import ContactInfo from "./ContactInfo-Header/ContactInfo";
import OtpPage from "./OtpPage/OtpPage";

function Otp() {
  return (
    <div>
      <LogoHeader />
      <ContactProg />
      <ContactInfo />
   
      <OtpPage />
    </div>
  );
}

export default Otp;
