import React from "react";
import InfoHeader from "../../BasicInfo/Basicinfo-Header/InfoHeader";
import Progressbar from "../../BasicInfo/Progressbar/Progressbar";
import InfoDetails from "./InfoDetails";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import "./FacilityInfo.css";
import Header from "../../Header/Header";

function FacilityInfo() {
  return (
    <div>
      <Header />
      <Progressbar />
      <InfoHeader progressHeader />
      <div className="facilityInfo__head">
        <Link to="/Facility/ZipCode">
          <ArrowBackIcon className="basicInfo__arrowIcon" />
        </Link>
        <h2>
          Hi there!,
          <br />
          Enter your basic details
        </h2>
      </div>

      <InfoDetails />
    </div>
  );
}

export default FacilityInfo;
