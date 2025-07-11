import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <>
      {/* //OR WHEN AN USE <React.Fragment></React.Fragment> */}
      {/* dont use extra div in app use react fragments for removing extra div */}
      <h1>Healthy Food</h1>
      {/* {emptyMessage} */}
      {/* {foodItems.length === 0 ? <h3> I am still Hungry</h3> : null} */}
      {foodItems.length === 0 && <h3> I am still Hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
