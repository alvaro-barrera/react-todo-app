import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");
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
      <p>{searchValue}</p>
    </React.Fragment>
  );
}

export { TodoSearch };
