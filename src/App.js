import React from "react";
import { TodoCounter } from "./todo/TodoCounter";
import "./App.css";
import { TodoSearch } from "./todo/TodoSearch";
import { TodoList } from "./todo/TodoList";
import { TodoItem } from "./todo/TodoItem";

const todos = [{ text: "Call with team", completed: false }];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
