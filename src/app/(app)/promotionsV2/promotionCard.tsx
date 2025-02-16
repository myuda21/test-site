'use client';
import { useState } from 'react';

interface Promotion {
    code: string;
    discount: string;
    description: string;
    details?: string;
    image: string;
}

const PromotionCard = ({ promo }: { promo: Promotion }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-gray-700 overflow-hidden relative">
            <div className="bg-white text-black p-1 px-3 font-semibold text-sm inline-block m-5">
                Use Code: {promo.code}
            </div>
            <div className="px-5 py-2">
                <h2 className="text-2xl font-bold text-white">{promo.discount}</h2>
                <p className="text-white">{promo.description}</p>
            </div>
            <div 
                className="relative w-full h-40 cursor-pointer"
                onMouseEnter={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}
            >
                <img
                    src={promo.image}
                    alt={promo.description}
                    className="w-full h-full object-cover"
                />
                {showDetails && (
                    <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center text-white p-3 text-sm">
                        {promo.details || "No additional details available."}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PromotionCard;