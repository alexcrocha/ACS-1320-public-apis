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

    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="categories">
      {categories.map((category) => {
        return (
          <CategoriesCard key={category[0]} category={category[0]} count={category[1]} />
        );
      })}
      </div>
    </>
  );
}

export default Categories;