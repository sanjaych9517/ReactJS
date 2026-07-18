import ClockHeading from "./components/ClockHeading";
import ClockSlogon from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTiime";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogon></ClockSlogon>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
