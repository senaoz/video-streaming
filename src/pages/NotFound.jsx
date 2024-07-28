import React from "react";

const NotFound = () => {
  return (
    <div
      className="container text-center vh-100 d-flex justify-content-center align-items-center
    "
    >
      <div>
        <h1 className="display-1">404</h1>
        <p className="lead">Page Not Found</p>
        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
