"use client";

import Navbar from "../home/navbar";
import Image from "next/image";
import Footer from "../footer";
import CommentSection from "../commentSection";
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
            </div>

            {/* FOOTER SECTION */}
            <Footer />
        </div>
    );
};

export default Mattresses;
