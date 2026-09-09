import React from "react";
import { Link, NavLink,  } from "react-router-dom";

const Navbar = () => {
  

  return (
    <>
      <div className="bg-[lightseagreen] flex gap-9 text-3xl text-white py-2 px-3.5 font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return isActive ? "text-rose-400 " : "text-white";
          }}
        >
          Contact
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) => {
            return isActive ? "text-rose-400 " : "text-white";
          }}
        >
          Help
        </NavLink>

      </div>
      
    </>
  );
};

export default Navbar;
