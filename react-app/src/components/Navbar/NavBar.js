import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkDemoUser } from "../../store/session";
import './NavBar.css'
import ProfileButton from "./ProfileButton";
import logo from "./WinterTrail_logo.png"

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  const dispatch = useDispatch()

  const democlick = async (event) => {
    await dispatch(thunkDemoUser())
  }

  if (user) {
    < ProfileButton user={user} />
  } else {
       <div>
         <div className="navbar_div">
           <NavLink className="winter_trail_text" exact to="/">
             <div className="winter_trail_div">
               <div>
                 <img
                   className="winter_trail_image"
                   src={logo}
                   alt="Home"
                 ></img>
               </div>
               <div>WinterTrails</div>
             </div>
           </NavLink>
           <div className="sign_log_div">
             <button className="demo_user_button" onClick={democlick}>Demo User</button>
             <NavLink className="navlink_signup_text" exact to="/signup">
               <button className="sign_up_button">Sign Up</button>
             </NavLink>
             <NavLink className="navlink_text" exact to="/login">
               <button className="log_in_button">Log In</button>
             </NavLink>
           </div>
         </div>
       </div>;
  }
  return (
    <div>
      <div className="navbar_div">
          <NavLink className='winter_trail_text' exact to="/">
        <div className="winter_trail_div">
            <div>
            <img className="winter_trail_image" src={logo} alt="Home"></img>
            </div>
            <div>WinterTrails</div>
        </div>
          </NavLink>
        {/* <div className="sign_log_div"> */}
       {user ? (
        <ProfileButton user={user} />
       ) : (  <div>
         <div className="navbar_div">
           <div className="sign_log_div">
             <button className="demo_user_button">Demo User</button>
             <NavLink className="navlink_signup_text" exact to="/signup">
               <button className="sign_up_button">Sign Up</button>
             </NavLink>
             <NavLink className="navlink_text" exact to="/login">
               <button className="log_in_button">Log In</button>
             </NavLink>
           </div>
         </div>
       </div>)}
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
