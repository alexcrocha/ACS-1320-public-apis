import React from "react";

function Search({ searchInput, setSearchInput }) {
  return (
    <section className="search bg-gray-900 px-4 md:px-8 py-4 w-full lg:w-2/3">
      <label htmlFor="search-input" className="sr-only">Search</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        className="w-full bg-gray-800 text-gray-100 border-2 border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Search API"
      />
    </section>
  );
}

export default Search;
