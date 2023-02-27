import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APICard from "./APICard";
import "./APIList.css";


function APIList({ apiList }) {
  const { category } = useParams();


  const filteredList = category ? apiList.filter((api) => {
    return api.Category === category;
  }) : apiList;

  return (
    <div className="apilist">
      {filteredList.map((api) => {
        return (
          <APICard key={api.Link} api={api} />
        );
      })}
    </div>
  );
}

export default APIList;