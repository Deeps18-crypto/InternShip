import React from "react";
import Useforms from "./Useforms";
import Images from "./Images";
import "./SignUp.css";
import Header from "../Header/Header";
import { Grid } from "@material-ui/core";

function SignUp() {
  return (
    <div>
      <Header />
      <Grid container xs={12} xl={12} md={12} lg={12}>
        <Grid item xs={12} xl={6} md={6} lg={6}>
          <Useforms />
        </Grid>
        <Grid item xs={12} xl={6} md={6} lg={6}>
          <Images />
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;
