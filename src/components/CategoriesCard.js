import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesCard.css";

function CategoriesCard({ api }) {
  return (
    <div className="categoriescard">
      <Link to={api}>{api}</Link>
    </div>
  );
}

export default CategoriesCard;