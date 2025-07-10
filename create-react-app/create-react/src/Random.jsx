function Random() {
  let number = Math.random() * 10;
  return (
    <h1 style={{ backgroundColor: "#376" }}>
      Random number is: {Math.round(number)}
    </h1> //dynamic content can be written using brackets
  );
}

export default Random;
