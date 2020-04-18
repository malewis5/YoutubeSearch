import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSearchSubmit(searchInput);
    setSearchInput("");
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
