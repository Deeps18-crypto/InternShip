import React, { useState } from "react";
import Calendar from "../../../assests/calendar 1.png";
import Clock from "../../../assests/clock.png";
import Bookmark from "../../../assests/bookmark 1.png";
import { useHistory } from "react-router-dom";
import "./ContentData.css";

function Cont(props) {
  const [values, setvalues] = useState({
    img: false,
  });
  const ClickHandler = () => {
    history.push("/JobApplicationMain");
  };
  const ClickViewHandler = () => {
    history.push("/Detailedjobs");
  };
  const BookmarkHandler = () => {
    setvalues(true);
    console.log("bookmark clicked");
  };
  const history = useHistory();
  console.log(values);

  return (
    <div className="contentData">
      <div className="contentData__bookmark">
        <div className="contentData__bookmarkh4">
          <h4>{props.title}</h4>
        </div>
        <div className="contentData__imgbookmark">
          <img src={Bookmark} onClick={BookmarkHandler} value={values.img} />
        </div>
      </div>
      <p>{props.place}</p>
      <div className="contentData__logo">
        <div className="contentData__logo1">
          <img src={Calendar} /> {props.date}
        </div>
        <div className="contentData__logo1">
          <img src={Clock} />
          {props.time}
        </div>
        <div className="contentData__logo3">
          <img src={Clock} />
          {props.qualification}
          <h2>{props.amount}</h2>
        </div>
        <br />
      </div>
      <div className="contentData__button">
      <button className="contentData__button1" onClick={ClickHandler}>
        Easy Apply
      </button>
      <button className="contentData__button2" onClick={ClickViewHandler}>
        View Details
      </button>
      </div>
    </div>
  );
}

export default Cont;
