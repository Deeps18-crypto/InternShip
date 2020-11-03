import React from 'react'
import "./Otp.css"
import ContactProg from "./ContactProgress/ContactProg"
import LogoHeader from '../Header/LogoHeader/LogoHeader'
import ContactInfo from './ContactInfo-Header/ContactInfo'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import OtpPage from './OtpPage/OtpPage'
import {Link} from "react-router-dom"


function Otp() {
    return (
        <div >
        <LogoHeader />

            <ContactProg/>
            <ContactInfo/>
            <Link to="/BasicInfo">
            <ArrowBackIcon className="otp__arrowIcon"/>
            </Link>
            <OtpPage/>
            
        </div>
    )
}

export default Otp
