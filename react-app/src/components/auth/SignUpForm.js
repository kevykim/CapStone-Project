import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';

import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    
      const data = await dispatch(signUp(username, firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="sign_up_main">
      <div className="sign_up_image_div">
        <img
          className="sign_up_image"
          src="https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg"
          alt="signup"
        />
      </div>
      <form className="sign_up_form" onSubmit={onSignUp}>
        <div className="create_free_text">Create your free account</div>
        <div>
          <div className="sign_up_inputs_div">
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              placeholder="Username"
              className="sign_up_inputs"
            ></input>
            {errors.length > 0 &&
              errors.includes("Please enter a username") && (
                <div className="sign_up_error">Please enter a username</div>
              )}
            {errors.length > 0 &&
              errors.includes("Username is already in use.") && (
                <div className="sign_up_error">Username is already in use</div>
              )}
            {errors.length > 0 &&
              errors.includes("Username must be longer than 4 characters.") && (
                <div className="sign_up_error">
                  Username must be longer than 4 characters
                </div>
              )}
          </div>
          <div className="sign_up_inputs_div">
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              placeholder="Email"
              className="sign_up_inputs"
            ></input>
            {errors.length > 0 && errors.includes("Please enter a email") && (
              <div className="sign_up_error">Please enter a email</div>
            )}
            {errors.length > 0 &&
              errors.includes("Email address is already in use.") && (
                <div className="sign_up_error">
                  Email address is already in use
                </div>
              )}
            {errors.length > 0 && errors.includes("Invalid email address") && (
              <div className="sign_up_error">Invalid email address</div>
            )}
          </div>
          <div className="sign_up_inputs_div">
            <input
              type="text"
              name="firstName"
              onChange={updateFirstName}
              value={firstName}
              placeholder="First name"
              className="sign_up_inputs"
            ></input>
            {errors.length > 0 &&
              errors.includes("Please enter a first name.") && (
                <div className="sign_up_error">Please enter a first name</div>
              )}
          </div>
          <div className="sign_up_inputs_div">
            <input
              type="text"
              name="lastName"
              onChange={updateLastName}
              value={lastName}
              placeholder="Last name"
              className="sign_up_inputs"
            ></input>
            {errors.length > 0 &&
              errors.includes("Please enter a last name") && (
                <div className="sign_up_error">Please enter a last name</div>
              )}
          </div>
          <div className="sign_up_inputs_div">
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              placeholder="Password"
              className="sign_up_inputs"
            ></input>
            {errors.length > 0 &&
              errors.includes("Please enter a password") && (
                <div className="sign_up_error">Please enter a password</div>
              )}
            {errors.length > 0 &&
              errors.includes("Password must include at least one number") && (
                <div className="sign_up_error">
                  Password must include at least one number
                </div>
              )}
            {errors.length > 0 &&
              errors.includes("Password must be longer than 7 characters.") && (
                <div className="sign_up_error">
                  Password must be longer than 7 characters
                </div>
              )}
          </div>
          <div className="sign_up_inputs_div">
            <button className="sign_up_button_form" type="submit">
              Sign Up
            </button>
          </div>
        </div>
        {/* <div className='sign_up_error'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div> */}
        <div className="sign_up_bottom_div">
          <div>Already have an account?</div>
          <div>
            <NavLink className="log_in_free_text" exact to="/login">
              &nbsp;Log in
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
