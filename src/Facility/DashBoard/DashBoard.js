import React from "react";
import JobsHeader from "../../Jobs/JobsHeader/JobsHeader";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DashBoardCard from "./DashBoardCard";
import { DashBoardCard1 } from "./DashBoardCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 14,
    marginBottom: "6.2em",
  },

  head: {
    marginTop: 70,
    boxShadow: "2px 6px 2px rgba(0, 0, 0, 0.15)",
  },
  shift: {
    color: "#1082cb",
    cursor: "pointer",
  },
  dashBorad__box: {
    border: "2px solid #1082cb",
    padding: 20,
    borderRadius: 10,
    textAlign: "center",
  },
  dashBoard: {
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20,
  },
}));
function DashBoard() {
  const classes = useStyles();
  return (
    <div>
      <JobsHeader scheduleHistory />
      <div className={classes.dashBoard}>
        <h4>
          Hi Anna! Today’s Schedule for Elixy Medical Facility, Illionis 60025
        </h4>
      </div>
      <Grid item xs={12} container>
        <Grid item xs={4} />
        <Grid item xs={4} className={classes.dashBorad__box}>
          <p>There are no shifts added today.</p>
          <p>
            Edit <a className={classes.shift}>“Shift Details”</a>
          </p>
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={2} />
        <Grid item xs={4} className={classes.head}>
          <DashBoardCard />
        </Grid>
        <Grid item xs={4} className={classes.head}>
          <DashBoardCard1 />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}

export default DashBoard;
