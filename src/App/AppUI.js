import React from "react";

import { TodoList } from "../Components/TodoList/TodoList";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { TodoContext } from "../Context/TodoContext/index";
import { Modal } from "../Modal";
import { TodoButtonCreate } from "../Components/TodoButtonCreate/TodoButtonCreate";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoHeader } from "../Components/TodoHeader/TodoHeader";

function AppUI() {
  const {
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoHeader />
      <TodoList>
        {loading && !searchedTodos.length && <p>¡Todo está listo!</p>}
        {searchedTodos.map((todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoButtonCreate setOpenModal={setOpenModal}></TodoButtonCreate>
    </React.Fragment>
  );
}

export { AppUI };
