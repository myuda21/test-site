"use client";

import React from "react";
import Navbar from "../home/navbar";
import Image from "next/image";
import Footer from "../footer";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow max-w-6xl mx-auto px-4 py-8 mb-8">
                {/* Hero Section */}
                <div className="relative w-full h-[500px] flex justify-center text-center text-white py-6 mb-12">
                    <Image
                        src="/our-difference-banner.png"
                        alt="Megan Mattress"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-5"></div>
                    <div className="relative z-10 px-6">
                        <h1 className="text-3xl font-semibold md:text-4xl">Our difference.</h1>
                        <p className="mt-3 text-lg md:text-xl">What Makes Us Stand Out?</p>
                    </div>
                </div>

                {/* Family Owned Section */}
                <section className="container mx-auto px-6 py-12">
                    <h2 className="text-2xl font-semibold">Family Owned</h2>
                    <p className="text-gray-700 mt-4">
                        The owners, Tim Masters and his wife, Cindy, live with their five children less than a mile from the shop and are heavily invested in the community. Bob Brixie first opened the shop in 1969 - nearly 50 years ago! Tim began working for the company in 1990 and soon realized he had found his calling.
                    </p>
                    <br />
                    <p>
                        He purchased the company from his mentor, Mr. Brixie, in 1995. Over the last 20+ years, Tim has grown and expanded the company to offer the latest innovations in mattresses, including memory foam, all natural latex and pocketed coil sleep systems.
                    </p>
                </section>

                {/* American Made & Highest Quality Section */}
                <section className="relative pb-52 pt-8">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src="/about-us-banner2.png"
                            alt="Factory Production"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="absolute"
                        />
                    </div>
                    <div className="relative md:absolute md:top-[70%] left-1/2 transform md:-translate-x-1/2 w-11/12 max-w-5xl bg-white p-8 shadow-lg flex flex-col md:flex-row gap-8 rounded-lg z-10 -mt-10">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">American Made</h2>
                            <p className="text-gray-600 mt-2">Our mattresses are handcrafted at our factory in La Grange Highlands, IL. Take a virtual tour of our production facility!</p>
                            <div className='relative my-4' style={{ paddingTop: '0.001rem', paddingBottom: '0.001rem', }}> {/* GABOLEH DIGANGGU GUGAT SUSAH MENYESUAIKANNYA */}
                                <div className='absolute border-4 border-white z-5 w-3/4 h-full'></div>
                                <button className="border rounded-full border-black p-2 w-3/4 flex justify-center my-0.5">
                                    VIRTUAL TOUR <span className='mx-3'> | </span> <ArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">Highest Quality</h2>
                            <p className="text-gray-600 mt-2">We purchase our innersprings and comfort layers from the same distributors as major manufacturers. We choose the most durable innersprings and heaviest weights of foam available. Our mattresses surpass the quality of major brand mattresses at each price point.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="relative flex justify-center text-center text-white px-6 md:px-7 lg:px-10 py-10">
                {/* Gambar Background */}
                <div className="relative w-full max-w-[1200px] h-[500px] mx-auto overflow-hidden">
                    <Image
                        src="/shop-accessories.png"
                        alt="Megan Mattress"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-35"></div>

                    {/* Konten di Tengah */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
                        <h1 className="text-3xl font-semibold md:text-4xl">Family owned. American made. Highest Quality</h1>
                    </div>
                </div>
            </div>

            {/* Konten Bawah */}

            <div className="max-w-6xl mx-auto px-4 py-8 mb-8">
                {/* Informational Sections */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
                    <div>
                        <Image
                            src="/jahit.png"
                            alt="Factory Production"
                            width={300}
                            height={100}
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">No Pressure Atmosphere</h2>
                        <p className="text-gray-700 mt-4">
                            Most of our knowledgeable salespeople are the same people who handcraft the mattresses. 
                            With their knowledge of quality construction and durability, they guide you to the perfect mattress.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6">Factory-Direct Value</h2>
                        <p className="text-gray-700 mt-4">
                            We handcraft our mattresses on-site, cutting out the middleman and keeping prices low.
                        </p>
                    </div>
                </section>

                <section className="relative w-full h-[400px] flex items-center">
                    <Image
                        src="/shop-accessories.png"
                        alt="Two-sided Mattress"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="relative z-10 text-white px-8 md:px-16">
                        <h2 className="text-2xl font-semibold">Two-sided Mattresses</h2>
                        <p className="mt-2 text-lg">We offer mattresses with the option to flip, extending their lifespan.</p>
                        <h2 className="text-2xl font-semibold mt-6">Custom Mattresses</h2>
                        <p className="mt-2 text-lg">We create custom mattresses for RVs, boats, and antique beds.</p>
                    </div>
                </section>

                <section className="bg-blue-900 text-white py-8 px-6 text-center mt-12 rounded-lg">
                    <h2 className="text-2xl font-semibold">Full Warranty</h2>
                    <p className="mt-4">We offer a full warranty on all mattress choices and a 100 Night Sleep Trial.</p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;

