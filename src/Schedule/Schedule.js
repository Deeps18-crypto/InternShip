import React from 'react'
import LogoHeader from "../Header/LogoHeader/LogoHeader"
import ScheduleProgress from "./ScheduleProgress/ScheduleProgress"
import ScheduleHead from "./ScheduleHead/ScheduleHead"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import "./Schedule.css"


function Schedule() {
    return (
        <div>
            <LogoHeader/>
            <ScheduleProgress/>
            <ScheduleHead/>
            <Link to="/OtpVerification">
            <ArrowBackIcon className="arrow"/>
            </Link>
        </div>
    )
}

export default Schedule
