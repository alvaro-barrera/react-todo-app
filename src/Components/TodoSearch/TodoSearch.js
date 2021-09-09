import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../Context/TodoContext/index";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
