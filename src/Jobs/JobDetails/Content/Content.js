import React, { useState } from "react";
import Calendar from "../../../assests/calendar 1.png";
import Clock from "../../../assests/clock.png";
import Bookmark from "../../../assests/bookmark 1.png";
import "./Content.css";
import { useHistory } from "react-router-dom";

function Content() {
  const [values, setvalues] = useState({
    img: false,
  });
  const history = useHistory();
  console.log(values);

  const ClickHandler = () => {
    history.push("/Detailedjobs");
  };
  const BookmarkHandler = () => {
    setvalues(true);
    console.log("bookmark clicked");
  };
  return (
    <div className="content">
      <div className="content__bookmark">
        <h4>XYZ Hospital</h4>
        <img
          className="content__bookmarkimg"
          src={Bookmark}
          onClick={BookmarkHandler}
          value={values.img}
        />
      </div>
      <p>Chicago, Illinois</p>
      <div className="content__logo">
        <div className="content__logo1">
          <img src={Clock} /> 07/22/2020
        </div>
        <br />
        <img src={Calendar} /> 6:30 AM - 5:30 PM
        <div className="content__logo3">
          <img src={Clock} />
          CRN, Anesthesia
          <h2>$41.00/hr</h2>
        </div>
        <br />
      </div>
      <button className="content__button1" onClick={ClickHandler}>
        Easy Apply
      </button>
      <button className="content__button2">View Details</button>
    </div>
  );
}

export default Content;
