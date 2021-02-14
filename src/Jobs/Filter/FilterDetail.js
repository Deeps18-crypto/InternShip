import React from "react";
import Filter from "./Filter";
import "./FilterDetail.css";
import Slider1 from "./Slider/Slider1";
import Slider2 from "./Slider/Slider2";
import { Grid } from "@material-ui/core";

function FilterDetail() {
  return (
    <div className="filterDetail">
      <Filter />
    </div>
  );
}

export default FilterDetail;
