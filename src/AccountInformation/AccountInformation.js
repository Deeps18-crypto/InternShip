import React from "react";
import "./AccountInformation.css";
import JobsHeader from "../Jobs/JobsHeader/JobsHeader";
import AccountInformationLeft from "./AccountInformationLeft/AccountInforationLeft";
import AccountInformationRight from "./AccountInformationRight/AccountInformationRight";
import JobFooter from "../Jobs/JobFooter/JobFooter";

function AccountInformation() {
  return (
    <div>
      <JobsHeader />
      <div className="accountInformation">
        <AccountInformationLeft />
        <AccountInformationRight />
      </div>
      <JobFooter />
    </div>
  );
}

export default AccountInformation;
