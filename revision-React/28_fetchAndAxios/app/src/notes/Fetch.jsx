import "./App.css";
import axios from "axios";

function App() {
  const fetchData = async () => {
    //     const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const data = await  responce.json();
    // console.log(data);

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json)
    //   .then((data) => console.log(data));

    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data);
  };
  return (
    <>
      <h1 className="bg-red-500">hellow</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}

export default App;
