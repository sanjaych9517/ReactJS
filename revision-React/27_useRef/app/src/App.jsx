import React, { useRef } from "react";

const App = () => {
  const divRef = useRef();

  const handleClick = () => {
    // inputRef.current.focus()
    divRef.current.style.backgroundColor = "blue";
    divRef.current.style.borderRadius = "50%";
    divRef.current.click();
  };

  return (
    <div>
      <div
        onClick={() => {
          console.log("div par click hua");
        }}
        ref={divRef}
        className="h-50 w-50 bg-red-600"
      ></div>
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

export default App;
