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

function AdditionalInfo() {
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

      <InfoDetails AddionalInfo />
    </div>
  );
}

export default AdditionalInfo;
