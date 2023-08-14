import React from "react";
import PropTypes from "prop-types";

export default function nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
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
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Podcasts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Careers
                </a>
              </li>
              <li className="nav-item dropdown">
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
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  +44 7599 476514
                </a>
              </li>
              <a className="btn btn-primary" href="/" role="button">
                Contact Us
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

nav.propTypes = {
  title: PropTypes.string,
};
