"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";


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
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo atau Nama Website */}
          <Image src="/logoQSS.jpg" alt="Logo" width={16} height={16} /> {/* todo: masih error gambar tidak muncul */}

          {/* Menu untuk Desktop */}
          <div className="flex items-center gap-4 transition-all">
            {/* Features Dropdown */}
            <div className="relative">
              <button
                onClick={toggleFeaturesDropdown}
                className="flex items-center gap-2 text-neutral-400 px-2 py-3 focus:outline-none"
              >
                <span>Features</span>
                <IoIosArrowDown
                  className={`transform transition-transform ${
                    isFeaturesOpen ? "rotate-0" : "rotate-180"
                  }`}
                />
              </button>
              {isFeaturesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <Link href="/feature1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Feature 1
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

            {/* Menu lainnya */}
            <Link href="/accessories" className="px-2 py-3 text-neutral-400 hover:text-neutral-600">
              Accessories
            </Link>
            <Link href="/platforms" className="px-2 py-3 text-neutral-400 hover:text-neutral-600">
              Platforms





            </Link>
            <Link href="/resources" className="px-2 py-3 text-neutral-400 hover:text-neutral-600">
              Resources













            </Link>
          </div>

          {/* Tombol Burger Menu untuk Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu untuk Mobile */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/mattresses" className="block py-2 hover:bg-gray-100">
              Mattresses
            </Link>
            <Link href="/accessories" className="block py-2 hover:bg-gray-100">
              Accessories
            </Link>
            <Link href="/platforms" className="block py-2 hover:bg-gray-100">
              Platforms
            </Link>
            <Link href="/resources" className="block py-2 hover:bg-gray-100">
              Resources
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
