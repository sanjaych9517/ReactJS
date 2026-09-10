import React, { useContext } from "react";
import { MyContext } from "../MyContext";

const F = () => {
  const data = useContext(MyContext);

  return (
    <div className="bg-cyan-500 p-5">
      F<p>{data}</p>
    </div>
  );
};

export default F;
