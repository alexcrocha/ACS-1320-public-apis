import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <p>
        A collective list of public APIs for use in software and web development.
      </p>
      <section className="home-links">
        <Link to={'/godlist'}>APIs Godlist</Link>
        <Link to={'/categories'}>Categories</Link>
      </section>
    </div>
  );
}

export default Home;