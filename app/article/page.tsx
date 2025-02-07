import Navbar from '../home/navbar'
import Image from "next/image";
import CardItem from "../component/cardItem";
import Styles from './postpage.module.css'
import Footer from "../footer";
import "./postpage.module.css"
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className='bg-white'>
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
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Landing