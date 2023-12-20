import React from "react";
import "./style.css";

const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    🔍
    <input
      type="text"
      placeholder="Randomizer"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;