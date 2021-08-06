import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
// import Logo from "../Logo/Logo";

const SignUpForm = ({ showModal, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    return () => {
      if (!showModal) {
        setShowModal(true);
      }
    };
  }, [showModal, setShowModal]);

  const onSignUp = async(e) => {
    e.preventDefault();
    const data = await dispatch(signUp(username, email, password, repeatPassword))
    if (data) {
      setErrors(data);
    } else {
      setShowModal(false);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form id="signup-form" onSubmit={onSignUp}>
      <div id="signup-form-title">Sign up to access features!</div>

      {errors && errors.length > 0 ? (
        <div className='review-errors-div'>
          <a className='review-error'>Oops!</a>
          {errors.map((error, ind) => (
            <a key={ind} className='review-error'>{error}</a>
          ))}
        </div>
      ) : null}

      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div id="signup-button-div" onClick={(e) => onSignUp(e)}>
        Sign Up
      </div>
    </form>
  );
};

export default SignUpForm;
