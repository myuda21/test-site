const ReviewList = ({
    reviews,
  }: {
    reviews: { name: string; comment: string; rating: number; verified: boolean }[];
  }) => {
    return (
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 mb-4">
            {/* Nama dan Verified Buyer */}
            <p className="font-semibold">{review.name}</p>
            {review.verified && <p className="text-green-500 text-sm">✅ Verified Buyer</p>}
  
            {/* Bintang Rating */}
            <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
  
            {/* Komentar */}
            <p className="text-gray-600 italic">&quot;{review.comment}&quot;</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ReviewList;