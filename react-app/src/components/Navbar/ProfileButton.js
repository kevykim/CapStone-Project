import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout }  from "../../store/session";
import './ProfileButton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logOut = (e) => {
    dispatch(logout());
  };

  return (
    <>
      <div className="profile_button_main">
        <img
          onClick={openMenu}
          className="profile_img_main"
          src="https://img.favpng.com/8/10/1/avatar-image-computer-icons-likengo-png-favpng-szcsHZgZRX618rsHZNRncnnev.jpg"
          alt="profile-pic"
        />
        {showMenu && user && (
          <div className="profile-dropdown">
            <div className="profile_dropdown_box">{user.username}</div>
            <div className="profile_dropdown_box">
              <NavLink exact to='/trails'>Trails</NavLink>
            </div>
            <div className="profile_dropdown_box">reviews</div>
            <div className="profile_dropdown_box">create trails</div>
            <div className="profile_dropdown_box">
              <button className="log_out_button" onClick={logOut}>Log Out</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;