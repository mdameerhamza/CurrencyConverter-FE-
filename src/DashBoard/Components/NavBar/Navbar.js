import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        padding: 0,
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <div className="container-fluid" style={{ height: "10vh" }}>
        <div
          className="navbar-brand fw-bolder"
        >
          Currancy Converter
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white" />
        </button>
        
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link-home">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                About Us
              </Link>
            </li>
            <Outlet />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
