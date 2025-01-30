import Navbar from './navbar'
import Image from "next/image";
import CardItem from "../component/cardItem";
import Styles from './postpage.module.css'
import Footer from "./footer";
import CommentSection from "./commentSection";

const Landing = () => {
  return (
    <div>
      {/* NAVBAR SECTION */}
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* BANNER SECTION */}
        <div className="relative w-full h-[500px] flex justify-center text-center text-white py-6 mb-12">
          {/* Background Image */}
          <Image
            src="/home-menu-image.png" // Ganti dengan gambar yang sesuai
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

        {/* IMAGE AND TEXT SECTION */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center bg-white py-6 mb-12">
          <div className="relative w-full lg:w-2/3 h-80 lg:h-[500px]">
            <Image
              src="/shop-accessories.png" // Ganti dengan gambar asli Anda
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
            <button className="mt-6 flex items-center gap-2 border border-gray-900 rounded-full px-6 py-3 text-gray-900 font-semibold hover:bg-gray-100 transition">
              SHOP ACCESSORIES <span className="text-lg">→</span>
            </button>
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

        {/* COMMENT SECTION */}
        <div className="relative">
          {/* Comment Section */}
          <div className="relative z-20">
            <CommentSection />
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center">
            <img
              src="/mix-ins.png"
              alt="Handcrafted Mattress"
              className="w-[90%] h-auto mx-auto"
            />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-end bg-black/30 w-[90%] h-auto mx-auto">
              <div className="text-white text-right p-4 max-w-[40%]">
                <h2 className="text-xl font-semibold">Handcrafted Mattresses</h2>
                <p className="mt-2 text-lg">
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
        <div className="bg-white p-8 left-4 right-4 lg:-mr-10 mx-4 my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 mb-12">
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold text-gray-900">Join Our Newsletter</h2>
            <p className="mt-2 text-gray-700">
              We deliver only the best updates and specials to you, and we never spam.
            </p>
          </div>

          <div className="flex w-full lg:w-1/2 items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-grow px-4 py-3 rounded-full bg-gray-100 text-gray-700 focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition w-1/3 lg:w-auto">
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