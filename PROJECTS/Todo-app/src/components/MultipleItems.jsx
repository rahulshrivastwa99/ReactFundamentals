import TodoItem from "./Todoitem";
import styles from "./MultipleItems.module.css";
const MultipleItems = ({ todoitems, onDelete }) => {
  return (
    <div
      className={styles.itemsContainer}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {todoitems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default MultipleItems;
