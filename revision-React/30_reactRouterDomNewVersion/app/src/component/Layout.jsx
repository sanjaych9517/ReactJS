import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>Layout</div>
      <Outlet />
    </>
  );
};

export default Layout;
