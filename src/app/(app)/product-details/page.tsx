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
import { ArrowRight } from "lucide-react";
import ReviewList from "./reviewList";

const ProductPage = () => {
  
const reviews = [
  { name: "Laurie B.", comment: "So far, so good. It's very comfortable!", rating: 5, verified: true },
  { name: "John D.", comment: "Great product, really helps with sleep.", rating: 4, verified: false },
  { name: "John D.", comment: "Great product, really helps with sleep.", rating: 4, verified: true },
  { name: "John D.", comment: "Great product, really helps with sleep.", rating: 4, verified: true },
];
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
              Starting at $86/mo with <Image src="/affirm.png" alt="Affirm" width={40} height={10} className="mx-1 mb-2" /><a href="#" className="text-blue-600">Prequalify Now</a>.
            </p>
            <SizeSelector />
            <QuantitySelector />
            <FoundationSelector />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <FeaturesSection />
      {/* Benefit Section */}
      <div className="flex justify-around bg-gray-100 p-5">
        <div className="flex flex-col">
          <h1 className="text-4xl mb-4">Benefits</h1>
          <p>Our mattresses surpass the quality of major brand mattresses at each price point.</p>
        </div>
        <div>
          <ul>
            <li>✅Supportive innerspring, keeps your body properly aligned</li>
            <li>✅Firm feel with relieving of pressure points</li>
            <li>✅Firm seating edge</li>
            <li>✅Eliminates motion transfer</li>
            <li>✅Exclusive build style prevents body impressions</li>
          </ul>
        </div>
      </div>
      
      <div className="p-5">
      <ReviewList reviews={reviews} />
      </div>

      <div className="flex items-center justify-between p-16 gap-16">
        <Image src="/shipping.png" alt="Shipping" width={500} height={100} />
        <div className="max-w-lg">
          <h1 className="text-xl font-bold mb-5">Shipping</h1>
          <p className="text-gray-700">
            Upon receipt of your order, a member of our customer service team will contact you to schedule your delivery.
            Our local delivery zone is an approximate 40-mile radius from our La Grange Highlands, IL location.
            At Checkout, if your zip code does not fall within our delivery zone, please call us to make arrangements.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between p-16 gap-16">
        <div className="max-w-lg">
          <h1 className="text-xl font-bold mb-5">Meet the Quality Sleep Shop™ Team</h1>
          <p className="text-gray-700">
            The owners, Tim Masters and his wife, Cindy, live with their five children less than a mile from the shop and are heavily invested in the community. Bob Brixie first opened the shop in 1969 - nearly 50 years ago! Tim began working for the company in 1990 and soon realized he had found his calling.
          </p>
          <div className='relative my-4' style={{ paddingTop: '0.001rem', paddingBottom: '0.001rem', }}> {/* GABOLEH DIGANGGU GUGAT SUSAH MENYESUAIKANNYA */}
            <div className='absolute border-4 border-white z-5 w-1/2 h-full'></div>
            <button className="border rounded-full border-black p-2 w-1/2 flex justify-center my-0.5">
              SHOP ACCESSORIES <span className='mx-3'> | </span> <ArrowRight />
            </button>
          </div>
        </div>
        <Image src="/shop-accessories.png" alt="Shipping" width={500} height={100} />
      </div>


      <Footer />
    </div>
  );
};

export default ProductPage;
