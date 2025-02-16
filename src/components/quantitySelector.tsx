import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="flex items-center mb-4">
      <button className="border px-3" onClick={decrement}>-</button>
      <span className="px-4 border">{quantity.toString().padStart(2, "0")}</span>
      <button className="border px-3" onClick={increment}>+</button>
    </div>
  );
};

export default QuantitySelector;
