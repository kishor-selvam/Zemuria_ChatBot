import React from "react";
import { NavLink } from "react-router-dom"; // Optional, for active link styling if you use react-router

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/">
          <div className="text-xl font-semibold text-gray-800">Zemuria</div>
        </a>

        <ul className="flex space-x-8 text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat_history"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              Chat History
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
