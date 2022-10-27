import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';

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

  return (
    <div className="log_in_main">
      <div className="log_in_image_div">
        <img
          className="log_in_image"
          src="https://images.pexels.com/photos/7165180/pexels-photo-7165180.jpeg"
          alt="login"
        />
      </div>
      <form className="log_in_form" onSubmit={onLogin}>
        <div className="let_going_text">Log in and let's get going</div>
        <div>
          <div className="log_in_inputs_div">
            <input
              name="email"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={updateEmail}
              className="log_in_inputs"
            />
          </div>
          <div className="log_in_inputs_div">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              className="log_in_inputs"
            />
          </div>
          <div className='log_in_inputs_div'>
            <button className="log_in_button_form" type="submit">
              Login
            </button>
          </div>
        </div>
        <div className="log_in_error">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
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
