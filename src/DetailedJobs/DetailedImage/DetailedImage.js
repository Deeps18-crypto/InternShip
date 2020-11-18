import React from 'react'
import Dimagecontent from './Dimagecontent'
import DcarouselImage from "./DcarouselImage"
import "./DetailedImage.css"
import {Link} from "react-router-dom"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function DetailedImage() {
    return (
        <div className="detailedimage">
        <div className="detailedimage__head">
        <Link to ="/jobs">
        <ArrowBackIosIcon/>
        </Link>
          <h2>XYZ Hospital</h2>
      </div>
            <DcarouselImage/>
            <Dimagecontent/>
        </div>
    )
}

export default DetailedImage
