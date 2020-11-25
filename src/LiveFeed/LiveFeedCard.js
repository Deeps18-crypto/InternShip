import React from "react";
import "./LiveFeedCard.css";

function LiveFeedCard() {
  return (
    <div className="liveFeedCard">
      <div className="liveFeedCard__head">
        <h2>Unit 1</h2>
      </div>
      <div className="liveFeedCard__subHead">
        <h3>Name</h3>
        <h3>Shif Type</h3>
        <h3>Status</h3>
      </div>
      <div className="liveFeedCard__content">
        <div className="liveFeedCard__name">
          <div className="liveFeedCard__name1">
            <p>Martha C.(RN)</p>
            <h4>View Profile</h4>
          </div>
          <div className="liveFeedCard__name1">
            <p>Jenifer C.(RN)</p>
            <h4>View Profile</h4>
          </div>
          <div className="liveFeedCard__name1">
            <p>Martha C.(RN)</p>
            <h4>View Profile</h4>
          </div>
        </div>
        <div className="liveFeedCard__img"></div>
        <div className="liveFeedCard__shiftType">
          <p>Morning</p>
          <p>Morning</p>
          <p>Evening</p>
        </div>
        <div className="liveFeedCard__img"></div>
        <div className="liveFeedCard__status">
          <p>Checking in at 6:30pm</p>
          <p>Checking in at 6:30pm</p>
          <p>Running late for 5 min</p>
        </div>
      </div>
    </div>
  );
}

export default LiveFeedCard;
