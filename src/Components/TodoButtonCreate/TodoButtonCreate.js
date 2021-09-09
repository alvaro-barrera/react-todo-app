import React from 'react';
import './CreateTodoButton.css';

function TodoButtonCreate(props) {
  const handleClick = (msg) => {
    alert(msg);
  };
  
  return (
    <button
      className="TodoButtonCreate"
      onClick={() => handleClick('Modal open')}
    >
      +
    </button>
  );
}

export { TodoButtonCreate };