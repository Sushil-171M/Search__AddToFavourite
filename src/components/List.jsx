import React, { useCallback, useEffect, useState } from "react";
import { FoodList } from "./FoodList";
import Search from "./Search";
const List = ({ addToFavList }) => {
  const [item, setItem] = useState(FoodList);
  const [searchValue, setSearchValue] = useState("");
  const handleSearchItem = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      let arr = item.filter((item) => item.foodName.includes(searchValue));
      setItem(arr);
    } else {
      setItem(FoodList);
    }
  }, [searchValue]);

  const addToFavourites = (food) => {
    addToFavList(food);
  };

  const foodList = () =>
    item.map((food) => (
      <li style={{ border: "10px solid grey", margin: "3px" }} key={food.id}>
        {food.foodName}
        <button
          type="button"
          onClick={() => addToFavourites(food)}
          style={{ display: "inline-block", marginLeft: "100px" }}
        >
          Add to Favourites
        </button>
      </li>
    ));

  return (
    <>
      <div>
        <Search handleSearch={handleSearchItem} />
      </div>
      <div>
        <ul>{foodList()}</ul>
      </div>
    </>
  );
};

export default List;
