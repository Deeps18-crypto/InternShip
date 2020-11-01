import React from 'react'
import "./Info.css"
import {Link} from "react-router-dom"

function Info() {
    return (
           
<form>
     <div className="info">
         <div className="info__head">
              <div className="info__first">
                    <h4>First Name</h4>
                    <input/>
             </div>
             <div className="info__second">
                    <h4>Last Name</h4>
                    <input/>
            </div>
        </div>
    <div className="info__head">
         <div className="info__first">
               <h4>Phone Number (You'll recieve an OTP for verification)</h4>
               <input/>
        </div>
        <div className="info__second">
               <h4>Emergency Phone Number</h4>
               <input/>
       </div>
   </div>
     <div className="info__street">
           <h4>Street Address</h4>
           <input/>
    </div>
  <div className="info__cityHead">
     <div className="info__city">
           <h4>City</h4>
           <input/>
    </div>
      <div className="info__state">
           <h4>State</h4>
           <input/>
     </div>
     <div className="info__zipCode">
           <h4>Zip Code</h4>
           <input/>
     </div>
  </div>
  <div className="info__head">
        <div className="info__first">
           <h4>Secondary Email (Optional)</h4>
           <input/>
        </div>
        <div className="info__second">
           <h4>Date Of Birth</h4>
           <input type="Date of Birth" placeholder="MM/DD/YYYY"/>
       </div>
   </div>
     <h4>1) Select your qualification type</h4>
  <div className="info__qualification">
        <div className="info__type1">
          <input type="checkbox"/>
           <h4>RN</h4>
        </div>
       <div className="info__type2">
            <input type="checkbox"/>
            <h4>LPN</h4>
       </div>
       <div className="info__type3">
           <input type="checkbox"/>
           <h4>CRNA</h4>
       </div>
      <div className="info__type4">
          <input type="checkbox"/>
          <h4>CNM</h4>
      </div>
      <div className="info__type5">
          <input type="checkbox"/>
           <h4>CNS</h4>
      </div>
      <div className="info__type6">
       <input type="checkbox"/>
         <h4>CNA/STNA</h4>
      </div>
   </div>
         <h4>2) What type shifts are you lookin for?(choose as many as you like)</h4>
  <div className="info__shift">
       <div className="info__shift1">
          <input type="checkbox"/>
            <h4>Morning</h4>
       </div>
       <div className="info__shift2">
          <input type="checkbox"/>
            <h4>Afternoon</h4>
       </div>
       <div className="info__shift3">
           <input type="checkbox"/>
           <h4>Night</h4>
       </div>
    </div>
  <div className="info__shift">
          <div className="info__shift1">
              <input type="checkbox"/>
              <h4>Weekend</h4>
         </div>
           <div className="info__shift2">
               <input type="checkbox"/>
               <h4>Weekday</h4>
         </div>
            <div className="info__shift3">
                <input type="checkbox"/>
                 <h4>Rotating</h4>
            </div>
    </div>
            <div className="info__street">
               <h4>Willingness to Commute</h4>
               <input/>
           </div>
              <h4>3) I prefer to work in shifs of</h4>
  <div className="info__qualification">
              <div className="info__work1">
                  <input type="checkbox"/>
                  <h4>6 Hrs</h4>
             </div>
             <div className="info__work2">
                <input type="checkbox"/>
                <h4>8 hRs</h4>
             </div>
            <div className="info__work3">
                 <input type="checkbox"/>
                  <h4>10 Hrs</h4>
             </div>
             <div className="info__work4">
                 <input type="checkbox"/>
                 <h4>12 Hrs</h4>
            </div>
            <div className="info__work5">
                 <input type="checkbox"/>
                <h4>No Preference</h4>
            </div>
          </div>
      <h4>4) How many years of licenced work experience do you have</h4>
  <div className="info__shift">
          <div className="info__shift1">
               <input type="checkbox"/>
               <h4>Less than a year</h4>
          </div>
          <div className="info__shift2">
                <input type="checkbox"/>
                <h4>1-2 years</h4>
         </div>
            <div className="info__shift3">
                 <input type="checkbox"/>
                 <h4>+2 years</h4>
           </div>
  </div>
    <div className="info__shift">
            <div className="info__shift1">
                 <input type="checkbox"/>
                 <h4>I agree to NURSD <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a></h4>
             </div>
    </div>
  <div className="info__shift">
         <div className="info__button1">
            <button >Save</button>
          </div>
          <Link to="/OtpVerification">
          <div className="info__button2">
             <button >Next</button>
          </div>
          </Link>
       </div>
   </div>
</form>
 )
}


export default Info
