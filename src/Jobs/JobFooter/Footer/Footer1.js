import React from 'react'
import "./Footer1.css"
import Facebook from "../../../assests/facebook 1.png"
import Twitter from "../../../assests/twitter 1.png"
import Linkedin from "../../../assests/linkedin 1.png"

function Footer1() {
    return (
        <div className="footer1">
        
            <h4>About US</h4>
            <h2>Simple Flexible Convenient</h2>
            <p>We believe that affinity,common purpose, and trust make poweful networks.
             NURSD is a secure, private
            vetted platfrom for healthcare facilities looking for high-quality talent and
             for a nurses to 
            explore,identify job opportunitis that provide a balance between lifestyle,
             preferences and flexibility</p>

             <div className="footer1__img">
             <img src={Linkedin}/>
             <img src={Facebook}/>
             <img src={Twitter}/>
             </div>
        </div>
    )
}

export default Footer1
