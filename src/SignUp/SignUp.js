import React from "react";
import Useforms from "./Useforms";
import Images from "./Images";
import "./SignUp.css";
import Header from "../Header/Header";

function SignUp() {
  return (
    <div>
      <Header />
      <div className="signup">
        <Useforms />
        <Images />
      </div>
    </div>
  );
}

export default SignUp;
