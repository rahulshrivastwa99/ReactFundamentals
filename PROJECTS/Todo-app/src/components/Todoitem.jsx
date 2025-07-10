function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = "11-07-2025";

  return (
    <div class="container">
      <div class="row sec-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger apna-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
