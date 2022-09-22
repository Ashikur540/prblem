import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countriesData, setCountries] = useState([]);
  useEffect(() => {
    fetch("url")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Total result {countriesData.length}</h1>
    </div>
  );
};

export default Countries;
