"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { Phone, Menu } from "lucide-react";
import MattressList from "./mattressesList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white py-2 px-4 z-50 relative">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/home">
          <Image src="/lorem-ipsum.png" alt="Logo" width={50} height={50} />
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu size={24} />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <MattressList />
          <Link href="/accessories" className="text-neutral-500 hover:text-black text-sm font-semibold">
            ACCESSORIES
          </Link>
          <Link href="/platforms" className="text-neutral-500 hover:text-black text-sm font-semibold">
            PLATFORMS
          </Link>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("resources")}
              className="flex items-center gap-1 text-neutral-500 hover:text-black text-sm font-semibold"
            >
              <span>RESOURCES</span>
              <IoIosArrowUp className={`transform transition-transform ${openDropdown === "resources" ? "rotate-0" : "rotate-180"}`} />
            </button>
            {openDropdown === "resources" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <Link href="/archive" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Archive</Link>
                <Link href="/feature2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 2</Link>
                <Link href="/feature3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 3</Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-sm text-neutral-500">
            <Phone size={20} color="#BCB7B5" className="mr-2" />
            01234567
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden pb-4 px-4 space-y-2">
          <button onClick={() => toggleDropdown("mattresses")} className="block text-neutral-500 hover:bg-gray-100 py-2 w-full text-left">
            Mattresses
          </button>
          {openDropdown === "mattresses" && (
            <div className="pl-4">
              <Link href="#" className="block text-neutral-500 hover:bg-gray-100 py-2">Classic Hybrids</Link>
              <Link href="/mattresses" className="block text-neutral-500 hover:bg-gray-100 py-2">Luxury Firm</Link>
              <Link href="#" className="block text-neutral-500 hover:bg-gray-100 py-2">Guest Beds</Link>
              <Link href="#" className="block text-neutral-500 hover:bg-gray-100 py-2">Kids Beds</Link>
              <Link href="#" className="block text-neutral-500 hover:bg-gray-100 py-2">Certified Organic</Link>
            </div>
          )}
          <Link href="/accessories" className="block text-neutral-500 hover:bg-gray-100 py-2">Accessories</Link>
          <Link href="/platforms" className="block text-neutral-500 hover:bg-gray-100 py-2">Platforms</Link>
          <button onClick={() => toggleDropdown("resources")} className="block text-neutral-500 hover:bg-gray-100 py-2 w-full text-left">
            Resources
          </button>
          {openDropdown === "resources" && (
            <div className="pl-4">
              <Link href="/archive" className="block text-neutral-500 hover:bg-gray-100 py-2">Archive</Link>
              <Link href="/feature2" className="block text-neutral-500 hover:bg-gray-100 py-2">Feature 2</Link>
              <Link href="/feature3" className="block text-neutral-500 hover:bg-gray-100 py-2">Feature 3</Link>
            </div>
          )}
          <div className="flex items-center text-sm text-neutral-500 py-2">
            <Phone size={20} color="#BCB7B5" className="mr-2" />
            01234567
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
