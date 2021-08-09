import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LoginForm from './auth/LoginForm'
import SignUpForm from './auth/SignUpForm'
import { Modal } from '../context/Modal'
import * as sessionActions from "../store/session"
import "./NavBar.css";

const NavBar = ({ modalToggle }) => {

  const sessionUser = useSelector((state) => state.session.user);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState("login")

  const dispatch = useDispatch();

  const showForm = (e) => {
    setForm(e.target.value);
    setShowModal(true)
  }

  const onClose = () => {
    setShowModal(false);
    setForm("");
  };

  if (modalToggle) {
    setShowModal(true);
  }

  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <div className='logo-container'>
            <NavLink id="logo-nav-link" to="/" exact={true} style={{ textDecoration: 'none' }}>
              <div className='logo-container'>
                <img className='logo' src='https://i.imgur.com/Jeafssy.jpg' />
              </div>
            </NavLink>
          </div>

          <div className='navlinks-container'>
            <NavLink to="/" exact={true} style={{ textDecoration: 'none' }} activeClassName="active">
              <span id="home-button" className="nav-links">
                Home
              </span>
            </NavLink>
            <NavLink to="/search/anime" exact={true} style={{ textDecoration: 'none' }} activeClassName="active">
              <span id="browse-button" className="nav-links">
                Browse
              </span>
            </NavLink>

            {sessionUser ?
              <NavLink to={`/user/${sessionUser.username}/list`} exact={true} style={{ textDecoration: 'none' }} activeClassName="active">
                <span id="browse-button" className="nav-links">
                  My Log
                </span>
              </NavLink> : null}

          </div>

          {sessionUser ? null : (
            <div className='login-signup-container'>
              <button
                id="login-button"
                className="nav-button"
                onClick={showForm}
                value="login"
              >
                Login
              </button>

              <button
                id="signup-button"
                className="nav-button signup-button"
                onClick={showForm}
                value="signup"
              >
                Sign Up
              </button>

            </div>
          )}
          {sessionUser ? (
            <div className='icon-logout-holder'>
              <img src='https://i.imgur.com/HnMCw1S.png' className='profile-icon' />
              <button
                id="login-button"
                className="nav-button logout-button"
                onClick={(e) => dispatch(sessionActions.logout())}
              >
                Log out
              </button>
            </div>
          ) : null}
        </div>
      </nav>
      {showModal === true && form === "login" && (
        <Modal onClose={onClose}>
          <LoginForm setForm={setForm} setShowModal={setShowModal} />
        </Modal>
      )}
      {showModal === true && form === "signup" && (
        <Modal onClose={onClose}>
          <SignUpForm showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default NavBar;
