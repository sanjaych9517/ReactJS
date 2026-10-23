import { useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState({
    name: "Sanjay",
    age: 22,
    city: "Basti",
    profession: "Learning",
  });
function infoChange() {
  setInfo((prev) => ({ ...prev, age: 40 }));
}
  return (
    <>
      <center>
        <h2>
          my name is {info.name} <br /> and my age is {info.age} <br /> I also
          belongs from {info.city} <br />
          and my profession is {info.profession}
        </h2>
        
        {/* <button
          onClick={() => {
            setInfo((prev) => ({ ...prev, name: "kapoor" }));
          }}
        >
          changeInfo
        </button> */}
        <button onClick={infoChange}>changeInfo</button>
      </center>
    </>
  );
}

export default App;
