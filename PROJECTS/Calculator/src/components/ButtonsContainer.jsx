import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "9",
    "8",
    "/",
    "7",
    "6",
    "*",
    "5",
    "4",
    "-",
    "3",
    "2",
    "+",
    "1",
    "=",
    "0",
    ".",
  ];

  return (
    <div className="buttonContainer">
      {buttonNames.map((buttonNames) => (
        <button key={buttonNames} className={styles.button}>
          {buttonNames}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
