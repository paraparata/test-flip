import React from "react";

import TextField from "./shared/TextField";
import Icon from "./shared/Icon";

import icons from "../assets/iconList";

// Detect device width
const mobileView = window.screen.width < 600;

// Search icon component
const SearchIcon = (
  <Icon icon={icons.search} color="#b4b4b4" size={mobileView ? "16" : "22"} />
);

function Search({ placeholder, onChange }) {
  const handleSearch = (e) => {
    onChange(e);
  };

  return (
    <TextField
      placeholder={placeholder}
      prefix={SearchIcon}
      onChange={(e) => handleSearch(e)}
    />
  );
}

export default Search;
