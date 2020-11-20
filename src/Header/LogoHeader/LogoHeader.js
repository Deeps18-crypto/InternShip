import React from "react";
import "./LogoHeader.css";
import Logo from "../../assests/Group 65.png";
import { Link } from "react-router-dom";

function LogoHeader() {
  return (
    <div className="logo__Header">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
}

export default LogoHeader;
