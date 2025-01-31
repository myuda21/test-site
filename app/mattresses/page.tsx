"use client";

import Navbar from "../home/navbar";
import Image from "next/image";
import Footer from "../home/footer";
import CommentSection from "../home/commentSection";
import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";
import FilterBar from "./filterBar";

const Mattresses = () => {
    const products = [
        { id: 1, name: "Katherine Latex", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 2, name: "Grace Firm", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 3, name: "Grace Firm", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 4, name: "Grace Firm", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 5, name: "Kelly", price: 899, image: "/product.png", rating: 0, reviews: 0 },
    ];

    const [filter, setFilter] = useState<string>("All");
    const [sort, setSort] = useState<string>("price");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true); // Set loading state saat filter berubah
        setTimeout(() => {
            const updatedProducts = filter && filter !== "All"
                ? products.filter((p) => p.name.includes(filter))
                : products;
            setFilteredProducts(updatedProducts);
            setIsLoading(false); // Matikan loading setelah data diproses
        }, 500); // Delay 500ms agar ada efek loading
    }, [filter]);

    const sortedProducts = [...filteredProducts].sort((a, b) =>
        sort === "price" ? a.price - b.price : b.rating - a.rating
    );

    return (
        <div>
            {/* NAVBAR SECTION */}
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* PRODUCT SECTION */}
                <div className="container mx-auto p-4">
                    <div className="flex justify-between">
                    <h1 className="text-2xl font-bold mb-4">Luxury Firm Mattresses</h1>
                    <FilterBar onFilterChange={setFilter} onSortChange={setSort} />
                    </div>
                    
                    {/* Loading Indicator */}
                    {isLoading ? (
                        <div className="flex justify-center items-center mt-10">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
                        </div>
                    ) : sortedProducts.length === 0 ? (
                        // Kondisi jika tidak ada produk ditemukan
                        <p className="col-span-3 text-center text-gray-500">No products found</p>
                    ) : (
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {sortedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>

                {/* COMMENT SECTION */}
                <div className="relative">
                    {/* Comment Section */}
                    <div className="relative z-20">
                        <CommentSection />
                    </div>

                    {/* Image Section */}
                    <div className="relative flex justify-center">
                        <Image
                            src="/mix-ins.png"
                            alt="Handcrafted Mattress"
                            width={900}
                            height={500}
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
};

export default Mattresses;
