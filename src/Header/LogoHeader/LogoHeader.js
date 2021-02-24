import React from "react";
import "./LogoHeader.css";
import Logo from "../../assests/Group 65.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function LogoHeader({ user }) {
  return (
    <div className="logo__Header">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      {user.email}
    </div>
  );
}

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps)(LogoHeader);
