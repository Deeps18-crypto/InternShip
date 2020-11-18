import React from 'react'
import "./FilterContent.css"
import Filter from "../../assests/sliders.png"


function FilterContent() {
    return (
        <div className="filterContent">
             <div className="filterContent__filter">
            <img src={Filter}  />
            <h2>Filter</h2>
            </div>
            <div className="filterContent__list">
            <h3>Availability</h3>
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
            
            </div>
            <div className="filterContent__list1">
            <h3>Shift Type</h3>
            <p>Morning</p>
            <p>Afternoon</p>
            <p>Night</p>
            <p>All Shifts</p>
            
            
            </div>
        </div>
    )
}

export default FilterContent
