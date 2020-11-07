import React from 'react'
import LogoHeader from "../Header/LogoHeader/LogoHeader"
import ScheduleProgress from "./ScheduleProgress/ScheduleProgress"
import ScheduleHead from "./ScheduleHead/ScheduleHead"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import "./Schedule.css"
import Table from './SchedulteTable/Table'

function Schedule() {
    return (
        <div className="schedule">
            <LogoHeader/>
            <ScheduleProgress/>
            <ScheduleHead/>
            <Link to="/OtpVerification">
            <ArrowBackIcon className="arrow"/>
            </Link>
            <h2>Set up a telephonic Interview <br></br> whichever time you like</h2>
            <p>A quick 20 minute interview to refrom your Nursing Career</p>
            <Table/>
        </div>
    )
}

export default Schedule
