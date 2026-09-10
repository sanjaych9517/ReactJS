import React, { useContext } from "react";
import { MyContext } from "../MyContext";

const C = () => {
 
 const data = useContext(MyContext) 

  return (
    <div className="bg-green-600 p-10">
      C<p>{data}</p>
    </div>
  );
};

export default C;
