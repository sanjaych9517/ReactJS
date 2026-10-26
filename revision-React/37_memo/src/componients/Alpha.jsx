import React, { memo, useEffect } from "react";

const Alpha = ({ data }) => {
  useEffect(() => {
console.log(data)
    console.log(" Child Re-rendering....");
  });

  return (
    <div>
      Alpha
      <h1>{}</h1>
    </div>
  );
};

  const  EnhancedAlpha =  memo(Alpha)

export default EnhancedAlpha;
