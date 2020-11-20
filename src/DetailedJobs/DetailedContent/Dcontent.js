import React from "react";
import "./Dcontent.css";
import { useHistory } from "react-router-dom";

function Dcontent() {
  const history = useHistory();
  const ClickHandler = () => {
    history.push("/JobApplicationMain");
  };
  return (
    <div className="Dcontent">
      <h3>About Facility</h3>
      <input />
      <h3>Remarks</h3>
      <input />
      <br />
      <button className="Dcontent__button1" onClick={ClickHandler}>
        Apply for job
      </button>
      <br />
      <button className="Dcontent__button2">Message for Facility</button>
    </div>
  );
}

export default Dcontent;
