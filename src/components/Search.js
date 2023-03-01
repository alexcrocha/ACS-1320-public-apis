import React from "react";
import "./Search.css";

function Search({ searchInput, setSearchInput }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;