import { useCallback, useState } from "react";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("mkl");
console.log("parent render ...")
  
 const memoizedHandleClick = useCallback(() => {
   console.log("mai click hua hu", count);
 }, [data]);
  return (
    <div className="flex justify-center mt-40 flex-col items-center gap-4">
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 text-2xl border rounded-xl my-5"
      >
        Button : {count}
      </button>

      <Child handleClick={memoizedHandleClick} />
    </div>
  );
}

export default App;
