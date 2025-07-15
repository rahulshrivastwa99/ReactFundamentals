import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ addTodo }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    if (name.trim() === "" || dueDate === "") {
      alert("Please enter both todo name and due date");
      return;
    }
    addTodo(name, dueDate);
    setName("");
    setDueDate("");
  };

  return (
    <div>
      <div className="row sec-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success apna-button"
            onClick={handleAdd}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
