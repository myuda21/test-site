"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import React from "react";
import Image from "next/image";

const Mattresses = () => {
    const products = [
        { id: 1, name: "Katherine Latex", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 2, name: "Grace Firm", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 3, name: "Grace Firm", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 4, name: "Grace Firm", price: 949, image: "/product.png", rating: 4.5, reviews: 14 },
        { id: 5, name: "Kelly", price: 899, image: "/product.png", rating: 0, reviews: 0 },
    ];

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="relative flex-col">
                    <h2 className="text-2xl font-bold mb-4">Accessories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="border p-4 rounded shadow-sm">
                                <Image src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                <p className="text-gray-600">${product.price}</p>
                                <p className="text-sm text-yellow-500">Rating: {product.rating} ({product.reviews} reviews)</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Mattresses;