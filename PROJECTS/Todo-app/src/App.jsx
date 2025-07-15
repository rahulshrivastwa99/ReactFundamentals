import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import MultipleItems from "./components/MultipleItems";
import "./App.css";

function App() {
  const initialtodoItems = [];

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const addTodo = (name, dueDate) => {
    const newTodo = { name, dueDate };
    setTodoItems((prevItems) => [...prevItems, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodoItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div
      className="container"
      style={{
        border: "2px solid #007bff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <div
        className="todo-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppName />
        <AddTodo addTodo={addTodo} />
        <MultipleItems todoitems={todoItems} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
