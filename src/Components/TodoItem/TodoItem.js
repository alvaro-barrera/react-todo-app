import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem__li">
      <span
        onClick={props.onComplete}
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
        onClick={props.onDelete}
        className="TodoItem__icon TodoItem__icon-delete"
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };