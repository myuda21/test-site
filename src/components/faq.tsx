import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpDown,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    category: "Materials",
    question: "How do your mattresses compare to major brands?",
    answer:
      "Our mattresses are designed to provide superior comfort and durability compared to major brands.",
  },
  {
    category: "Materials",
    question:
      "There are so many choices on the market today. What kinds of mattresses do you offer?",
    answer:
      "We offer a variety of mattresses including memory foam, latex, and hybrid mattresses.",
  },
  {
    category: "Materials",
    question: "How can your mattresses be so affordable?",
    answer:
      "We cut out the middleman and sell directly to consumers, reducing unnecessary costs.",
  },
  {
    category: "Materials",
    question:
      "Why do you think it is important to offer two-sided mattresses when other companies do not?",
    answer:
      "We cut out the middleman and sell directly to consumers, reducing unnecessary costs.",
  },
  {
    category: "Materials",
    question: "How are you different than major manufacturer retailers?",
    answer:
      "We cut out the middleman and sell directly to consumers, reducing unnecessary costs.",
  },
  {
    category: "Materials",
    question: "Are your mattresses tested for flammability?",
    answer:
      "We cut out the middleman and sell directly to consumers, reducing unnecessary costs.",
  },
  {
    category: "Shipping",
    question: "How long does it take to get a mattress built and delivered?",
    answer:
      "Typically, 1-2 business days are required to construct your new mattress before delivery.",
  },
  {
    category: "Shipping",
    question: "What is your delivery area?",
    answer:
      "Upon receipt of your order, a customer service team member will contact you to schedule delivery.",
  },
  {
    category: "Shipping",
    question: "How do I schedule delivery after I order?",
    answer:
      "Upon receipt of your order, a customer service team member will contact you to schedule delivery.",
  },
  {
    category: "Shipping",
    question: "Will you remove my old mattress?",
    answer:
      "Upon receipt of your order, a customer service team member will contact you to schedule delivery.",
  },
  {
    category: "Guarantee",
    question: "How does your 100 Night Comfort Guarantee work?",
    answer:
      "You can try our mattress for 100 nights, and if you're not satisfied, you can return it for a full refund.",
  },
  {
    category: "Guarantee",
    question: "How good is your guarantee?",
    answer:
      "You can try our mattress for 100 nights, and if you're not satisfied, you can return it for a full refund.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Kolom Gambar (Desktop: kiri, Mobile: atas) */}
      <div className="flex flex-col gap-4">
        <Image src="/bedFaq.png" alt="Mattress 1" width={400} height={250} />
        <Image src="/green.png" alt="Mattress 2" width={400} height={250} />
        <Image src="/smile.png" alt="Worker" width={400} height={250} />
      </div>

      {/* Kolom FAQ */}
      <div className="lg:col-span-2">
        {["Materials", "Shipping", "Guarantee"].map((category) => (
          <div key={category} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 font-sans">
              {category}
              {category === "Shipping" && (
                <span className="text-black italic text-sm ml-2">
                  Local Delivery & Set-Up
                </span>
              )}
            </h2>

            {faqData
              .filter((item) => item.category === category)
              .map((item, index) => (
                <div key={index} className="border-gray-300 mb-5">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-3 px-4 flex rounded-md justify-between items-center bg-gray-100 hover:bg-gray-200"
                  >
                    <span className="text-gray-800">{item.question}</span>
                    <span className="text-gray-500">
                      {openIndex === index ? <ChevronDown /> : <ChevronUp />}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-white text-gray-600 max-h-24 overflow-auto">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
