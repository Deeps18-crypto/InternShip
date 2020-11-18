import React from 'react'
import Filter from "./Filter"
import "./FilterDetail.css"
import Slider1 from "./Slider/Slider1"
import Slider2 from "./Slider/Slider2"

function FilterDetail() {
    return (
        <div className="filterDetail">
          <Filter/>
          <div className ="fillterDetail__slider">
          <h3>Distance</h3>
          <Slider1 />
          <h3>Shif Rate</h3>

          <Slider2/>

          </div>
        </div>
    )
}

export default FilterDetail