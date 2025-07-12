import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMsg from "./components/ErrorMsg";

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

  // let emptyMessage =
  //   foodItems.length === 0 ? <h3> I am still Hungry</h3> : null;

  // if (foodItems.length === 0) {
  //   return <h3> No food items available</h3>;
  // }

  return (
    <React.Fragment>
      {/* //OR WHEN AN USE <></> */}
      {/* dont use extra div in app use react fragments for removing extra div */}
      <h1>Healthy Food</h1>
      {/* {emptyMessage} */}
      {/* {foodItems.length === 0 ? <h3> I am still Hungry</h3> : null} */}
      {/* {foodItems.length === 0 && <h3> I am still Hungry</h3>} */}
      <ErrorMsg items={foodItems} />
      <Fooditems foodItems={foodItems}></Fooditems>
    </React.Fragment>
  );
}

export default App;
