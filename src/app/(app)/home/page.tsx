import Navbar from '../navbar'
import Image from "next/image";
import CardItem from "../../../components/cardItem";
import Footer from "../footer";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className='bg-white'>
      {/* NAVBAR SECTION */}
      <Navbar />
      <div className="mx-auto px-4">
        {/* BANNER SECTION */}
        <div className="mx-auto px-4">
          {/* BANNER SECTION */}
          <div className="relative w-full h-[500px] mb-2">
            <Image
              src="/kasur.png"
              alt="Military Discount"
              layout="fill"
              objectFit="contain"
              className="w-full h-full bg-white"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col text-white px-6">
              <div className="text-center md:flex md:items-center md:justify-center w-full relative">
                <div className="md:w-1/2 my-6">
                  <h1 className="text-3xl font-bold">It’s time to sleep better.</h1>
                  <p className="text-lg">Our highly-rated Megan Mattress is comfortable & affordable.</p>
                  <br />
                  <button
                    type="button"
                    className="flex items-center justify-center border border-white text-white bg-transparent font-medium rounded-full text-sm px-5 py-2.5 mx-auto hover:bg-white hover:text-black transition"
                  >
                    SHOP ACCESSORIES <span className="mx-3"> | </span> <ArrowRight />
                  </button>
                </div>
                {/* Right-side divider and text */}
                <div className="absolute right-0 bottom-1/2 transform translate-x-1/2 flex items-center rotate-90 -mb-36">
                  <div className="w-60 h-0.5 bg-white mx-3"></div>
                  <p className="text-xs text-white">Handcrafted Mattresses</p>
                </div>
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
            <div className='relative my-4' style={{ paddingTop: '0.001rem', paddingBottom: '0.001rem', }}> {/* GABOLEH DIGANGGU GUGAT SUSAH MENYESUAIKANNYA */}
              <div className='absolute border-4 border-white z-5 w-3/4 h-full'></div>
              <button className="border rounded-full border-black p-2 w-3/4 flex justify-center my-0.5">
                SHOP ACCESSORIES <span className='mx-3'> | </span> <ArrowRight />
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