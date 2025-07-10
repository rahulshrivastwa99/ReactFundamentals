import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/Todoitem";
import TodoItem1 from "./components/Todoitem1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem />
        <TodoItem1 />
      </div>
    </center>
  );
}

export default App;
