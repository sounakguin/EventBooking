import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Images/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lg:hidden p-4 flex justify-between items-center bg-gray-900 text-white">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`h-full md:h-screen   w-full md:w-64 bg-gray-900 text-white flex flex-col lg:block ${
          isOpen ? "block" : "hidden"
        } lg:flex`}
      >
        <div className="flex items-center p-0 md:p-4 lg:justify-start">
          <img
            src={logo}
            alt="logo"
            className="h-20 w-20 lg:h-10 lg:w-10 hidden md:block"
          />
          <div className="pt-7 font-bold text-xl lg:pt-0 lg:pl-2 hidden md:block">
            Booking
          </div>
        </div>
        <div className="border border-sky-500"></div>
        <div className="flex-grow overflow-y-auto">
          <Link to="/" className="block p-4 hover:bg-gray-700">
            Booking Form
          </Link>
          <Link to="/Events" className="block p-4 hover:bg-gray-700">
            Booking Form Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
