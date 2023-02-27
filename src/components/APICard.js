import React from "react";
import "./APICard.css";


function APICard({ api }) {
  return (
    <div className="apicard">
      <h2>{api.API}</h2>
      <p>{api.Description}</p>
      <p><small>{api.Category}</small></p>
      <a href={api.Link} target="_blank">Go to API</a>
    </div>
  )
}

export default APICard;