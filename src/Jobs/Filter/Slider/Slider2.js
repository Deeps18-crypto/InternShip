import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  margin: {
    height: theme.spacing(),
  },
}));

const marks = [
  {
    value: 10,
    label: "0 $",
  },
  {
    value: 20,
    label: "20 $",
  },

  {
    value: 30,
    label: "30 $",
  },

  {
    value: 40,
    label: "40 $",
  },

  {
    value: 50,
    label: "50 $",
  },
  {
    value: 60,
    label: "60 $",
  },
  {
    value: 70,
    label: "70 $",
  },
];

export default function DiscreteSlider() {
  const classes = useStyles();

  const updatesValue = (e, value) => {
    console.log(value);
  };

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={10}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={updatesValue}
      />
    </div>
  );
}
