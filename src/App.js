import React from "react";
import { TodoCounter } from "./todo/TodoCounter";
import "./App.css";
import { TodoSearch } from "./todo/TodoSearch";
import { TodoList } from "./todo/TodoList";
import { TodoItem } from "./todo/TodoItem";

const defaultTodos = [{ text: "Call with team", completed: false },
{text: "Cut papers", completed: true }];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      let todoText = todo.text.toLowerCase();
      let searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
