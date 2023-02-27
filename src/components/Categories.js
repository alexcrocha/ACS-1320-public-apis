import React from "react";
import CategoriesCard from "./CategoriesCard";


function Categories({ apiList, categoriesList }) {
  // count the number of APIs in each category
  const categories = [];
  categoriesList.forEach((category) => {
    let count = 0;
    apiList.forEach((api) => {
      if (api.Category === category) {
        count++;
      }
    });
    categories.push([category, count]);
  });

  return (
    <div>
      {categories.map((category) => {
        return (
          <CategoriesCard key={category[0]} category={category[0]} count={category[1]} />
        );
      })}
    </div>
  );
}

export default Categories;