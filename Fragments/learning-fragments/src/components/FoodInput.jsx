import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handledOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Here"
      className={styles.FoodInput}
      onChange={handledOnChange}
    />
  );
};

export default FoodInput;
