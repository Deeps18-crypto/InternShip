import React, { useState } from "react";
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
    value: 5,
    label: "5 miles",
  },
  {
    value: 15,
    label: "15 miles",
  },

  {
    value: 30,
    label: "30 miles",
  },

  {
    value: 45,
    label: "45 miles",
  },

  {
    value: 60,
    label: "60 miles",
  },
];

export default function DiscreteSlider() {
  const classes = useStyles();

  const updateValue = (e, value) => {
    console.log(value);
  };
  return (
    <div className={classes.root}>
      <Slider
        defaultValue={5}
        aria-labelledby="discrete-slider-custom"
        step={15}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={updateValue}
      />
    </div>
  );
}
