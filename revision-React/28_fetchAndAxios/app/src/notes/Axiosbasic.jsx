import React from "react";
import axios from "axios";
const App = () => {
  const config = {
    url: "/users",
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      Accept: "application/json",
      Authority: "bearer lahkbkxj,zxlk,lmhkjz",
    },
    timeout: "200", // ms
  };

  const fetchData = async () => {
    const responce = await axios(config);
    console.log(responce);
  };

  return (
    <div>
      <button onClick={fetchData}>FetchData</button>
    </div>
  );
};

export default App;
