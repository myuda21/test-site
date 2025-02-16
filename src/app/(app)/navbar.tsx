"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { Phone, Menu } from "lucide-react";
import MattressList from "./mattressesList"; // Import komponen daftar mattresses

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMattressOpen, setIsMattressOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMattressDropdown = () => setIsMattressOpen(!isMattressOpen);
  const toggleFeaturesDropdown = () => setIsFeaturesOpen(!isFeaturesOpen);

  return (
    <nav className="bg-white py-2 px-4 z-50 relative">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/home">
          <Image src="/logoQSS.jpg" alt="Logo" width={120} height={50} />
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Mattresses Dropdown */}
          <MattressList />
          <Link href="/accessories" className="text-neutral-500 hover:text-black text-sm font-semibold">
            ACCESSORIES
          </Link>
          <Link href="/platforms" className="text-neutral-500 hover:text-black text-sm font-semibold">
            PLATFORMS
          </Link>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={toggleFeaturesDropdown}
              className="flex items-center gap-1 text-neutral-500 hover:text-black text-sm font-semibold"
            >
              <span>RESOURCES</span>
              <IoIosArrowUp className={`transform transition-transform ${isFeaturesOpen ? "rotate-0" : "rotate-180"}`} />
            </button>

            {isFeaturesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <Link href="/archive" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Archive
                </Link>
                <Link href="/feature2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Feature 2
                </Link>
                <Link href="/feature3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Feature 3
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Contact & Cart */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-sm text-neutral-500">
            <Phone size={20} color="#BCB7B5" className="mr-2" />
            708.246.2224
          </div>
          <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
            <span className="text-sm">$0.00</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4 px-4 space-y-2">
          <Link href="/mattresses" className="block text-neutral-500 hover:bg-gray-100 py-2">
            Mattresses
          </Link>
          <Link href="/accessories" className="block text-neutral-500 hover:bg-gray-100 py-2">
            Accessories
          </Link>
          <Link href="/platforms" className="block text-neutral-500 hover:bg-gray-100 py-2">
            Platforms
          </Link>
          <Link href="/resources" className="block text-neutral-500 hover:bg-gray-100 py-2">
            Resources
          </Link>

          {/* Phone and Cart in Mobile */}
          <div className="flex items-center text-sm text-neutral-500 py-2">
            <Phone size={20} color="#BCB7B5" className="mr-2" />
            708.246.2224
          </div>
          <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
            <span className="text-sm">$0.00</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
