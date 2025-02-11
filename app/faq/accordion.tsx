"use client"

import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left p-4 text-gray-800 font-medium bg-gray-100 hover:bg-gray-200 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700 bg-white">{content}</div>
      )}
    </div>
  );
};

export default Accordion;
