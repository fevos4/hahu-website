import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 sm:px-14 bg-white w-full ">
      <a href="#">
        <img src={Logo} alt="Logo" className="w-24" />
      </a>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <li className="p-4 text-sm font-bold">
          <a href="#">Web-Hosting</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">Pricing</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">About Us</a>
        </li>
      </ul>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex items-center ">
        <button
          className="text-sm font-bold py-2 px-7 hover:duration-300 "
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </button>
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          nav ? 'flex' : 'hidden'
        } flex-col bg-white w-full absolute top-24 left-0 p-4 shadow-md `}
      >
        <li className="p-4 text-sm font-bold">
          <a href="#">Web-Hosting</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">Pricing</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">About Us</a>
        </li>
      </ul>

      {/* Desktop login button */}
      <button className="hidden md:inline-block text-sm font-bold rounded-3xl bg-[#50E690] hover:bg-[#29804f] py-2 px-7 hover:duration-300">
        Login
      </button>
    </div>
  );
};

export default Navbar;