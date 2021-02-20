import React, { useState } from "react";
import "./BasicInfo.css";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Info from "./Info/Info";
import { Link } from "react-router-dom";
import Progressbar from "./Progressbar/Progressbar";
import InfoHeader from "./Basicinfo-Header/InfoHeader";
import { connect } from "react-redux";

function BasicInfo({ user }) {
  return (
    <div>
      <LogoHeader />
      <Progressbar />
      <InfoHeader />
      <div className="facilityInfo__head">
        <Link to="/SignUp">
          <ArrowBackIcon className="basicInfo__arrowIcon" />
        </Link>
        <h2>
          Hi there!,
          <br />
          Enter your basic details
        </h2>
        {user.name}
        {user.email}
      </div>
      <Info />
    </div>
  );
}

const mapStateToProps = ({ session }) => ({
  user: session.user,
});
export default connect(mapStateToProps)(BasicInfo);
