import React from 'react'
import "./BasicInfo.css"
import LogoHeader from "../Header/LogoHeader/LogoHeader"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Info from './Info/Info';
import {Link} from "react-router-dom"
import Progressbar from "./Progressbar/Progressbar"
import InfoHeader from './Basicinfo-Header/InfoHeader';


function BasicInfo() {
    return (
        <div className="basicInfo">
         <LogoHeader/>
        <Progressbar/>
        <InfoHeader/>
         <Link to="/Application-page">
        <ArrowBackIcon className="basicInfo__arrowIcon"/>
         </Link>
        <h3>Hi there!,<br/>
        Enter your basic details</h3>
        <Info/>
        
        </div>
    )
}

export default BasicInfo
