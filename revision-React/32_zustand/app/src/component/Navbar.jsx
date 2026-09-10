import React from "react";
import useMyStore from "../store";

const Navbar = () => {
  const state = useMyStore();
  console.log(state);
  const handleClick = () => {
    state.increment();
  };

  const handleNameClick = () => {
    state.capitalizeName();
  };

  return (
    <div>
      <p>{state.name}</p>
      <p>{state.count}</p>
      <button onClick={handleClick}>increment</button> <br /> <br />
      <button onClick={handleNameClick}>capitilize</button>
    </div>
  );
};

export default Navbar;
