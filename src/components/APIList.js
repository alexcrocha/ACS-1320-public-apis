import React, { useState, useEffect } from "react";
import APICard from "./APICard";


function APIList() {
  const [apiList, setApiList] = useState([]);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((response) => response.json())
      .then((data) => {
        setApiList(data.entries);
      });
  }, []);
  console.log(apiList)

  return (
    <div>
      {apiList.map((api) => {
        return (
          <APICard key={api.Link} api={api} />
        );
      })}
    </div>
  );
}

export default APIList;