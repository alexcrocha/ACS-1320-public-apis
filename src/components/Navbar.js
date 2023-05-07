import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <h3><Link to={'/'}>PUBLIC APIs</Link></h3>
      <section className="navbar-links">
        <Link to={'/'} aria-label="Go to Home">Home</Link>
        <Link to={'/godlist'} aria-label="Go to API Godlist">Godlist</Link>
        <Link to={'/categories'} aria-label="Go to Categories">Categories</Link>
      </section>
    </nav>
  );
}

export default Navbar;
