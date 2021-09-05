import React from "react";
import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter__subtitle">
      Completed {completed} of {total} items
    </h2>
  );
}

export { TodoCounter };
