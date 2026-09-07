import React, { useState } from "react";

const MultipleInput = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  console.log(data);

  //   function nameHandler(e) {
  //     setData({ ...data, name: e.target.value });
  //   }

  //   function emailHandler(e) {
  //     setData({ ...data, email: e.target.value });
  //   }

  function inputHandler(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function clearHandler() {
    setData({
      name: "",
      email: "",
    });
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        placeholder="Name"
        onChange={inputHandler}
      />
      <br />
      <br />
      <input
        type="text"
        value={data.email}
        placeholder="email"
        name="email"
        onChange={inputHandler}
      />
      <br />
      <br />
      <button onClick={clearHandler}>Clear</button>
      <br />
      <br />

      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
    </div>
  );
};

export default MultipleInput;
