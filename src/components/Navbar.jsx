import React from 'react';
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";

export const Navbar = ({ isLogin, setIslogin }) => {
  return (
    <div className="flex flex-wrap md:flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto bg-gray-900/50 backdrop-blur-lg shadow-md px-6 rounded-lg">
      
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition">
        TrendHatch
      </NavLink>

      {/* Navigation Links */}
      <nav>
        <ul className="text-gray-300 flex gap-x-6">
          <li><NavLink to="/" className="hover:text-yellow-400 transition">Home</NavLink></li>
          <li><NavLink to="/About" className="hover:text-yellow-400 transition">About</NavLink></li>
          <li><NavLink to="/Contact" className="hover:text-yellow-400 transition">Contact</NavLink></li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="flex items-center gap-x-4">
        {!isLogin && (
          <NavLink to="/Login">
            <button
              onClick={() => {
                setIslogin(true);
                toast.success("Please Login In");
              }}
              className="bg-blue-600 text-white py-2 px-4 rounded-md border border-blue-500 hover:bg-blue-700 transition"
            >
              Login
            </button>
          </NavLink>
        )}

        {!isLogin && (
          <NavLink to="/Signup">
            <button className="bg-green-600 text-white py-2 px-4 rounded-md border border-green-500 hover:bg-green-700 transition">
              Signup
            </button>
          </NavLink>
        )}

        {isLogin && (
          <NavLink to="/">
            <button
              onClick={() => {
                setIslogin(false);
                toast.success("Logged Out");
              }}
              className="bg-red-600 text-white py-2 px-4 rounded-md border border-red-500 hover:bg-red-700 transition"
            >
              Logout
            </button>
          </NavLink>
        )}

        {isLogin && (
          <NavLink to="/Dashboard">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-md border border-purple-500 hover:bg-purple-700 transition">
              Dashboard
            </button>
          </NavLink>
        )}
      </div>
      
    </div>
  );
};
