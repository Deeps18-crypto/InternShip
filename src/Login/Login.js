import React, { useState } from "react";
import Header from "../Header/Header";
import Loginimg from "../assests/Group 68.png";
import "./Login.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LoginContent from "./LoginContent";
import { Grid } from "@material-ui/core";

function Login() {
  return (
    <div className="login">
      <Header />
      <Grid container xs={12} xl={12} md={12} lg={12}>
        <Grid container xs={12} xl={6} md={6} lg={6}>
          <div className="login__head">
            <Grid item xs={12} xl={1} md={1} lg={1}>
              <ArrowBackIcon />
            </Grid>
          </div>
          <div className="login__head">
            <Grid item xs={12} xl={4} md={4} lg={4} className="login__head">
              <h2>Hello,</h2>
              <h2>WelcomeBack!!</h2>
            </Grid>
          </div>
          <LoginContent />
        </Grid>
        <Grid item xs={12} xl={6} md={6} lg={6} className="imgLogin">
          <img src={Loginimg} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
