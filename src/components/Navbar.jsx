
import React from 'react';
import { NavLink } from 'react-router-dom';
import search from "../images/search.png";
import me from "../images/me-modified.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white p-4 ml-8 mr-8">
      <div className="flex items-center p-3 mr-96">
        <img src={me} alt="Logo" className="mr-16 h-28" />
        <ul className="flex space-x-4 cursor-pointer">
          <li><NavLink to="/">Home</NavLink></li> 
          <li><NavLink to="/skills">Skills</NavLink></li> 
          <li><NavLink to="/#test">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li> 
        </ul>
      </div>
      <div className="flex items-center">
        <img src={search} alt="Search" className="mr-6 w-6 cursor-pointer" />
        <button className="text-white px-4 py-2 rounded-xl bg-pink-600 ">Hire Now</button>
      </div>
    </div>
  );
};

export default Navbar;
