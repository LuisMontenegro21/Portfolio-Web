import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        My Portfolio
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        </li>
        <li>
          <Link to="/skills" className="text-gray-300 hover:text-white">Skills</Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </li>
        <li>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
