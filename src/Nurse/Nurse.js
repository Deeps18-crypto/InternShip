import React from "react";
import "./Nurse.css";
import NurseLogo from "../assests/nurse.JPG";
import { useHistory } from "react-router-dom";

function Nurse() {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/SignUp");
  };
  return (
    <div className="nurse">
      <h2>Nurse</h2>
      <img src={NurseLogo} alt="" />
      <p>Sign up as a Nurse</p>
      <button onClick={clickHandler}>Sign Up</button>
    </div>
  );
}

export default Nurse;


