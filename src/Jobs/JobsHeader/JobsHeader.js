import React from "react";
import "./JobsHeader.css";
import Logo from "../../assests/Group 65.png";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Link } from "react-router-dom";
import AC from "./AC/AC";
import Shifts from "./Shifts/Shifts";

function Header() {
  return (
    <div className="jobs">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="jobs__nav">
        <div className="jobs__findshif">
          <button>Find a shift</button>
        </div>

        <div className="jobs__shifts">
          <span>
            <Shifts />
          </span>
        </div>
        <div className="jobs__message">
          <span>Messages</span>
        </div>
        <div className="jobs__notification">
          <span>
            <NotificationsNoneIcon />
          </span>
        </div>
        <div className="jobs__account">
          <span>
            <AC />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
