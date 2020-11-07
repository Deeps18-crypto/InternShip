import React from 'react';
import "./JobsHeader.css";
import Logo from "../assests/Group 65.png";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';
import { Link,NavLink } from 'react-router-dom';
import AC from "./AC/AC"


function Header() {
    return (
        <div className="jobs">
        <Link to="/">
        <img src={Logo} alt=""/>
        </Link>
        <div className="jobs__nav">
        <Link  to="/">
        <div className="jobs__findshifs">
        <span className="jobs__forNurses">Find a Shifts</span>
        </div>
        </Link>

      
        <div className="jobs__option">
        <span className="jobs__forFacilites">Shifts</span>

        </div>
        <div className="jobs__option">
        <span  className="header__aboutUs">Messages</span>

        </div>
        <div className="jobs__option">
        <span className="jobs__icon"><NotificationsNoneIcon/></span>

        </div>
        <div >
        <span className="jobs__signUp"><AC /></span>
        </div>
        </div>
       
        </div>
    )
}

export default Header
