import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="page">About</div>

      <div className="h-20 w-20 bg-red-600">
        <Outlet />
      </div>
      <h1>About</h1>
      <div className="h-20 w-20 bg-yellow-700">abcd</div>
    </>
  );
};

export default About;
