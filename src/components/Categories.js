import React, { useState } from "react";
import CategoriesCard from "./CategoriesCard";
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
    <article className="flex-grow flex flex-col px-4 md:px-8 pt-8">
      <header className="categories-header mb-8 flex items-center justify-center flex-col">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} aria-label="Search categories" />
        <h2 className="text-3xl font-bold mt-8 text-center">Categories</h2>
      </header>
      <main className="categories-main flex flex-wrap -mx-2 justify-center items-center" role="list" aria-live="polite" aria-relevant="additions removals">
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
