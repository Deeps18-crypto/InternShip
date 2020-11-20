import React from "react";
import FilterContent from "./FilterContent";
import FilterInput from "./FilterInput";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <FilterContent />
      <FilterInput />
    </div>
  );
}

export default Filter;
