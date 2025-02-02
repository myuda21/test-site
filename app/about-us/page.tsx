import React from "react";
import Navbar from "../home/navbar";
import Image from "next/image";
import Footer from "../home/footer";
import CommentSection from "../home/commentSection";

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="font-sans max-w-6xl mx-auto px-4 py-8">

                {/* Hero Section */}
                <div className="relative w-full h-[500px] flex justify-center text-center text-white py-6 mb-12 max-w-6xl mx-auto">
                    <Image
                        src="/our-difference-banner.png"
                        alt="Megan Mattress"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-5"></div>

                    {/* Content */}
                    <div className="relative z-10 px-6">
                        <h1 className="text-3xl font-semibold md:text-4xl">Our difference.</h1>
                        <p className="mt-3 text-lg md:text-xl">
                            What Makes Us Stand Out?
                        </p>
                    </div>
                </div>

                {/* Family Owned Section */}
                <section className="container mx-auto px-6 py-12">
                    <h2 className="text-2xl font-semibold">Family Owned</h2>
                    <p className="text-gray-700 mt-4">
                        The owners, Tim Masters and his wife, Cindy, live with their five children less than a mile from the shop and are heavily invested in the community. Bob Brixie first opened the shop in 1969 - nearly 50 years ago! Tim began working for the company in 1990 and soon realized he had found his calling.
                    </p>
                    <br></br>
                    <p>He purchased the company from his mentor, Mr. Brixie, in 1995. Over the last 20+ years, Tim has grown and expanded the company to offer the latest innovations in mattresses, including memory foam, all natural latex and pocketed coil sleep systems.</p>
                </section>

                {/* American Made & Highest Quality Section */}
                <section className="relative pb-40 pt-8">
                    {/* Background Image */}
                    <div className="relative w-full h-[400px]">
                        <Image
                            src="/about-us-banner2.png"
                            alt="Factory Production"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>

                    {/* Content Box - Responsive untuk Mobile & Desktop */}
                    <div className="relative md:absolute md:top-[70%] left-1/2 transform md:-translate-x-1/2 w-11/12 max-w-5xl bg-white p-8 shadow-lg flex flex-col md:flex-row gap-8 rounded-lg mt-4 md:mt-[-60px]">
                        {/* First Column */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">American Made</h2>
                            <p className="text-gray-600 mt-2">
                                Our mattresses are handcrafted at our factory in La Grange Highlands, IL.
                                Take a virtual tour of our production facility!
                            </p>
                            <button className="mt-4 flex items-center gap-2 text-green-700 font-semibold border border-green-700 px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition">
                                VIRTUAL TOUR →
                            </button>
                        </div>

                        {/* Second Column */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">Highest Quality</h2>
                            <p className="text-gray-600 mt-2">
                                We purchase our innersprings and comfort layers from the same distributors
                                as major manufacturers. We choose the most durable innersprings and
                                heaviest weights of foam available.
                            </p>
                        </div>
                    </div>
                </section>


                {/* No Pressure & Factory-Direct Value Section */}
                <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold">No Pressure Atmosphere</h3>
                        <p className="text-gray-700 mt-2">Most of our knowledgeable associates are the same people who...</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Factory-Direct Value</h3>
                        <p className="text-gray-700 mt-2">Because we handcraft our mattresses on-site...</p>
                    </div>
                </section>

                {/* Two-sided & Custom Mattresses Section */}
                <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold">Two-sided Mattresses</h3>
                        <p className="text-gray-700 mt-2">Quality flippable mattresses...</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Custom Mattresses</h3>
                        <p className="text-gray-700 mt-2">We can build custom-sized mattresses...</p>
                    </div>
                </section>

                <div className="bg-gray-900 text-white text-center py-6">
                    <h3 className="text-lg font-semibold">Full Warranty</h3>
                    <p className="text-gray-400 mt-2">Our factory offers a full 10-year warranty...</p>
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
                {/* FOOTER SECTION */}

            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;