import React, { useState } from "react";
import Images from "./Images";
import Inputs from "./Inputs";
import "./SignUp.css";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Useforms from "./Useforms";

function SignUp(values) {
  const [isSubmit, setisSubmit] = useState(false);
  const history = useHistory();

  const submitform = () => {
    setisSubmit(true);
    //   axios
    //     .post("https://jsonplaceholder.typicode.com/posts", values)
    //     .then((response) => {
    //       console.log(response);
    //     });
    //   console
    //     .log(values)

    //     .catch((error) => {
    //       console.log(error);
    //     });
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
      )
      :''
    }
    </div>
  );
}

export default SignUp;
