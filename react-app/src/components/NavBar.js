import { useSelector } from 'react-redux';
import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LoginForm from './auth/LoginForm'
import SignUpForm from './auth/SignUpForm'
import LogoutButton from './auth/LogoutButton';
import { Modal } from '../context/Modal'
import "./NavBar.css";

const NavBar = ({ modalToggle }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState("login")
  const history = useHistory();

  const showForm = (e) => {
    setForm(e.target.value);
    setShowModal(true)
  }

  const onClose = () => {
    setShowModal(false);
    setForm("");
    history.push("/");
  };

  if (modalToggle) {
    setShowModal(true);
  }
  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <div className='logo-container'>
            <NavLink id="logo-nav-link" to="/" exact={true} activeClassName="active">
              <div>
                LPlaceholder
              </div>
            </NavLink>
          </div>

          <div className='navlinks-container'>
              <NavLink to="/" exact={true} activeClassName="active">
                <span id="home-button" className="nav-links">
                  Home
                </span>
              </NavLink>
              <NavLink to="/search/anime" exact={true} activeClassName="active">
                <span id="browse-button" className="nav-links">
                  Browse
                </span>
              </NavLink>
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
                    className="nav-button"
                    onClick={showForm}
                    value="signup"
                  >
                    Sign Up
                  </button>

              </div>
            )}
            {sessionUser ? (
                  <LogoutButton />
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
