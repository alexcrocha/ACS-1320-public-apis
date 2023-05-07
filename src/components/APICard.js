import React from "react";
import "./APICard.css";


function APICard({ api }) {
  return (
    <section className="apicard" role="listitem">
      <h2>{api.API}</h2>
      <p>{api.Description}</p>
      <p><small>Auth: {api.Auth}</small></p>
      <p><small>{api.Category}</small></p>
      <a href={api.Link} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${api.API} API`}>Go to API</a>
    </section>
  )
}

export default APICard;
