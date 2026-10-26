import { useEffect, useState } from "react";
import Alpha from "./componients/Alpha";

function App() {
  const [count, setCount] = useState(0);
  
  const [obj, setObj] = useState({
    name: "Sanjay",
  });

  useEffect(() => {
    console.log("Parent Re-rendering....");
  });

  // primetive Data type - Number String Undefiend Boolean Number

  // reference Type - Array, Boject, Functionn

  return (
    <div className=" mt-30 gap-5 flex  items-center justify-center flex-col">
      <Alpha data={obj} />

      <input
        type="text"
        placeholder="Enter your name"
        value={obj.name}
        onChange={(e) => setObj({...name,name: e.target.value})}
      />

      <button
        className="px-4 py-2 bg-gray-300  text-red-400 rounded-xl "
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count : {count}
      </button>
    </div>
  );
}

export default App;
