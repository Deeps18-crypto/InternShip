import React from 'react';
import "./CarouselSlide.css"

function CarouselSlide(props) {
    const { title } = props.content;


    return (
        <div className="CarouselSlide">
            <h3>{title}</h3>
            </div>
    );
}
export default  CarouselSlide