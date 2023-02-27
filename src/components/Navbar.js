import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h3>PUBLIC APIs</h3>
      <section className="navbar-links">
        <Link to={'/'}>Home</Link>
        <Link to={'/categories'}>Categories</Link>
      </section>
    </div>
  );
}

export default Navbar;