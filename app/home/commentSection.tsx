"use client"

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const comments = [
    {
        id: 1,
        text: "So comfortable for all types of sleepers. Definitely worth the price!",
        author: "Alya from Brooklyn, NY",
    },
    {
        id: 2,
        text: "Best mattress I’ve ever had! Amazing quality.",
        author: "John from LA, CA",
    },
    {
        id: 3,
        text: "Incredible softness and support, I sleep so much better now.",
        author: "Emily from Chicago, IL",
    },
    {
        id: 4,
        text: "I was skeptical at first, but this mattress is life-changing!",
        author: "Mike from Austin, TX",
    },
    {
        id: 5,
        text: "Would definitely buy again. Great product and fast delivery.",
        author: "Sarah from Miami, FL",
    },
];

const CommentSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextComment = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    };

    const prevComment = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
    };

    return (
        <div className="relative bg-pink-50 py-12 px-6 text-center overflow-hidden w-full h-[400px] flex justify-center items-center">

            <div className="relative z-10 text-center">
                {/* Stars */}
                <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>

                {/* Comment Content */}
                <p className="text-lg font-semibold text-gray-900 italic">
                    "{comments[currentIndex].text}"
                </p>
                <p className="text-sm text-gray-700 mt-2">{comments[currentIndex].author}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 px-4 transform -translate-y-1/2 flex justify-between">
                <button onClick={prevComment} className="p-2 bg-white rounded-full shadow-md">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextComment} className="p-2 bg-white rounded-full shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default CommentSection;