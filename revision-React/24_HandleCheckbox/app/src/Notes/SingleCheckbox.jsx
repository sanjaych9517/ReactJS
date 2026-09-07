import { useState } from "react";

function App() {
  const [isCheck, setIsCheck] = useState(false);

  const onChange = (e) => {
    setIsCheck(e.target.checked);
  };
  return (
    <>
      <label htmlFor="cb">
        <input type="checkbox" id="cb" checked={isCheck} onChange={onChange} />
        Terms and condition
      </label>
    </>
  );
}

export default App;
