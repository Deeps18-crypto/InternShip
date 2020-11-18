import React, { useState } from 'react'
import "./Dimage.css"
import {Link} from "react-router-dom"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Slide from '@material-ui/core/Slide';
import CarouselSlide from "./CarouselSlide"
import  {SlideInfo} from "./Slide"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft />: <FaChevronRight />;

    return <div onClick={clickFunction}>{icon}</div>;
}

function Dimage() {
    const [index, setIndex] = useState(0);
    const content = SlideInfo[index];
    const numSlides = SlideInfo.length;

    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 300);
    };

  

    return (
    <div className="dimage">
        <div className="dimage__head">
          <Link to ="/jobs">
          <ArrowBackIosIcon/>
          </Link>
            <h2>XYZ Hospital</h2>
        </div>
        <div className="dimage__image">
        <Arrow  
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection}>
            <div>
                <CarouselSlide content={content} />
            </div>
            </Slide>
        <Arrow  
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
              <button>$41.00/hr</button>
        <div className="dimage__input1">
              <input type="text" /><br/>
        </div>
        <div className="dimage__input2">
              <input type="text" />
              <input type="text" />
        </div>
        <div className="dimage__input1">
               <input type="text"/>
        </div>
   </div>
    )
}

export default Dimage

