import React, { useState, useEffect } from "react";
import CategoriesCard from "./CategoriesCard";


function Categories({ categoriesList }) {

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