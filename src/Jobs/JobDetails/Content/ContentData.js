import React, { useState } from "react";
import Calendar from "../../../assests/calendar 1.png";
import Clock from "../../../assests/clock.png";
import Bookmark from "../../../assests/bookmark 1.png";
import Stethoscope from "../../../assests/uil_stethoscope.png";
import { useHistory } from "react-router-dom";
import "./ContentData.css";
import { useStateValue } from "../../../StateProvider";

function Cont({
  title,
  image,
  time,
  qualification,
  amount,
  place,
  date,
  id,
  location,
}) {
  const [{ card }, dispatch] = useStateValue();
  const [values, setvalues] = useState({
    img: false,
  });
  const history = useHistory();

  console.log("this is state", card);

  const ClickHandler = (id) => {
    dispatch({
      type: "ADD_DATA",
      item: {
        title: title,
        image: image,
        time: time,
        qualification: qualification,
        amount: amount,
        place: place,
        date: date,
        id: id,
        location: location,
      },
    });
    history.push(`/JobApplicationMain/${id}`);
  };

  const ClickViewHandler = () => {
    history.push("/Detailedjobs");
  };
  const BookmarkHandler = () => {
    setvalues(true);
    console.log("bookmark clicked");
  };

  return (
    <div className="contentData">
      <div className="contentData__img">
        <img src={image} />
      </div>
      <div className="contentData__content">
        <div className="contentData__bookmark">
          <div className="contentData__bookmarkh4">
            <h4>{title}</h4>
          </div>
          <div className="contentData__imgbookmark">
            <img src={Bookmark} onClick={BookmarkHandler} value={values.img} />
          </div>
        </div>
        <p>{place}</p>
        <div className="contentData__logo">
          <div className="contentData__logo1">
            <img src={Calendar} /> {date}
          </div>
          <div className="contentData__logo1">
            <img src={Clock} />
            {time}
          </div>
          <div className="contentData__qualification">
            <div className="contentData__logo3">
              <img src={Stethoscope} />
              {qualification}
            </div>
            <div className="contentData__price">
              <h4>${amount}/hr</h4>
            </div>
          </div>
          <br />
          <div className="contentData__button">
            <button
              className="contentData__button1"
              onClick={() => ClickHandler(id)}
            >
              Easy Apply{location}
            </button>
            <button className="contentData__button2" onClick={ClickViewHandler}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cont;
