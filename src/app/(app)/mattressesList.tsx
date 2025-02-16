"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const mattresses = [
  { name: "Classic Hybrids", image: "/bedSmall.png"},
  { name: "Luxury Firm", image: "/bedSmall.png", path: "/mattresses"},
  { name: "Guest Beds", image: "/bedSmall.png"},
  { name: "Kids Beds", image: "/bedSmall.png"},
  { name: "Certified Organic", image: "/bedSmall.png"},
  { name: "Shop Picks", image: "/bedSmall.png" },
];

const MattressList: React.FC = () => {
  const [selectedMattress, setSelectedMattress] = useState(mattresses[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-neutral-500 hover:text-black text-sm font-semibold"
      >
        MATTRESSES
      </button>
      

      {isOpen && (
        <div className="absolute left-0 w-[500px] bg-white p-4 mx-5 rounded-md shadow-lg flex space-x-4 border">
          {/* Kategori List */}
          <div className="w-3/4">
            <h2 className="text-gray-500 text-xs uppercase mb-3">Mattress Categories</h2>
            <ul>
              {mattresses.map((mattress, index) => (
                <li
                  key={index}
                  className={`p-1 cursor-pointer text-gray-700 hover:bg-gray-200 ${
                    selectedMattress.name === mattress.name ? "bg-gray-200" : ""
                  }`}
                  onMouseEnter={() => setSelectedMattress(mattress)}
                >
                  {mattress.path ? (
                    <Link href={mattress.path}>
                      {mattress.name}
                    </Link>
                  ) : (
                    <span>{mattress.name}</span>
                  )}
                </li>
              ))}
            </ul>
            <br />
            <h2 className="text-xs uppercase mb-3 text-blue-500">SHOP ALL MATTRESSES</h2>
          </div>

          {/* Gambar Mattresses */}
          <div className="w-full flex justify-center items-center">
            <Image
              src={selectedMattress.image}
              alt={selectedMattress.name}
              width={200}
              height={50}
              className="rounded-sm shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MattressList;
