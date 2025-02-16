'use client'

import React from "react";
import ProductImageCarousel from "@/components/productImageCarousel";
import ProductTabs from "@/components/tabs";
import SizeSelector from "@/components/sizeSelector";
import QuantitySelector from "@/components/quantitySelector";
import FoundationSelector from "@/components/foundationSelector";
import FeaturesSection from "@/components/featuresSection";
import Navbar from '../navbar';
import Footer from "../footer";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const ProductPage = () => {
  return (
    <div className='bg-white'>
      {/* NAVBAR SECTION */}
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image Carousel */}
          <ProductImageCarousel />

          {/* Right Side: Product Details */}
          <div>
            <h1 className="text-3xl font-semibold mb-2">Katherine Latex</h1>
            <div className="flex justify-between">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-600">(14 Reviews)</span>
            </div>
            <div className="flex mx-2">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
            </div>
            <ProductTabs />
            <div className="text-2xl font-bold mb-4">$949.00</div>
            <p className="text-gray-600 mb-4 flex items-center">
              Starting at $86/mo with <Image src="/affirm.png" alt="Affirm" width={40} height={10} className="mx-1 mb-2"/><a href="#" className="text-blue-600">Prequalify Now</a>.
            </p>
            <SizeSelector />
            <QuantitySelector />
            <FoundationSelector />
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
