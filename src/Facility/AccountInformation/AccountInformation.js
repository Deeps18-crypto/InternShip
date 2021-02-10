import React from "react";
import AccountInforationLeft from "../../AccountInformation/AccountInformationLeft/AccountInforationLeft";
import AccountInformationRightChild from "../../AccountInformation/AccountInformationRight/AccountInformationRightChild";
import JobFooter from "../../Jobs/JobFooter/JobFooter";
import JobsHeader from "../../Jobs/JobsHeader/JobsHeader";

function FacilityaccountInformation() {
  return (
    <div>
      <JobsHeader scheduleHistory />
      <div style={{ display: "flex" }}>
        <AccountInforationLeft facility />
        <AccountInformationRightChild facility />
      </div>
      <JobFooter />
    </div>
  );
}

export default FacilityaccountInformation;
