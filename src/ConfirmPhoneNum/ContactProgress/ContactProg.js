import React from "react";
import "./ContactProg.css";

function ContactProg() {
  return (
    <div className="contactProgress">
      <progress className="progress1" value="100" max="100" />
      <progress className="progress2" value="100" max="100" />
      <progress className="progress3" value="0" max="100" />
    </div>
  );
}

export default ContactProg;
