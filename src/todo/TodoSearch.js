import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onChangeSearch = (event) => {
    console.log(event);
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        onChange={onChangeSearch}
        className="TodoSearch__search"
        type="text"
        placeholder="Search"
        value={searchValue}
      />
    </React.Fragment>
  );
}

export { TodoSearch };
