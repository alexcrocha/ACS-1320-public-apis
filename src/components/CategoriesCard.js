import React from "react";
import { Link } from "react-router-dom";

function CategoriesCard({ category, count }) {
  return (
    <section className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4" role="listitem" aria-label={`${category} category with ${count} APIs`}>
      <Link to={category} className="block py-6 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 h-24 flex items-center">
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-bold">{category}</span>
          <span className="text-sm text-gray-400">{count} APIs</span>
        </div>
      </Link>
    </section>
  );
}

export default CategoriesCard;
