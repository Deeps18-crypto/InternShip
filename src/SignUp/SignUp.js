import React, { useState } from "react";
import Images from "./Images";
import Inputs from "./Inputs";
import "./SignUp.css";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [isSubmit, setisSubmit] = useState(false);
  const history = useHistory();

  const submitform = () => {
    setisSubmit(true);
  };
  return (
    <div id="signup">
      {!isSubmit ? (
        <div>
          <Header />
          <div className="signUp">
            <Inputs submitform={submitform} />
            <Images />
          </div>
        </div>
      ) : (
        <div>{history.push("/BasicInfo")}</div>
      )}
    </div>
  );
}

export default SignUp;
