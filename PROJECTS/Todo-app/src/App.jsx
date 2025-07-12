import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import MultipleItems from "./components/MultipleItems";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "BuyMilk",
      dueDate: "11/07/2025",
    },
    {
      name: "BuyCoffee",
      dueDate: "12/07/2025",
    },
    {
      name: "BuyTea",
      dueDate: "13/07/2025",
    },
  ]);

  const addTodo = (name, dueDate) => {
    const newTodo = { name, dueDate };
    setTodoItems((prevItems) => [...prevItems, newTodo]);
  };

  return (
    <div
      className="todo-container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <AppName />
      <AddTodo addTodo={addTodo} />
      <MultipleItems todoitems={todoItems} />
    </div>
  );
}

export default App;
