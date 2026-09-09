import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [users, setusers] = useState([]);
  const [formDetails, setFormsDetails] = useState({
    name: "",
    age: "",
  });
  console.log(formDetails);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormsDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const fetchData = async () => {
    const responce = await axios({
      url: "https://6aa037203e0d88d3d7e57738.mockapi.io/users",
      method: "get",
    });
    setusers(responce.data);
  };

  const postData = async () => {
    const responce = await axios({
      url: "https://6aa037203e0d88d3d7e57738.mockapi.io/users",
      method: "post",
      data: formDetails,
    });
  setFormsDetails({
    name: "",
    age: "",
  });
    fetchData();
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        name="name"
        onChange={handleOnChange}
        value={formDetails.name}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="enter age"
        name="age"
        onChange={handleOnChange}
        value={formDetails.age}
      />
      <br />
      <br />
      <button onClick={postData}>Post Data</button>
      {users.map((userDetails) => {
        return (
          <div
            key={userDetails.id}
            className="bg-gray-700 p-6 rounded-2xl my-2"
          >
            <p>Name: {userDetails.name}</p>
            <p>Age: {userDetails.age}</p>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
