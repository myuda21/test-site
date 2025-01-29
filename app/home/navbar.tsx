"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { Clover, Leaf, UtensilsCrossed } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo atau Nama Website */}
          <Image src="/logoQSS.jpg" alt="Logo" width={16} height={16} /> //todo: masih error gambar tidak muncul

          {/* Menu untuk Desktop */}
          <div className="flex items-center gap-4 transition-all">
            <Link href={""} className="relative group px-2 py-3 transition-all ">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:rotate-0">
                <span>Features</span>
                <IoIosArrowDown className=" rotate-180 transition-all group-hover:rotate-0"></IoIosArrowDown>
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-4 transition-all">
            <Link href={""} className="relative group px-2 py-3 transition-all ">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:rotate-0">
                <span>Accessories</span>
                <IoIosArrowDown className=" rotate-180 transition-all group-hover:rotate-0"></IoIosArrowDown>
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-4 transition-all">
            <Link href={""} className="relative group px-2 py-3 transition-all ">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:rotate-0">
                <span>Platforms</span>
                <IoIosArrowDown className=" rotate-180 transition-all group-hover:rotate-0"></IoIosArrowDown>
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-4 transition-all">
            <Link href={""} className="relative group px-2 py-3 transition-all ">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:rotate-0">
                <span>Resources</span>
                <IoIosArrowDown className=" rotate-180 transition-all group-hover:rotate-0"></IoIosArrowDown>
              </p>
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
            <a href="#" className="block py-2 hover:bg-gray-100">Mattresses</a>
            <a href="#" className="block py-2 hover:bg-gray-100">Accessories</a>
            <a href="#" className="block py-2 hover:bg-gray-100">Platforms</a>
            <a href="#" className="block py-2 hover:bg-gray-100">Resources</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;