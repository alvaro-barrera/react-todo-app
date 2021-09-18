import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`TodoItem__li ${props.completed && "TodoItem__li--complete"}`}>
      <span
        onClick={props.onComplete}
        className={`TodoItem__icon TodoItem__icon-check ${
          props.completed && "TodoItem__icon-check--active"
        }`}
      >
        <i className='bx bx-badge-check'></i>
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
        <i class='bx bx-trash'></i>
      </span>
    </li>
  );
}

export { TodoItem };
