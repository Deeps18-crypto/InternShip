import React from "react";
import "./Progressbar.css";

function Progressbar() {
  return (
    <div className="progress">
      <progress className="progress1" value="100" max="100" />
      <progress className="progress2" value="0" max="100" />
      <progress className="progress3" value="0" max="100" />
    </div>
  );
}

export default Progressbar;
// <div className="progress1">
// <progress value="20" max="100" />

// </div>
// <div className="progress2">
// <progress value="20" max="100"/>

//</div>
