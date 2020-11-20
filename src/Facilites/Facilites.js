import React from "react";
import FacilitesLogo from "../assests/Facility.JPG";
import "./Facilites.css";

function Signup() {
  return (
    <div className="facilites">
      <h2>Facilites</h2>
      <img src={FacilitesLogo} alt="" />
      <p>Sign up as a facility</p>
      <button>Sign Up</button>
    </div>
  );
}

export default Signup;
