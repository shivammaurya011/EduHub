import React from 'react';
import { Link } from 'react-router-dom';
import { RiComputerLine } from 'react-icons/ri'; 

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to={'/'} className="flex items-center text-3xl font-semibold">
          <RiComputerLine className="text-3xl font-semibold mr-2" />
          HduHub
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/signin" className="text-white text-lg font-medium bg-blue-500 rounded-full hover:bg-blue-600 px-6 py-2 hover:text-gray-300">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

