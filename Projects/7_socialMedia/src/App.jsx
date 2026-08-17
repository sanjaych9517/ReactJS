import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Fotter from "./component/Fotter";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Fotter></Fotter>
      </div>
    </div>
  );
}

export default App;
