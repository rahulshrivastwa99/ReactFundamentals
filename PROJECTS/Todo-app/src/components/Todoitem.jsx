import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className="container">
      <div className="row sec-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger apna-button"
            onClick={onDelete}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
