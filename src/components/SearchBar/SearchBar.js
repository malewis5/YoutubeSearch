import React, { useState } from "react";
import { Input } from "semantic-ui-react";

export const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    props.onSearchSubmit(searchInput);
    setSearchInput("");
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="ui form">
          <Input
            action="Search"
            value={searchInput}
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
