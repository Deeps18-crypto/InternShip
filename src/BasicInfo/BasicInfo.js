import React,{useState} from 'react'
import "./BasicInfo.css"
import LogoHeader from "../Header/LogoHeader/LogoHeader"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Info from './Info/Info';
import {Link} from "react-router-dom"
import Progressbar from "./Progressbar/Progressbar"
import InfoHeader from './Basicinfo-Header/InfoHeader';
import OtpPage from '../ConfirmPhoneNum/OtpPage/OtpPage';


function BasicInfo() {
    const [submit,setsubmit] = useState(false)

    const submitform = ()=>{
        setsubmit(true)
    }
    return (
     <div>
             <LogoHeader />
         <div className="basicInfo">
                 <Progressbar/>
                 <InfoHeader/>
             <Link to="/SignUp">
                 <ArrowBackIcon className="basicInfo__arrowIcon"/>
            </Link>
                <h2>Hi there!,<br/>
              Enter your basic details</h2>
        
        {!submit ?<Info submitform={submitform}/> : (alert("FORM SUBMITTEED"),<Info/>  )}
         </div>
    </div>
    )
}

export default BasicInfo
