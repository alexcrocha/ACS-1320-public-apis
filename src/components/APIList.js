import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APICard from "./APICard";


function APIList() {
  const [apiList, setApiList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((response) => response.json())
      .then((data) => {
        setApiList(data.entries);
      });
  }, []);

  const filteredList = category ? apiList.filter((api) => {
    return api.Category === category;
  }) : apiList;

  return (
    <div>
      {filteredList.map((api) => {
        return (
          <APICard key={api.Link} api={api} />
        );
      })}
    </div>
  );
}

export default APIList;