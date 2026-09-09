import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import DetailedContact from "./component/DetailedContact";
import Help from "./component/Help";
import A1 from "./component/A1";
import A2 from "./component/A2";
import { Navigate } from "react-router-dom";
function App() {
  console.log(window.history);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="a1" element={<A1 />} />
          <Route path="a2" element={<A2 />} />
        </Route>
        <Route path="/contact/:cid" element={<DetailedContact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}

export default App;
