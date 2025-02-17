import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  filters?: string[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex space-x-1 mt-2">
        {Array.from({ length: fullStars }, (_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <a href="/product-details">
      <div className="px-10 py-2">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-cover"
        />
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">From ${product.price}</p>
          </div>
          <div>
            {renderStars(product.rating)}
            <p className="text-gray-500 mt-2">{product.reviews} Reviews</p>
          </div>
        </div>

        {/* Features/Filters */}
        <div className="flex flex-wrap mt-2">
          {product.filters?.map((filter, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-semibold mb-2 mr-2"
            >
              {filter}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;