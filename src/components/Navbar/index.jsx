import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-transparent p-3">
      <Link className="navbar-brand" to="/">
        Movie Trailers
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${show && "show mini-navbar"}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movie">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movie/UaVTIH8mujA">
              Selected Movie of The Month: 'God Father'
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
