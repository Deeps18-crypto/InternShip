import React from "react";
import "./Header.css";
import Logo from "../assests/Group 65.png";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <span>{user ? user.email : ""}</span>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__forNurses">For Nuses</span>
        </div>

        <div className="header__option">
          <span className="header__forFacilites">For Facilites</span>
        </div>
        <div className="header__option">
          <span className="header__aboutUs">AboutUs</span>
        </div>
        <div className="header__option">
          <Link to="/login">
            <span className="header__logIn">Login</span>
          </Link>
        </div>
        <NavLink activeClassName="active" to="/">
          <div className="header__option">
            <span className="header__signUp">SignUp</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
