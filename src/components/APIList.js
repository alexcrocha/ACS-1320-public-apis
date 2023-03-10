import React, { useState } from "react";
import { useParams } from "react-router-dom";
import APICard from "./APICard";
import Search from "./Search";
import "./APIList.css";


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
    <section>
      <header className="apilist-header">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <h2>{category ? category : "API Godlist"}</h2>
      </header>
      <main className="apilist-main">
      {filteredList.map((api) => {
        return (
          <APICard key={api.Link} api={api} />
        );
      })}
      </main>
    </section>
  );
}

export default APIList;