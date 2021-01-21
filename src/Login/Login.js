import React, { useState } from "react";
import Header from "../Header/Header";
import Loginimg from "../assests/Group 68.png";
import "./Login.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LoginContent from "./LoginContent";


function Login() {

  return (
    <div className="login">
      <Header />
      <div className="login__body">
        <div className="login__content">
          <div className="login__contenthead">
            <ArrowBackIcon />
            <h2>Hello,</h2>
          </div>
          <h2>WelcomeBack!!</h2>
          <LoginContent />
        </div>
        <div className="login__image">
          <img src={Loginimg} className="imgLogin" />
        </div>
      </div>
    </div>
  );
}

export default Login;
