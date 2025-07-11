import "./App.css";
import ClockHeading from "./components/clockheading";
import ClockSlogan from "./components/Clockslogan";
import CurrenTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      {" "}
      <ClockHeading />
      <ClockSlogan />
      <CurrenTime />
    </center>
  );
}

export default App;
