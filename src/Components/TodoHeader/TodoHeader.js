import "./TodoHeader.css";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
const TodoHeader = () => {
  return (
    <div className="Header">
      <TodoCounter />
      <TodoSearch />
    </div>
  );
};
export { TodoHeader };
