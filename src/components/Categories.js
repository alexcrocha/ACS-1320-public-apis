import React, { useState, useEffect } from "react";
import CategoriesCard from "./CategoriesCard";


function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch("https://api.publicapis.org/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesList(data.categories);
      });
  }, []);
  console.log(categoriesList)

  return (
    <div>
      {categoriesList.map((api) => {
        return (
          <CategoriesCard key={api} api={api} />
        );
      })}
    </div>
  );
}

export default Categories;