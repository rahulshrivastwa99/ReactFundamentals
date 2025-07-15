import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
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

  const getButtonClass = (buttonName) => {
    if (buttonName === "C") return styles.clearButton;
    if (buttonName === "=") return styles.equalsButton;
    if (["/", "*", "-", "+"].includes(buttonName)) return styles.operatorButton;
    return styles.digitButton;
  };

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={`${styles.button} ${getButtonClass(buttonName)}`}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
