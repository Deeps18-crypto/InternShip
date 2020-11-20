import React, { useState } from "react";
import "./FilterInput.css";

function FilterInput() {
  const [values, setvalues] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
    Morning: false,
    Afternoon: false,
    Night: false,
    AllShifts: false,
  });
  console.log(values);

  const ValueChangeHandler = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="filterinput">
      <h4>Reset filter</h4>

      <div className="filterinput__input">
        <input
          type="checkbox"
          name="Monday"
          checked={values.Monday}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Tuesday"
          checked={values.Tuesday}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Wednesday"
          checked={values.Wedday}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Thursday"
          checked={values.Thursdayday}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Friday"
          checked={values.Friday}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Saturday"
          checked={values.Saturday}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Sunday"
          checked={values.Sundday}
          onChange={ValueChangeHandler}
        />
      </div>
      <div className="filterinput__input1">
        <input
          type="checkbox"
          name="Morning"
          checked={values.Morning}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Afternoon"
          checked={values.Afternoon}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="Night"
          checked={values.Night}
          onChange={ValueChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          name="AllShifts"
          checked={values.AllShifts}
          onChange={ValueChangeHandler}
        />
       
      </div>
    </div>
  );
}

export default FilterInput;
