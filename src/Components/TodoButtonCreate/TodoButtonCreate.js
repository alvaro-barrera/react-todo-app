import React from 'react';
import './TodoButtonCreate.css';

function TodoButtonCreate(props) {
  const handleClick = () => {
    props.setOpenModal(prevState => !prevState);

  };
  
  return (
    <button
      className="TodoButtonCreate"
      onClick={() => handleClick()}
    >
      +
    </button>
  );
}

export { TodoButtonCreate };