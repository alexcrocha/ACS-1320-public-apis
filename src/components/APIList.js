import React, { useState } from "react";
import { useParams } from "react-router-dom";
import APICard from "./APICard";
import Search from "./Search";

function APIList({ apiList }) {
  const { category } = useParams();
  const [searchInput, setSearchInput] = useState("");

  let filteredList = category ? apiList.filter((api) => {
    return api.Category === category;
  }) : apiList;

  filteredList = filteredList.filter((api) =>
    api.API.toLowerCase().includes(searchInput.toLowerCase())
    || api.Description.toLowerCase().includes(searchInput.toLowerCase())
    || api.Auth.toLowerCase().includes(searchInput.toLowerCase())
    || api.Category.toLowerCase().includes(searchInput.toLowerCase()))
    .map((api) => api);

  return (
    <article className="flex-grow flex flex-col px-4 md:px-8 pt-8">
      <header className="categories-header mb-8 flex items-center justify-center flex-col">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} aria-label="Search API" />
        <h2 className="text-3xl font-bold mt-8 text-center">{category ? category : "API Godlist"}</h2>
      </header>
      <main className="categories-main flex flex-wrap -mx-2 justify-center items-center" role="list" aria-live="polite" aria-relevant="additions removals">
        {filteredList.map((api) => {
          return (
            <APICard key={api.Link} api={api} />
          );
        })}
      </main>
    </article>
  );
}

export default APIList;
