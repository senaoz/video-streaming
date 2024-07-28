import React from "react";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3">
      <a className="navbar-brand" href="#">
        Movie Trailers
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movie">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movie/UaVTIH8mujA">
              Selected Movie of The Month: 'God Father'
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
