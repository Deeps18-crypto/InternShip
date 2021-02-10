import React from "react";
import Profile from "../../ScheduleHistory/Profile";
import "./AccountInformationLeft.css";

function AccountInforationLeft({ facility }) {
  return (
    <>
      {!facility ? (
        <div className="accountInformationLeft">
          <div className="accountInformationLeft__position">
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
            <button className="accountInformationLeft__button1">
              Shif Preferences
            </button>
            <br />
            <button className="accountInformationLeft__button1">
              Disciplinary Questions
            </button>
          </div>
        </div>
      ) : (
        <div className="accountInformationLeft">
          <div className="accountInformationLeft__position">
            <Profile />
            <h2>Katherine J</h2>
            <button className="accountInformationLeft__button1">
              Account Information
            </button>
            <br />
            <button className="accountInformationLeft__button1">
              Contact Information
            </button>
            <br />
            <button className="accountInformationLeft__button1">
              Facility Information
            </button>
            <br />
            <button className="accountInformationLeft__button1">
              Extra Details
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AccountInforationLeft;
