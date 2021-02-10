import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
    padding: 30,
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  hrs: {
    color: "#1082cb",
    marginTop: 25,
  },
  para: {
    marginTop: 25,
  },
  a: {
    color: "#1082cb",
  },
});

export default function DashBoardCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <h4>Scheduled Hours</h4>

        <Typography variant="h5" component="h2" className={classes.hrs}>
          0Hrs
        </Typography>
        <p className={classes.para}>
          <a className={classes.a}>0.0%</a> increase from scheduled last week
        </p>
        <p className={classes.para}>
          <a className={classes.a}>0.0%</a> higher than the 4 week scheduled
          average
        </p>
      </CardContent>
    </Card>
  );
}

function DashBoardCard1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <h4>Utilized Hours</h4>

        <Typography variant="h5" component="h2" className={classes.hrs}>
          0Hrs
        </Typography>
        <p className={classes.para}>
          <a className={classes.a}>0.0%</a> more hours worked then scheduled
          this week
        </p>
        <p className={classes.para}>
          <a className={classes.a}>0.0%</a>more hours worked than scheduled over
          last 4 weeks
        </p>
      </CardContent>
    </Card>
  );
}
export { DashBoardCard1 };
