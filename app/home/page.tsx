import Navbar from './navbar'
import Image from "next/image";
import CardItem from "../component/cardItem";
import Styles from './postpage.module.css'
import Footer from "./footer";
import CommentSection from "./commentSection";
import "./postpage.module.css"
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div>
      {/* NAVBAR SECTION */}
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* BANNER SECTION */}
        <div className="relative w-full h-[500px] flex justify-center text-center text-white py-6 mb-12">
          <Image
            src="/home-menu-image.png"
            alt="Megan Mattress"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>

          {/* Content */}
          <div className="relative z-10 px-6">
            <h1 className="text-3xl font-semibold md:text-4xl">It’s time to sleep better.</h1>
            <p className="mt-3 text-lg md:text-xl">
              Our highly-rated <span className="underline">Megan Mattress</span> is comfortable & affordable.
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex flex-col items-center">
              <div className="relative border border-white rounded-full px-6 py-3 flex items-center gap-3">
                <span className="text-sm font-semibold">BUY NOW FOR</span>
                <span className="text-xl font-bold">$499</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD ITEM SECTION */}
        <div className="max-w-6xl mx-auto px-4 py-8 mb-12">
          <div className="grid grid-cols-3 gap-4 mt-6">
            <CardItem image="/shop-adult.png" alt="Shop Adult" text="Shop Adult" />
            <CardItem image="/shop-kids.png" alt="Shop Kids" text="Shop Kids" />
            <CardItem image="/shop-guest-room.png" alt="Shop Guest Room" text="Shop Guest Room" />
          </div>
        </div>

        {/* IMAGE AND TEXT SECTION */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center bg-white py-6 mb-12">
          <div className="relative w-full lg:w-2/3 h-80 lg:h-[500px]">
            <Image
              src="/shop-accessories.png"
              alt="Family on Mattress"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Text Box (Card) */}
          <div className="relative lg:absolute lg:w-1/3 bg-white p-8 top-0 lg:top-1/2 left-4 right-4 lg:-mr-10 -translate-y-0 lg:-translate-y-1/2 mx-4 my-6">
            <h2 className="text-3xl font-semibold text-gray-900">Sleep soundly.</h2>
            <p className="mt-4 text-gray-700">
              Sheets that are more than just soft. They feel so good, you never want to get up.
            </p>

            {/* CTA Button */}
            <div className='relative' style={{ paddingTop: '0.001rem', paddingBottom: '0.001rem', }}> {/* GABOLEH DIGANGGU GUGAT SUSAH MENYESUAIKANNYA */}
              <div className='absolute border-4 border-white z-5 w-3/4 h-full'></div>
              <button className="border rounded-full border-black p-2 w-3/4 flex justify-center my-0.5">
                MORE ABOUT US <span className='mx-3'> | </span> <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* COMMENT SECTION */}
        <div className="relative flex-col">
          {/* Comment Section */}
          <div className="relative">
            <CommentSection />
          </div>

          {/* Image Section */}
          <div className="relative flex z-20 -mt-12">
            <img
              src="/mix-ins.png"
              alt="Handcrafted Mattress"
              className="w-[90%] h-auto mx-auto"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center sm:justify-end bg-black/30 w-[90%] h-auto mx-auto p-4">
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
          </div>
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
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Landing