import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleHead.css";
import { Grid } from "@material-ui/core";

function ScheduleHead({ personalInfo }) {
  return (
    <>
      {!personalInfo ? (
        <Grid xs={12} xl={12} md={12} lg={12} className="scheduleHead">
          <Grid lg={4} xl={4} xs={4} md={1}>
            <Link to="/BasicInfo">
              <h3 className="schedule_basic">Basic Info</h3>
            </Link>
          </Grid>
          <Grid item item lg={5} xl={5} xs={12} md={5}>
            <Link to="/OtpVerification">
              <h3 className="schedule_basic">Confirm Phone Number</h3>
            </Link>
          </Grid>
          <Grid lg={2} xl={2} xs={12} md={1}>
            <Link to="/ScheduleInterview">
              <h3 className="schedule_scheduleInfo">Schedule Interview</h3>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid xs={12} xl={12} md={12} lg={12} className="scheduleHead">
          <Grid item lg={4} xl={4} xs={4} md={1}>
            <Link to="/Facility/Info">
              <h3 className="schedule_Facility">Facility</h3>
            </Link>
          </Grid>
          <Grid item lg={5} xl={5} xs={12} md={5}>
            <Link to="/Facility/AdditionalInfo">
              <h3 className="schedule_basic">Additional Facility Info</h3>
            </Link>
          </Grid>
          <Grid item lg={0} xl={2} xs={12} md={1}>
            <Link to="/Facility/PersonalInfo">
              <h3 className="schedule_scheduleInfo">Personl Info</h3>
            </Link>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ScheduleHead;
