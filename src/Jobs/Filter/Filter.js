import React from "react";
import Slider1 from "./Slider/Slider1";
import Slider2 from "./Slider/Slider2";
import "./Filter.css";
import { Grid } from "@material-ui/core";
import FilterLogo from "../../assests/sliders.png";

function Filter() {
  return (
    <div>
      <Grid container xs={12} xl={12} md={12} lg={12}>
        <Grid container xs={12} xl={12} md={12} lg={12}>
          <Grid item xs={9} xl={6} md={6} lg={6}>
            <img src={FilterLogo} />
          </Grid>
          <Grid item xs={3} xl={6} md={6} lg={6}>
            <h2>Filter</h2>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          xl={12}
          md={12}
          lg={12}
          className="filter_header"
        >
          Availability
        </Grid>
        <Grid
          container
          xs={12}
          xl={12}
          md={12}
          lg={12}
          spacing={5}
          className="filter"
        >
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Monday
          </Grid>
          <Grid item md={6} lg={6} xl={6} xs={1}>
            <input type="checkbox" />
          </Grid>
        </Grid>
        <br />
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Thuesday
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="checkbox" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Wednesday
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="checkbox" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Thursday
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="checkbox" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Friday
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="checkbox" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Saturday
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="checkbox" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Sunday
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="checkbox" />
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          xl={12}
          md={12}
          lg={12}
          className="filter_header"
        >
          Shift Type
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12}>
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Morning
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="radio" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Afternoon
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="radio" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            Night
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="radio" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={6} lg={6} xl={6} xs={11}>
            All Shifts
          </Grid>
          <Grid item md={6} lg={6} xl={6}>
            <input type="radio" />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} md={12} lg={12} className="filter">
          <Grid item md={12} lg={12} xl={12} xs={12}>
            <h3 className="filter__distance">Distance</h3>
            <Slider1 />
          </Grid>
          <Grid item md={12} lg={12} xl={12} xs={12}>
            <h3 className="filter__distance">Shif Rate</h3>
            <Slider2 />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Filter;
