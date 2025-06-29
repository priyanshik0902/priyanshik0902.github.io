import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon
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
          <li>
  <a href="#test" className="hover:text-pink-400 transition">Projects</a>
</li>

          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="flex items-center">
        <img src={search} alt="Search" className="mr-6 w-6 cursor-pointer" />
        <a
          href="https://www.linkedin.com/in/priyanshi-kotian-aa1321264" // replace this with your real LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 transition"
        >
          <FaLinkedin className="text-base" />
          <span className="text-base">Hire Me</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
