'use client';
import Image from 'next/image';
import Navbar from "../navbar";
import Footer from "../footer";

const ProductFinancing = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image src="/home-menu.png" alt="Product Financing" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">Product Financing</h1>
          <p className="text-lg mt-2">Buy now, pay over time.</p>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-300 rotate-90">
          Family Owned. American Made.
        </div>
      </div>

      {/* Two Ways to Qualify */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
      <div className="flex justify-center gap-16 mt-6 items-center">
      <h2 className="text-xl font-semibold text-gray-800">Two Ways To Qualify</h2>
        <div className="flex items-center gap-4 max-w-sm">
          <div className="w-10 h-10 bg-[#1E2A3A] text-white flex items-center justify-center rounded-full text-lg font-semibold">
            1
          </div>
          <p className="text-gray-700 text-left">
            Click the link above or on any Product Page to Pre-Qualify
          </p>
        </div>
        <div className="flex items-center gap-4 max-w-sm">
          <div className="w-10 h-10 bg-[#1E2A3A] text-white flex items-center justify-center rounded-full text-lg font-semibold">
            2
          </div>
          <p className="text-gray-700 text-left">
            Add items to your Shopping Cart and Apply from the Payment Screen
          </p>
        </div>
      </div>
    </div>

      {/* Fast, Secure Financing */}
      <div className="relative w-full h-[300px] bg-gray-100 flex justify-center items-center">
        <Image src="/shop-kids.png" alt="Fast, Secure Financing" layout="fill" objectFit="cover" />
        <div className="absolute text-center text-white">
          <h2 className="text-2xl font-semibold">Fast, secure financing.</h2>
        </div>
      </div>

      {/* Financing Details */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-xl font-semibold">What Is Needed In Order To Apply?</h2>
        <p className="mt-4">Affirm will simply ask you for your name, email address, your phone number, birthday, and the last 4 digits of your social security number in order to make a "soft pull" of your credit, which will not affect your credit score.</p>
        <div className="flex justify-center items-center mt-6">
          <Image src="/Bitmap.png" alt="Affirm" width={400} height={50} />
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full">LEARN MORE</button>
      </div>

      {/* The Small Print */}
      <div className="bg-gray-100 py-10 px-6 text-center">
        <h2 className="text-lg font-semibold">The Small Print</h2>
        <p className="text-sm max-w-2xl mx-auto mt-4">
          Affirm financing is offered solely by Affirm, Inc. My Green Mattress does not endorse or make any financing decisions. Financing options are subject to an eligibility check and may not be available in all states. Affirm loans are made by Cross River Bank, a New Jersey-chartered bank, Member FDIC.
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto text-center py-16 px-4">
        <h2 className="text-lg font-semibold">Join Our Newsletter</h2>
        <p className="mt-2 text-sm">We deliver only the best updates and specials to you, and we never spam.</p>
        <div className="flex mt-4 justify-center">
          <input type="email" placeholder="Enter your email address..." className="px-4 py-2 border rounded-l-lg w-2/3" />
          <button className="px-4 py-2 bg-black text-white rounded-r-lg">JOIN NEWSLETTER</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductFinancing;

