import React from "react";
import "./JobsHeader.css";
import Logo from "../../assests/Group 65.png";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Link, useHistory } from "react-router-dom";
import AC from "./AC/AC";
import Shifts from "./Shifts/Shifts";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";

function JobsHeader({ scheduleHistory }) {
  const history = useHistory();
  const clickHandler = () => {
    history.push("./Jobs");
  };
  return (
    <div className="jobs">
      <div className="jobs__logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      {!scheduleHistory ? (
        <div className="jobs__nav">
          <div className="jobs__findshif">
            <button onClick={clickHandler}>Find a shift</button>
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
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </div>
          <div className="jobs__account">
            <span>
              <AC />
            </span>
          </div>
        </div>
      ) : (
        <div className="jobs__navSchedule">
          <div className="jobs__findshif">
            <button>Shift Details</button>
          </div>
          <div className="jobs__shifts">
            <span>
              <Shifts facility />
            </span>
          </div>
          <div className="jobs__message">
            <span>Dashboard</span>
          </div>
          <div className="jobs__message">
            <span>Tools</span>
          </div>
          <div className="jobs__notification">
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </div>
          <div className="jobs__account">
            <span>
              <AC facility />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobsHeader;
