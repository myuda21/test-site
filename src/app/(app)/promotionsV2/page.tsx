'use client';
import { useState } from 'react';
import Navbar from "../navbar";
import Footer from "../footer";
import PromotionCard from './promotionCard';

const promotions = [
  { code: 'Honor', discount: 'Save $100', description: 'on our Latex Mattresses', image: '/wakeup.png', details: "tes" },
  { code: 'New', discount: 'Save $50', description: 'on our New Mattresses', image: '/wakeup.png' },
  { code: 'Premium', discount: 'Save 25%', description: 'on our Premium Mattresses', image: '/wakeup.png' },
  { code: 'King', discount: 'Save $150', description: 'on our King Mattresses', image: '/wakeup.png' },
  { code: 'Queen', discount: 'Save $120', description: 'on our Queen Mattresses', image: '/wakeup.png' },
  { code: 'Comfort', discount: 'Save 20%', description: 'on our Comfort Mattresses', image: '/wakeup.png' },
  { code: 'Spring', discount: 'Save $80', description: 'on our Spring Mattresses', image: '/wakeup.png' },
  { code: 'Foam', discount: 'Save 15%', description: 'on our Foam Mattresses', image: '/wakeup.png' },
  { code: 'Luxury', discount: 'Save 30%', description: 'on our Luxury Mattresses', image: '/wakeup.png' },
  { code: 'Eco', discount: 'Save 10%', description: 'on our Eco-Friendly Mattresses', image: '/wakeup.png' }
];

const PromotionsV2 = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, promotions.length));
  };
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.slice(0, visibleCount).map((promo, index) => (
          <PromotionCard key={index} promo={promo} />
        ))}
      </div>
      {visibleCount < promotions.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-black text-white py-2 px-6 rounded-full font-semibold text-md hover:bg-gray-800 transition-all"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
      <Footer />
    </div>
  );
}

export default PromotionsV2;
