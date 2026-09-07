import { useState } from "react";
import "./App.css";
import Basic from "./notes/Basic";
import MultipleInput from "./notes/MultipleInput";

function App() {
  const [state, setState] = useState("");
  console.log(state);
  return (
    // <div>
    //   <input
    //     type="text"
    //     placeholder="enter name"
    //     value={state}
    //     onChange={(e) => {
    //       setState(e.target.value);
    //     }}
    //   />{" "}
    //   <br />
    //   <br />
    //   <button onClick={() => setState("")}>reset</button>
    //   <h1>{state}</h1>
    // </div>

  //  <Basic />

   <MultipleInput />
  );
}

export default App;
