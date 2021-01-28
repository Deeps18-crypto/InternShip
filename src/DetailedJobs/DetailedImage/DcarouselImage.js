import React, { useState } from "react";
import "./DcarouselImage.css";

import Slide from "@material-ui/core/Slide";
import CarouselSlide from "./CarouselSlide";
import { SlideInfo } from "./Slide";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Bookmark from "../../assests/bookmark 1.png";
import Share from "../../assests/share-2 1.png";

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === "left" ? <FaChevronLeft /> : <FaChevronRight />;

  return <div onClick={clickFunction}>{icon}</div>;
}

function Dimage() {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState({
    img: false,
  });
  console.log(values);
  const content = SlideInfo[index];
  const numSlides = SlideInfo.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 300);
  };

  const BookmarkHandler = () => {
    setValues(true);
  };

  return (
    <div className="dimage">
      <div className="dimage__image">
        <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
        <Slide in={slideIn} direction={slideDirection}>
          <div>
            <CarouselSlide content={content} />
          </div>
        </Slide>
        <Arrow direction="right" clickFunction={() => onArrowClick("right")} />
      </div>
      <div className="dimage__logos">
        <div className="dimage__bookmark"></div>
        <div className="dimage__share">
          <p> Share with your tribe </p> <img src={Share} />
        </div>
      </div>
    </div>
  );
}

export default Dimage;
