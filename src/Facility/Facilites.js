import React from "react";
import FacilitesLogo from "../assests/Facility.JPG";
import "./Facilites.css";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const changeHanlder = () => {
    history.push("/Facility/ZipCode");
  };
  return (
    <div className="facilites">
      <h2>Facilites</h2>
      <img src={FacilitesLogo} alt="" />
      <p>Sign up as a facility</p>
      <button onClick={changeHanlder}>Sign Up</button>
    </div>
  );
}

export default Signup;
