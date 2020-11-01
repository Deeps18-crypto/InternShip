import React from 'react'
import "./OtpPage.css"
import {Link} from "react-router-dom"

function OtpPage() {
    return (
        <div className="otpPage">
            <h2>Confirm your phone number</h2>
            <h4>Enter the code you received from via sms</h4>
            <input type="text" placeholder="XXXX"/>
            <h4>A code has been dent to hte phone number you entered via sms</h4>
            <Link to="/Schedule">
            <div className="otpPage__button">
               <button >Confirm</button>
            </div>
            </Link>
        </div>
    )
}

export default OtpPage
