import { useSelector } from "react-redux";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoCard from "./components/TodoCard";

function App() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div className="todo-list">
      <Header />
      <TodoForm />
      <hr />
      <div className="todo-cards">
        {todoList.map((listItem) => {
          return <TodoCard content={listItem} key={listItem.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
