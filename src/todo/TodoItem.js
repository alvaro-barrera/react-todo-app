import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const handleComplete = () => {
    alert(`Todo completed: ${props.text}`);
  };

  const handleDelete = () => {
    alert(`Todo deleted: ${props.text}`);
  };

  return (
    <li className="TodoItem__li">
      <span
        onClick={handleComplete}
        className={`TodoItem__icon TodoItem__icon-check ${
          props.completed && "TodoItem__icon-check--active"
        }`}
      >
        √
      </span>
      <p
        className={`TodoItem__p ${props.completed && "TodoItem__p--complete"}`}
      >
        {props.text}
      </p>
      <span
        onClick={handleDelete}
        className="TodoItem__icon TodoItem__icon-delete"
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
