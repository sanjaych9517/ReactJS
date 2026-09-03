import { useState } from "react";
import Button from "./component/Button";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

 const  increment = () =>  setCount(count + 1);
  

  const  decrement  =()  => setCount(count - 1);
  
 const reset = () =>  setCount(0);
  
  return (
    <>
        <h1>Counter App</h1>
        <p>count : {count}</p>

        <div className="buttons">
          
          <Button text="INCREMENT" func={increment} />
          <Button text="DECREMENT" func={decrement} />
          <Button text="RESET" func={reset} />
        </div>
    </>
  );
}

export default App;