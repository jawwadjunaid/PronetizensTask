import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";

export default function Nav(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto ">
                {/* <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    hover="mouse"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Engineering Services{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Solution/Platforms{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Emerging Technologies{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Industries{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Engagement Modals{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Consultation{" "}
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/about">
                    about
                  </Link>
                </li>
                {/* <li className="nav-item mx-2">
                  <a className="nav-link" href="/">
                    Podcasts
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="/">
                    Careers
                  </a>
                </li> */}
                {/* <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    data-bs-toggle="dropdown"
                  >
                    Resources
                  </a>
                  <ul className=" dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Block{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        News{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        Media{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        DevCommunity{" "}
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="nav-item mx-2" >
                  <a className="nav-link-underline-primary" style={{color: 'blue', }} href="/">
                    +44 7599 476514
                  </a>
                </li> */}
                <a
                  className="btn btn-black mx-2"
                  onClick={handlePopupToggle}
                  style={{
                    backgroundColor:
                      props.mode === "dark" ? "#212529" : "#0b5ed7",
                    color: props.mode === "dark" ? "white" : "white",
                    border: "1px solid white",
                  }}
                  href="#"
                  role="button"
                >
                  Contact Us
                </a>
                <Popup show={showPopup} onClose={handlePopupToggle}></Popup>
                <div
                  className={`form-check form-switch text-${
                    props.mode === "light" ? "dark" : "light"
                  } mx-5`}
                >
                  <input
                    className="form-check-input"
                    onClick={props.toggleMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    DarkMode
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

Nav.propTypes = {
  title: PropTypes.string,
};
