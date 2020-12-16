import React, { useEffect, useState } from "react";
import Hospital from "../../../assests/Mask Group.png";
import "./JobsImage.css";

function JobsImage(props) {
  return (
    <div className="job__image">
      <img src={Hospital} alt="" />
    </div>
  );
}

export default JobsImage;
