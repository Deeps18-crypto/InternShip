import React, { useEffect, useState } from "react";
import Hospital from "../../../assests/Mask Group.png";
import "./Image.css";

function Image() {
  return (
    <div className="job__image">
      <img src={Hospital} alt="" />
    </div>
  );
}

export default Image;
