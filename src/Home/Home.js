import React from "react";
import "./Home.css";
import Facilites from "../Facility/Facilites";
import Header from "../Header/Header";
import Nurse from "../Nurse/Nurse";

function Home() {
  return (
    <div>
      <Header />
      <h1>Welcome</h1>

      <div className="home">
        <Facilites />
        <Nurse />
      </div>
    </div>
  );
}

export default Home;
