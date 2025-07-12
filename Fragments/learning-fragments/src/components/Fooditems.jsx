import Item from "./Item";

const Fooditems = ({ foodItems }) => {
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} item={item} />
      ))}
    </ul>
  );
};

export default Fooditems;
