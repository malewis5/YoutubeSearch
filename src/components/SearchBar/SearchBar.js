import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.searchFunction(searchInput);
    setSearchInput("");
  };
  return (
    <div className="searchBar">
      <form className="search-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={searchInput}
          placeholder="Search for videos"
          name="video-search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
      <button onClick={onFormSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
