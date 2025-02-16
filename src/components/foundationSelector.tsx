import React from "react";

const FoundationSelector = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Add a Foundation</h3>
      <select className="border px-4 py-2 rounded w-full">
        <option>No Foundation</option>
        <option>Box Spring</option>
        <option>Adjustable Base</option>
      </select>
    </div>
  );
};

export default FoundationSelector;