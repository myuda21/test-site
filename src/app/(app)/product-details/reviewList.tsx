import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ReviewList = ({
    reviews,
}: {
    reviews: { name: string; comment: string; rating: number; verified: boolean }[];
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle navigation
    const handleNext = () => {
        if (currentIndex < reviews.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="relative flex items-center">
                {/* Arrow Navigation */}
                <button onClick={handlePrev} className="p-2 bg-white rounded-full shadow-md">
                    <ChevronLeft size={24} />
                </button>


                <div className="flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: "100%" }}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className="border border-gray-200 p-4 rounded-md mx-2 flex-shrink-0 w-80">
                                {/* Name and Verified Buyer */}
                                <p className="font-semibold">{review.name}</p>
                                {review.verified && (
                                    <p className="text-green-500 text-sm">✅ Verified Buyer</p>
                                )}

                                {/* Star Rating */}
                                <p className="text-yellow-500">{'⭐'.repeat(Math.floor(review.rating))}</p>

                                {/* Comment */}
                                <p className="text-gray-600 italic">&quot;{review.comment}&quot;</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleNext} className="p-2 bg-white rounded-full shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ReviewList;