import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import HomePageloginModal from '../Trail/HomePageloginModal';
import HomePageloginM from '../Trail/HomePageloginM';

import logo from "./WinterTrail_logo.png";


import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  // console.log(errors.includes("Email provided not found."));
  // console.log(errors)

  return (
    <div className="log_in_main">
      <div className="log_in_image_div">
        <img
          className="log_in_image"
          src="https://images.pexels.com/photos/7165180/pexels-photo-7165180.jpeg"
          alt="login"
          onError={(event) => {
            event.currentTarget.src =
              "https://images.pexels.com/photos/7165180/pexels-photo-7165180.jpeg";
          }}
        />
        <div className="footer_main">
          <div className="footer_main">
            <div className="footer_logo_div">
              <img
                src={logo}
                alt="logo"
                onError={(e) => {
                  e.currentTarget.src = { logo };
                }}
              />
              <div className="footer_logo_text">&nbsp;WinterTrails</div>
            </div>
            <div className="footer_first_row">
              <div>
                <div className="footer_first_row_header">Explore</div>
                {/* <div>Countries</div>
                <div>States</div> */}
                <div className="footer_first_innertext">
                  <NavLink className="footer_first_navlink" exact to="/resorts">
                    Resorts
                  </NavLink>
                </div>
                <div className="footer_first_innertext">
                  <NavLink
                    className="footer_first_navlink"
                    exact
                    to="/alltrails"
                  >
                    Trails
                  </NavLink>
                </div>
              </div>
              <div>
                <div className="footer_first_row_header">Trails</div>
                <div className="footer_first_innertext">
                  {!user ? (
                    <div>
                      <HomePageloginModal />
                    </div>
                  ) : (
                    <div>
                      <NavLink
                        className="footer_first_navlink"
                        exact
                        to="/trails"
                      >
                        My trails
                      </NavLink>
                    </div>
                  )}
                </div>
                <div className="footer_first_innertext">
                  {!user ? (
                    <div>
                      <HomePageloginM />
                    </div>
                  ) : (
                    <div>
                      <NavLink
                        className="footer_first_navlink"
                        exact
                        to="/trails/new"
                      >
                        Create trail
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <div className="footer_first_row_header">Connections</div>
                  <div>
                    <div>
                      <i
                        style={{ color: "rgb(186,194,208)" }}
                        className="fa-brands fa-linkedin"
                      >
                        &nbsp;
                      </i>
                      <a
                        className="footer_first_navlink"
                        href="https://www.linkedin.com/in/kevin-kim-a88429150"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Linkedin
                      </a>
                    </div>
                    <div>
                      <i
                        style={{ color: "rgb(186,194,208)" }}
                        className="fa-brands fa-square-github"
                      >
                        &nbsp;
                      </i>
                      <a
                        className="footer_first_navlink"
                        href="https://github.com/kevykim"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_last_main">
              <div className="footer_last_left">
                <div>2022 WinterTrails&nbsp;•&nbsp;</div>
                <div>Inspired by&nbsp;</div>
                <a
                  className="footer_last_navlink"
                  href="https://www.alltrails.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AllTrails
                </a>
                &nbsp;•&nbsp;
                <a
                  className="footer_last_navlink"
                  href="https://github.com/kevykim/CapStone-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More info
                </a>
              </div>
              <div>{`English (US)`}</div>
            </div>
          </div>
        </div>
      </div>
      <form className="log_in_form" onSubmit={onLogin}>
        <div className="let_going_text">Log in and let's get going</div>
        <div>
          <div className="log_in_inputs_div">
            <div className="log_in_label_div">
              <div>Email</div>
              {errors.includes("Email provided not found.") ? (
                <div className="log_in_error">&nbsp;*</div>
              ) : errors.includes("Invalid email address") ? (
                <div className="log_in_error">&nbsp;*</div>
              ) : errors.includes("No such user exists.") ? (
                <div className="log_in_error">&nbsp;*</div>
              ) : errors.includes("Please enter your email") ? (
                <div className="log_in_error">&nbsp;*</div>
              ) : (
                <div></div>
              )}
            </div>
            <input
              name="email"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={updateEmail}
              className="log_in_inputs"
            />
            {errors.length > 0 &&
              errors.includes("Email provided not found.") && (
                <div className="log_in_error">Email provided not found</div>
              )}
            {errors.length > 0 && errors.includes("Invalid email address") && (
              <div className="log_in_error">Invalid email address</div>
            )}
            {errors.length > 0 && errors.includes("No such user exists.") && (
              <div className="log_in_error">No such user exists</div>
            )}
            {errors.length > 0 &&
              errors.includes("Please enter your email") && (
                <div className="log_in_error">Please enter your email</div>
              )}
          </div>
          <div className="log_in_inputs_div">
            <div className="log_in_label_div">
              <div>Password</div>
              {errors.includes("Please enter your password") ? (
                <div className="log_in_error">&nbsp;*</div>
              ) : errors.includes("Password was incorrect.") ? (
                <div className="log_in_error">&nbsp;*</div>
              ) : errors.includes("No such user exists.") ? (
                <div className="log_in_error">&nbsp;*</div>
              ) : (
                <div></div>
              )}
            </div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              className="log_in_inputs"
            />
            {errors.length > 0 &&
              errors.includes("Please enter your password") && (
                <div className="log_in_error">Please enter your password</div>
              )}
            {errors.length > 0 &&
              errors.includes("Password was incorrect.") && (
                <div className="sign_up_error">Password was incorrect</div>
              )}
            {errors.length > 0 && errors.includes("No such user exists.") && (
              <div className="log_in_error">No such user exists</div>
            )}
          </div>
          <div className="log_in_inputs_div">
            <button className="log_in_button_form" type="submit">
              Login
            </button>
          </div>
        </div>
        {/* <div className="log_in_error">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div> */}
        <div className="log_in_bottom_div">
          <div>Don't have an account?</div>
          <div>
            <NavLink className="sign_up_free_text" exact to="/signup">
              &nbsp;Sign up for free
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
