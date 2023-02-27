import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesCard.css";

function CategoriesCard({ category, count }) {
  return (
    <Link className="categoriescard" to={category}>{category}
      <p><small>{count} APIs</small></p>
    </Link>
  );
}

export default CategoriesCard;