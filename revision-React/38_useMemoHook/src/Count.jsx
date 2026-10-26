import React, { useState, useMemo } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const expensiveTask = () => {
    for (let i = 0; i < 1000000000000000; i++) {
      return 2;
    }
  };

  const expensiveResult = useMemo(() => {
    const result = expensiveTask();
    return result;
  }, [count]);

  return (
    <div className="flex justify-center items-center border-amber-200 flex-col mt-40">
      <h1 className="text-4xl mt-10">{count}</h1>
      <h1 className="text-4xl mt-10">{expensiveResult}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 text-2xl border rounded-xl my-5"
      >
        Count{" "}
      </button>
    </div>
  );
};

export default Count;
