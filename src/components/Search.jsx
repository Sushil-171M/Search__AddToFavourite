import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const handleSearchItem = (e) => {
    handleSearch(e);
  };
  return (
    <>
      <label>Search :</label>
      <input
        style={{ margin: "20px" }}
        type="text"
        placeholder="search"
        onChange={handleSearchItem}
      ></input>
    </>
  );
};

export default Search;
