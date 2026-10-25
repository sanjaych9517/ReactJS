import { useEffect, useState } from "react";
import Alpha from "./components/Alpha";
import Form from "./components/Form";
import Users from "./components/Users";
function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <center className="my-20 bg-gray-300 text-5xl border-4">
      {/* {toggle && <Alpha />} */}
      {/* {toggle && <Form />} */}
      {toggle && <Users />}
      <button
        onClick={() => setToggle(!toggle)}
        className="mt-10 bg-red-500 rounded-3xl px-5 py-3 mb-5"
      >
        Toggle
      </button>
      <br />
      <br />
      {/* <h2 className="my-10">{data}</h2>
      <button
        onClick={() => setData(data-1)}
        className="mt-10 bg-red-500 rounded-3xl px-5 py-3 mb-5"
      >
        Decrement
      </button> */}
    </center>
  );
}

export default App;
