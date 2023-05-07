import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesCard.css";

function CategoriesCard({ category, count }) {
  return (
    <section role="listitem" aria-label={`${category} category with ${count} APIs`} >
      <Link to={category} className="categoriescard">
        {category}
        <p><small>{count} APIs</small></p>
      </Link>
    </section>
  );
}

export default CategoriesCard;
