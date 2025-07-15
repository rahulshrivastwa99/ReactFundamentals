import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      try {
        // Evaluate the expression safely
        // eslint-disable-next-line no-eval
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      setCalVal((prev) => prev + buttonName);
    }
  };

  return (
    <div className={styles.Calculator}>
      <Display displayvalue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
