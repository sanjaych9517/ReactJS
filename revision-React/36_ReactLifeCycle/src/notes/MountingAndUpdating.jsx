import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  useEffect(() => {
    console.log("Mounting...");
  },[]);

useEffect(()=>{
  console.log("Data Change hua hai")
},[data])
  return (
    <center className="my-20 bg-gray-300 text-5xl border-4">
      <h2 className="my-10">{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-10 bg-red-500 rounded-3xl px-5 py-3 mb-5"
      >
        Incerement
      </button>

      <br />
      <br />

      <h2 className="my-10">{data}</h2>
      <button
        onClick={() => setData(data-1)}
        className="mt-10 bg-red-500 rounded-3xl px-5 py-3 mb-5"
      >
        Decrement
      </button>
    </center>
  );
}

export default App;
