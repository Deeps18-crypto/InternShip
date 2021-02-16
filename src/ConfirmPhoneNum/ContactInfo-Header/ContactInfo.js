import React from "react";
import "./ContactInfo.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

function ContactInfo({ progress }) {
  return (
    <div>
      {!progress ? (
        <Grid xs={12} xl={12} md={12} lg={12} className="scheduleHead">
          <Grid lg={4} xl={4} xs={4} md={1}>
            <Link to="/BasicInfo">
              <h3 className="schedule_basic"> Basic Info</h3>
            </Link>
          </Grid>
          <Grid item item lg={5} xl={5} xs={12} md={5}>
            <Link to="/OtpVerification">
              <h3 className="schedule_scheduleInfo"> Confirm Phone Number </h3>
            </Link>
          </Grid>
          <Grid lg={2} xl={2} xs={12} md={1}>
            <h3 className="schedule_basic">Schedule Interview</h3>
          </Grid>
        </Grid>
      ) : (
        <Grid xs={12} xl={12} md={12} lg={12} className="scheduleHead">
          <Grid lg={4} xl={4} xs={4} md={1}>
            <Link to="/Facility/Info">
              <h3>Facility</h3>
            </Link>
          </Grid>
          <Grid item item lg={5} xl={5} xs={12} md={5}>
            <Link to="/Facility/AdditionalInfo">
              <h3>Additional Facility Info</h3>
            </Link>
          </Grid>
          <Grid lg={2} xl={2} xs={12} md={1}>
            <h3>Personal Info</h3>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default ContactInfo;
