import React, { useState } from "react";
import CategoriesCard from "./CategoriesCard";
import "./Categories.css";
import Search from "./Search";

function Categories({ apiList, categoriesList }) {
  const [searchInput, setSearchInput] = useState("");

  let categories = [];
  categoriesList.forEach((category) => {
    let count = 0;
    apiList.forEach((api) => {
      if (api.Category === category) {
        count++;
      }
    });
    categories.push([category, count]);
  });

  if (searchInput !== "") {
    categories = categories.filter((category) =>
      category[0].toLowerCase().includes(searchInput.toLowerCase()))
      .map((category) => category);
  }

  return (
    <article>
      <header className="categories-header">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} aria-label="Search categories" />
        <h2>Categories</h2>
      </header>
      <main className="categories-main" role="list" aria-live="polite" aria-relevant="additions removals">
        {categories.map((category) => {
          return (
            <CategoriesCard key={category[0]} category={category[0]} count={category[1]} />
          );
        })}
      </main>
    </article>
  );
}

export default Categories;
