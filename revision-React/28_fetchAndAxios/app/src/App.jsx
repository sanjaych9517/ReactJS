import "./App.css";

function App() {
  const fetchData = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    
  const data = await  responce.json();
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
