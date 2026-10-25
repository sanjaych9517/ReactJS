import React, { useEffect, useState } from "react";

const Alpha = () => {
  const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Mounting...");
//   }, [count]);

  useEffect(() => {
    console.log("mount");

return ()=>{
  console.log("unmount ho raha hai")
}
  }, []);
  return (
    <div>
      <h1>Alpha</h1>
      <h2 className="my-10">{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-10 bg-red-500 rounded-3xl px-5 py-3 mb-5"
      >
        Decrement
      </button>
    </div>
  );
};

export default Alpha;
