import React from "react";
import "./Search.css";

function Search({ searchInput, setSearchInput }) {
  return (
    <section className="search" role="search">
      <label htmlFor="search-input" className="sr-only">Search</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        aria-label="Search API"
      />
    </section>
  );
}

export default Search;
