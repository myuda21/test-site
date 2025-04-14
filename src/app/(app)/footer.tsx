import { Facebook, Instagram } from "lucide-react";
import CommentSection from "./commentSection";
// import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>

      {/* COMMENT SECTION */}
      <div className="relative flex-col">
        {/* Comment Section */}
        <div className="relative">
          <CommentSection />
        </div>

        {/* Image Section */}
        {/* <div className="relative flex z-20 -mt-12">
          <Image
            src="/mix-ins.png"
            alt="Handcrafted Mattress"
            width={1000} // Provide actual width
            height={500} // Provide actual height
            className="w-[90%] h-auto mx-auto"
          /> */}

          {/* Text Overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center sm:justify-end bg-black/30 w-[90%] h-auto mx-auto p-4">
            <div className="text-white text-center sm:text-right p-4 w-full sm:max-w-[40%]">
              <h2 className="text-lg sm:text-xl font-semibold">Handcrafted Mattresses</h2>
              <p className="mt-2 text-sm sm:text-lg">
                Factory-Direct Pricing, Family Owned for over 50 years.
              </p>
              <button className="text-xs mt-4 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition">
                READ OUR STORY
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* JOIN OUR NEWSLETTER SECTION */}
      <div className="bg-white p-8 mx-4 my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 mb-12">
        <div className="text-center lg:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Join Our Newsletter</h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            We deliver only the best updates and specials to you, and we never spam.
          </p>
        </div>

        <div className="flex flex-wrap w-full lg:w-1/2 items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-grow px-4 py-3 rounded-full bg-gray-100 text-gray-700 focus:outline-none w-full sm:w-auto"
          />
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition w-full sm:w-auto">
            JOIN NEWSLETTER
          </button>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-6 opacity-95">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-8">
            {/* Shop Section */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Mattresses</Link></li>
                <li><Link href="#" className="hover:underline">Accessories</Link></li>
                <li><Link href="#" className="hover:underline">Platforms</Link></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Resources</h3>
              <ul className="space-y-2">
                {/* <li><Link href="/" className="hover:underline">FAQ's</Link></li> */}
                <li><Link href="/about-us" className="hover:underline">About us</Link></li>
                <li><Link href="/military-discount" className="hover:underline">Military Discount</Link></li>
                <li><Link href="/promotionsV2" className="hover:underline">Promotions</Link></li>
                <li><Link href="/product-financing" className="hover:underline">Financing</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2"><Link href="/contact-us" className="hover:underline">Contact Us</Link></h3>
              <p className="mb-1">(021) 1222319</p>
              <p className="mb-1"><Link href="#" className="hover:underline">Rawamangun</Link></p>
              <p><Link href="#" className="hover:underline">Jakarta, Indonesia</Link></p>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <Link href="#" className="hover:opacity-75">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="hover:opacity-75">
                  <Instagram size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white">
        {/* Separator Line */}
        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-sm space-x-4 my-3">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link href="#" className="hover:underline">Terms of Use</Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-4">
          © 2016 Test
        </p>
      </div>
    </div>
  );
};

export default Footer;