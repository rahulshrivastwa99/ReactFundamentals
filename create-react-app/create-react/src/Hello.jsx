function Hello() {
  let myName = "Rahul";
  let number = 107;
  let fullName = () => {
    return "Rahul Shrivastwa";
  };
  return (
    <p>
      My CODE:{number}
      <p>Hello there I am {myName}</p>
      my fullname is {fullName()}
    </p>
  );
}
export default Hello;
