import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const res = await responce.json();
      setData(res);

      console.log(res);
    })();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Users;
