import React from 'react'
import "./DetailedContentImage.css"
import Frame from "../../../assests/Frame 14.png"
import DetailedContentlogo from "./DetailedContentlogo"

function DetailedContentImage() {
    return (
        <div className="detailedcontentimage">
            <img src={Frame} alt=""/>
            <DetailedContentlogo/>
        </div>
    )
}

export default DetailedContentImage
