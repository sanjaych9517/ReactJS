import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Fotter from "./component/Fotter";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <Fotter></Fotter>
      </div>
    </div>
  );
}

export default App;
