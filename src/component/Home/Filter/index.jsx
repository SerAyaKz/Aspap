import React, { useState } from "react";
import { CheckboxProton, SearchBar } from "../";
import "./style.css";

const FilterPanel = ({
  searchInput,
  setSearchInput,
  cover,
  changeCheckedCover,
  handleToggleAll,
  coverCheckedAll,
}) => {
  const [coverDropdownOpen, setCoverDropdownOpen] = useState(false);

  const toggleCoverDropdown = () => {
    setCoverDropdownOpen(!coverDropdownOpen);
  };

  return (
    <div>
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      {/*Type*/}
      <div className="input-group">
        <div className="label" onClick={toggleCoverDropdown}>
          Cover
        </div>
        {coverDropdownOpen && (
          <div className="checkbox-container">
            {cover.map((cover) => (
              <CheckboxProton
                key={cover.id}
                id={cover.id}
                name={cover.name}
                checked={cover.checked}
                changeChecked={changeCheckedCover}
              />
            ))}
          </div>
        )}
        <div className="label" onClick={(e) => handleToggleAll()}>
          {coverCheckedAll ? "Uncover All" : "Cover All"}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
