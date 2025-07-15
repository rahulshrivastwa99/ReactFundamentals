import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = [
    "Dal",
    "Rice",
    "Chicken",
    "Fish",
    "Bread",
    "Cake",
    "Ice Cream",
  ];

  let [textToShow, setTextState] = useState("Food Item enterd by user");

  console.log(`Current Value of textState: ${textToShow}`);

  const handledOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  // let emptyMessage =
  //   foodItems.length === 0 ? <h3> I am still Hungry</h3> : null;

  // if (foodItems.length === 0) {
  //   return <h3> No food items available</h3>;
  // }

  return (
    <div>
      {" "}
      <Container>
        {/* //OR WHEN AN USE <></> */}
        {/* dont use extra div in app use react fragments for removing extra div */}
        <h1 className="FOOD">Healthy Food</h1>
        {/* {emptyMessage} */}
        {/* {foodItems.length === 0 ? <h3> I am still Hungry</h3> : null} */}
        {/* {foodItems.length === 0 && <h3> I am still Hungry</h3>} */}
        <ErrorMsg items={foodItems} />
        <FoodInput handledOnChange={handledOnChange}></FoodInput>
        <p>{textToShow}</p>
        <Fooditems foodItems={foodItems}></Fooditems>
      </Container>
      {/* <Container>
        <p>Look at above Container </p>
        <p>Look at above Container </p>
      </Container> */}
    </div>
  );
}

export default App;
