"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import ProductCard from "./productCard";
import FilterBar from "./filterBar";
import React, { useState, useEffect } from "react";

const products = [
    { id: 1, name: "Katherine Latex", price: 949, image: "/product.png", rating: 4.5, reviews: 14, filters: ["Sleep Cooler", "Firm Seating Edge", , "Shop Kids", , "Firm Seating Edge"] },
    { id: 2, name: "Grace Firm", price: 949, image: "/product.png", rating: 4.5, reviews: 14, filters: ["Sleep Cooler"] },
    { id: 3, name: "Kelly", price: 899, image: "/product.png", rating: 3, reviews: 10, filters: ["Organic"] },
    { id: 4, name: "Harmony", price: 899, image: "/product.png", rating: 5, reviews: 10, filters: ["Firm Seating Edge"] },
    { id: 5, name: "Celeste", price: 899, image: "/product.png", rating: 0, reviews: 10, filters: ["Luxury"] },
];

const Mattresses = () => {
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("price");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            let updatedProducts = filter !== "All" ? products.filter((p) => p.name.includes(filter)) : products;
            updatedProducts = sort === "price" ? updatedProducts.sort((a, b) => a.price - b.price) : updatedProducts.sort((a, b) => b.rating - a.rating);
            setFilteredProducts(updatedProducts);
            setIsLoading(false);
        }, 500);
    }, [filter, sort]);

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold mb-4">Luxury Firm Mattresses</h1>
                    <FilterBar onFilterChange={setFilter} onSortChange={setSort} />
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center mt-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500">No products found</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Mattresses;