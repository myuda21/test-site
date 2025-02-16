import React, { useState } from "react";

const sizes = ["Twin", "Twin XL", "Full", "Queen", "King", "Cal. King"];

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("Queen");

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select a Size</h3>
      <div className="grid grid-cols-3 gap-2">
        {sizes.map((size) => (
          <div key={size} className="border border-black overflow-hidden p-1">
            <button
              className={`w-full h-full px-6 py-3 font-medium transition-colors duration-300 ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;

