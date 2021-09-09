import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../Context/TodoContext/index";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter__subtitle">
      Completed {completedTodos} of {totalTodos} items
    </h2>
  );
}

export { TodoCounter };
