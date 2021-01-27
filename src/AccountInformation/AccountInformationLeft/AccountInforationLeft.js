import React from "react";
import Profile from "../../ScheduleHistory/Profile";
import "./AccountInformationLeft.css";

function AccountInforationLeft() {
  return (
    <div className="accountInformationLeft">
      <Profile />
      <h2>Anna C</h2>
      <button className="accountInformationLeft__button1">
        Account Information
      </button>
      <br />
      <button className="accountInformationLeft__button1">
        Contact Information
      </button>
      <br />
      <button className="accountInformationLeft__button1">Shif Preferences</button>
      <br />
      <button className="accountInformationLeft__button1">
        Disciplinary Questions
      </button>
    </div>
  );
}

export default AccountInforationLeft;
