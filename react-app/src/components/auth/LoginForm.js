import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../store/session";
// import Logo from "../Logo/Logo";

const LoginForm = ({ setForm, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const onLogin = async (e) => {
    e.preventDefault();

    const data = await dispatch(login(email, password));

    if (data) {
      setErrors(data);
    } else {
      setShowModal(false);
    }
  };

  const demoLogin = (e) => {
    setEmail("demo@aa.io")
    setPassword("password")

    dispatch(login(email, password))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form id="login-form" onSubmit={onLogin}>
      <div id="login-form-title">
        Welcome Back!
      </div>
      {errors && errors.length > 0 ? (
        <div className='review-errors-div'>
          <a className='review-error'>Oops!</a>
          {errors.map((error, ind) => (
            <a key={ind} className='review-error'>{error}</a>
          ))}
        </div>
      ) : null}
      <div id="login-email-div">
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div id="login-password-div">
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <p onClick={() => { setForm("signup") }} className='redirect-signup'>
        Don't have an account? Click here to sign up!
      </p>
      <div id="login-button-div" onClick={(e) => onLogin(e)}>
        Login
      </div>
      <div id="demo-button-div" onClick={(e) => demoLogin(e)}>
        Demo
      </div>
    </form>
  );
};

export default LoginForm;
