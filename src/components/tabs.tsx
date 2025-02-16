import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mb-6">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${activeTab === "description" ? "border-b-2 border-black" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "comfort" ? "border-b-2 border-black" : ""}`}
          onClick={() => setActiveTab("comfort")}
        >
          Comfort Layers
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "description" && <p>The Katherine Latex Medium is a premium mattress...</p>}
        {activeTab === "comfort" && <p>This mattress has a firm layer of latex for extra comfort...</p>}
      </div>
    </div>
  );
};

export default ProductTabs;
