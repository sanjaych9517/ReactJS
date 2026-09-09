import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = true;

  const navigate = useNavigate();
  const handleOnClick = () => {
    if (isLoggedIn) navigate("/about");
  };

  const arr = ["a", "b", "c", "d"];

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

        {arr.map((item,idx) => {
          return (
            <NavLink key={idx}
              to= {`/contact/${item}`}
              className={({ isActive }) => {
                return isActive ? "text-rose-400 " : "text-white";
              }}
            >
              {item}
            </NavLink>
          );
        })}
      </div>
      <button
        className="border-2 rounded-2xl px-3 py-3 text-2xl my-2 mx-2"
        onClick={handleOnClick}
      >
        Navigate to about
      </button>
    </>
  );
};

export default Navbar;
