import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Layout from "./component/Layout";

function App() {
 const rou = createBrowserRouter([
   {
     path: "/",
     element: <Layout />,
     children: [
       {
         path: "/home",
         element: <Home />,
       },
       {
         path: "/about",
         element: <About />,
       },
       {
         path: "/contact",
         element: <Contact />,
       },
     ],
   },
 ]);
  return (
    <>
 <RouterProvider router = {rou} />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
