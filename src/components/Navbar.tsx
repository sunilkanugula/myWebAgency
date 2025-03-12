import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo-removebg-preview.png"; // Ensure the image exists in the correct path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3388ff] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Launch MyTech Logo" className="h-16 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="font-bold text-white hover:text-cyan-300 transition duration-200"
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="border border-white text-white px-4 py-2 rounded-md 
                        bg-transparent hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-300 transition duration-200"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-3 bg-white shadow-md">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-4 py-2 font-bold text-black hover:text-blue-600 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="block text-center border border-blue-600 text-blue-600 px-4 py-2 
                        rounded-md bg-transparent hover:bg-blue-600 hover:text-white transition duration-300 mx-4"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
