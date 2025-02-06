"use client";

import Navbar from "../home/navbar";
import Image from "next/image";
import Footer from "../footer";
import CommentSection from "../commentSection";
import React, { useState, useEffect } from "react";

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
                {/* TODO: add section here */}
                {/* COMMENT SECTION */}
                <div className="relative flex-col">
                </div>
            </div>

            {/* FOOTER SECTION */}
            <Footer />
        </div>
    );
};

export default Mattresses;
