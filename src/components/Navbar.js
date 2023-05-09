import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeLinkClass = "border-b-2 border-white";

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full bg-gray-800 p-4 md:flex md:justify-between md:items-center ${isScrolled ? "md:bg-gray-900" : ""}`}
      aria-label="Main navigation"
    >
      <h3
        className={`text-center md:text-left text-xl md:text-2xl font-bold w-full md:w-auto ${isScrolled ? "hidden md:block" : "block"}`}
      >
        <Link to={"/"}>PUBLIC APIs</Link>
      </h3>
      <section className="navbar-links flex justify-center md:justify-end space-x-4 md:space-x-8 font-bold">
        <Link to={"/"} aria-label="Go to Home" className={`${location.pathname === "/" ? activeLinkClass : ""}`}>
          Home
        </Link>
        <Link to={"/godlist"} aria-label="Go to API Godlist" className={`${location.pathname === "/godlist" ? activeLinkClass : ""}`}>
          Godlist
        </Link>
        <Link to={"/categories"} aria-label="Go to Categories" className={`${location.pathname === "/categories" ? activeLinkClass : ""}`}>
          Categories
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
