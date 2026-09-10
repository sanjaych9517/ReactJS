import React from "react";
import useMyStore from "../store";

const Navbar = () => {
  const state = useMyStore();
  console.log(state)
const handleClick = () => {
  state.increment();
};

  return (
    <div>
      <p>{state.name}</p>
      <p>{state.count}</p>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};

export default Navbar;
