import React from "react";
import "./Header.css";
import Logo from "../assests/Group 65.png";
import { Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../auth/userAction";
import { Grid } from "@material-ui/core";

function Header({ logoutUser, user }) {
  const history = useHistory();

  return (
    <div className="header">
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <Grid container xl={12} lg={12} xs={12} md={12} alignItems="center">
        <Grid item xl={8} lg={6} md={4} />
        <div className="header__option">
          <span className="header__forNurses">For Nurses</span>
        </div>
        <div className="header__option">
          <span className="header__forFacilites">For Facilites</span>
        </div>

        {user.email ? (
          <div className="header__option">
            <span
              className="header__aboutUs"
              onClick={() => logoutUser(history)}
            >
              Logout
            </span>
          </div>
        ) : (
          <div className="header__option">
            <Link to="/login">
              <button className="header__logIn">Login</button>
            </Link>
          </div>
        )}
        <Link to="/SignUp">
          <button className="header__signUp">Sign Up</button>
        </Link>
      </Grid>
    </div>
  );
}
const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { logoutUser })(Header);
