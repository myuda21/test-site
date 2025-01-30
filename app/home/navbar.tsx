"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Untuk mobile menu
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false); // Untuk dropdown Features

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  return (
    <nav className="bg-white shadow-md py-2 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image src="/logoQSS.jpg" alt="Logo" width={120} height={50} />
        
        {/* Menu untuk Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/mattresses" className="text-neutral-500 hover:text-black">Mattresses</Link>
          <Link href="/accessories" className="text-neutral-500 hover:text-black">Accessories</Link>
          <Link href="/platforms" className="text-neutral-500 hover:text-black">Platforms</Link>
          
          {/* Features Dropdown */}
          <div className="relative">
            <button
              onClick={toggleFeaturesDropdown}
              className="flex items-center gap-1 text-neutral-500 hover:text-black focus:outline-none"
            >
              <span>Resources</span>
              <IoIosArrowDown
                className={`transform transition-transform ${isFeaturesOpen ? "rotate-0" : "rotate-180"}`}
              />
            </button>
            {isFeaturesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <Link href="/feature1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 1</Link>
                <Link href="/feature2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 2</Link>
                <Link href="/feature3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 3</Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <div className="flex items-center text-sm text-neutral-500">
            <Phone size={20} color="#BCB7B5" className="mr-2" />
            708.246.2224
          </div>
        </div>

        {/* Cart */}
        <div className="hidden md:flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
          <span className="text-sm">$0.00</span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <Menu strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <Menu strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu untuk Mobile */}
      {isOpen && (
        <div className="md:hidden pb-4 px-4 space-y-2">
          <Link href="/mattresses" className="block text-neutral-500 hover:bg-gray-100 py-2">Mattresses</Link>
          <Link href="/accessories" className="block text-neutral-500 hover:bg-gray-100 py-2">Accessories</Link>
          <Link href="/platforms" className="block text-neutral-500 hover:bg-gray-100 py-2">Platforms</Link>
          <Link href="/resources" className="block text-neutral-500 hover:bg-gray-100 py-2">Resources</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;