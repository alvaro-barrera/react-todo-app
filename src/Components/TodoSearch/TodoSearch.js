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
      <div className="Search">
        <input 
         onChange={onChangeSearch}
         className=""
         type="search"
         placeholder="Search"
         value={searchValue}/>
        <i class='bx bx-search-alt'></i>
      </div>
    </React.Fragment>
  );
}

export { TodoSearch };
