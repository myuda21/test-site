'use client';

interface Promotion {
    code: string;
    discount: string;
    description: string;
    details?: string;
    image: string;
}

const PromotionCard = ({ promo }: { promo: Promotion }) => {
    return (
        <div className="bg-gray-700 overflow-hidden">
            <div className="bg-white text-black p-1 px-3 font-semibold text-sm inline-block m-5">
                Use Code: {promo.code}
            </div>
            <div className="px-5 py-2">
                <h2 className="text-2xl font-bold text-white">{promo.discount}</h2>
                <p className="text-white">{promo.description}</p>
                {promo.details && <p className="text-gray-500 text-sm mt-2">{promo.details}</p>}
            </div>
            <img
                src={promo.image}
                alt={promo.description}
                className="w-full h-50 object-cover"
            />
        </div>
    );
};

export default PromotionCard;
