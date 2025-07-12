const ErrorMsg = () => {
  let foodItems = [
    "Dal",
    "Rice",
    "Chicken",
    "Fish",
    "Bread",
    "Cake",
    "Ice Cream",
  ];

  return <>{foodItems.length === 0 && <h3> I am still Hungry</h3>}</>;
};
export default ErrorMsg;
