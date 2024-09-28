import React, { useState } from "react";
import FavouriteList from "./FavouriteList";
import List from "./List";
const Parent = () => {
  const [fav, setfav] = useState([]);
  const addToFavList = (food) => {
    let favObj = {
      ...food,
      added: true,
    };
    setfav((prev) => [...prev, favObj]);
  };

  return (
    <div>
      <h1> List of All Items</h1>
      <List addToFavList={addToFavList} />
      <FavouriteList favItems={fav} />
    </div>
  );
};

export default Parent;
