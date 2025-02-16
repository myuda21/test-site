import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <a href="/product-details"> {/*TODO: ganti kalau dinamis*/}
      <div className="p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="object-cover"
        />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600">From ${product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating} ({product.reviews} Reviews)</p>
      </div>
    </a>
  );
};

export default ProductCard;