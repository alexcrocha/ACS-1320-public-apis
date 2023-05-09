import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <article className="home flex flex-col flex-grow">
      <h1 className="text-center mb-10 pt-16 text-xl md:text-4xl">
        A collective list of Public APIs for use in Software and Web Development
      </h1>
      <nav
        className="home-links flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 flex-grow"
        aria-label="Home page links"
      >
        <Link
          to={"/godlist"}
          aria-label="Go to API Godlist"
          className="block w-full text-center bg-gray-800 text-white rounded-md flex-grow hover:bg-gray-700 border border-gray-700 transition-colors duration-300 text-2xl md:text-4xl"
        >
          <span className="flex items-center justify-center h-full ">API Godlist</span>
        </Link>
        <Link
          to={"/categories"}
          aria-label="Go to Categories"
          className="block w-full text-center bg-gray-800 text-white rounded-md flex-grow hover:bg-gray-700 border border-gray-700 transition-colors duration-300 text-2xl md:text-4xl"
        >
          <span className="flex items-center justify-center h-full ">Categories</span>
        </Link>
      </nav>
    </article>
  );
}

export default Home;
