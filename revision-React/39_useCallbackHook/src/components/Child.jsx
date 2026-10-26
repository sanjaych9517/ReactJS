import React, { memo } from "react";

const Child = () => {
  console.log("child rendering");
  return (
    <div>
      <h1 className="text-3xl border-2 px-7 py-3 ">CHILD</h1>
    </div>
  );
}; 

 

export default memo(Child);
