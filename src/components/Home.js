import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <article className="home">
      <h1>
        A collective list of public APIs for use in software and web development.
      </h1>
      <nav className="home-links" aria-label="Home page links">
        <Link to={'/godlist'} aria-label="Go to API Godlist">API Godlist</Link>
        <Link to={'/categories'} aria-label="Go to Categories">Categories</Link>
      </nav>
    </article>
  );
}

export default Home;
