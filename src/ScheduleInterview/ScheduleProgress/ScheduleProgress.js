import React from "react";
import "./ScheduleProgress.css";

function ScheduleProgress() {
  return (
    <div className="scheduleProgress">
      <progress className="progress1" value="100" max="100" />
      <progress className="progress2" value="100" max="100" />
      <progress className="progress3" value="100" max="100" />
    </div>
  );
}

export default ScheduleProgress;
