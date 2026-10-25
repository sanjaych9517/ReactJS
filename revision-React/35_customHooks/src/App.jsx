import React, { useState } from "react";
import { useCounter } from "./customHook/useCounter";
import Alpha from "./comonents/Alpha"
import { useCardlook } from "./customHook/useCardLook";

const App = () => {
  const { count, increment, decrement, setByValue } = useCounter(0);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
   
 const AlphaWithCardLook = useCardlook(Alpha)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input
        type="number"
        placeholder="enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={function () {
          setByValue(inputValue);
        }}
      >
        SetValue
      </button>

<AlphaWithCardLook  user="Sanjay kumar " />

    </div>
  );
};

export default App;
