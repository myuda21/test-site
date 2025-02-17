'use client'

import Navbar from '../navbar'
import Image from "next/image";
import Footer from "../footer";
import FAQ from "@/components/faq";

const FAQPage = () => {
    return (
        <div className='bg-white'>
            {/* NAVBAR SECTION */}
            <Navbar />
            <div className="mx-auto px-4">
                {/* BANNER SECTION */}
                <div className="relative w-full h-[500px] mb-10">
                    <Image
                        src="/faq-banner.png"
                        alt="Military Discount"
                        layout="fill"
                        objectFit="object-none"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col text-white px-6">
                        <div className="text-center md:flex md:items-center md:justify-center w-full relative">
                            <div className="md:w-1/2 my-16">
                                <h1 className="text-3xl font-sans mb-3">Frequently asked questions.</h1>
                                <p className="text-lg font-sans">Unable to find the answer below? <a href='/contact-us' className='underline'>Contact us.</a> </p>
                            </div>
                            {/* Right-side divider and text */}
                            <div className="absolute right-0 bottom-0 transform -translate-y-1/2 flex items-center -rotate-90 -mx-48 -my-28 ">
                                <div className="w-56 h-0.5 bg-white mx-3"></div>
                                <p className="text-xs text-white">Handcrafted Mattresses</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FAQ Content */}
                <div className="min-h-screen flex flex-col items-center mb-5">
                    <FAQ />
                </div>
            </div>

            {/* FOOTER SECTION */}
            <Footer />
        </div>
    );
}

export default FAQPage