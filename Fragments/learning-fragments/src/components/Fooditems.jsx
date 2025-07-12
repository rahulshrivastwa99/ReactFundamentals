import Item from "./Item";

const Fooditems = () => {
  let foodItems = [
    "Dal",
    "Rice",
    "Chicken",
    "Fish",
    "Bread",
    "Cake",
    "Ice Cream",
  ];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} item={item} />
      ))}
    </ul>
  );
};

export default Fooditems;
