import React from "react";
import "./APICard.css";


function APICard({ api }) {
  return (
    <div className="apicard">
      <h2>{api.API}</h2>
      <p>{api.Description}</p>
      <p>{api.Link}</p>
      <p>{api.Category}</p>
    </div>
  )
}

export default APICard;