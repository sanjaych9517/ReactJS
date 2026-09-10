import "./App.css";
import React, { useContext } from "react";
import B from "./component/B";
import A from "./component/A";
import { MyContext } from "./MyContext";

const App = () => {

 const data = useContext(MyContext)
  return (
    <div className="bg-red-500 p-10 main">
      <p>{data}</p>
      App
      <A />
      <B />
    </div>
  );
};

export default App;
