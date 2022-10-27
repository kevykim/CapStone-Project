import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <div className="navbar_div">
          <NavLink className='winter_trail_text' exact to="/">
        <div className="winter_trail_div">
            <div>
            <img className="winter_trail_image" src="./assets/WinterTrail_logo.png" alt="Home"></img>
            </div>
            <div>WinterTrails</div>
        </div>
          </NavLink>
        <div className="sign_log_div">
        <button className="demo_user_button">
          Demo User
        </button>
          <NavLink className="navlink_signup_text" exact to="/signup">
        <button className="sign_up_button">
            Sign Up
        </button>
          </NavLink>
          <NavLink className="navlink_text" exact to="/login">
        <button className="log_in_button">
            Log In
        </button>
          </NavLink>
        </div>
        {/* <div>
          <LogoutButton />
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
