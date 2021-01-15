import React from "react";
import Header from "../Header/Header";
import Loginimg from "../assests/Group 68.png";
import "./Login.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LoginContent from "./LoginContent";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();

  const clickHandler = () => {
    //     history.push("/SignUp");
  };
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
          <button onClick={clickHandler} className="login__button">
            Login
          </button>
          <p  className="login__para">
            Not yet registered ? <Link className="login__link" to="/SignUp" >Sign Up</Link>
          </p>
        </div>
        <div className="login__image">
          <img src={Loginimg} className="imgLogin" />
        </div>
      </div>
    </div>
  );
}

export default Login;
