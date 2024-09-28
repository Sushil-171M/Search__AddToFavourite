import React from "react";

const FavouriteList = ({ favItems }) => {
  return (
    <div>
      <h2> Favourite List </h2>
      {favItems.length > 0 &&
        favItems.map((favFood) => {
          return (
            <div key={favFood.id}>
              <li style={{ border: "10px solid grey", margin: "3px" }}>
                {" "}
                {favFood.foodName}{" "}
              </li>
            </div>
          );
        })}
    </div>
  );
};

export default FavouriteList;
