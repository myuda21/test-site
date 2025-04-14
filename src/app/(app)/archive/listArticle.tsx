"use client";

import { useState } from "react";
import Image from "next/image";

const articles = [
  {
    title: "Be a Better Mattress Shopper: Insights from Our COVID-19 Shopping Study",
    date: "May 26, 2021",
    content:
      "From curbside grocery pickups to daily deliveries from Amazon, COVID-19 has had a heavy impact on the way we shop for almost everything, including mattresses...",
    image: "/wakeup.png",
  },
  {
    title: "Financial Stress Robbing You of Sleep? Here’s How to Take It Back.",
    date: "May 2, 2021",
    content: "It’s hard to hit the hay when the cows are mooing...",
    image: "/wakeup.png",
  },
  {
    title: "Study Shows Good Savers Are Better Sleepers",
    date: "April 26, 2021",
    content: "Looking for a better night’s rest? Try stuffing some money...",
    image: "/wakeup.png",
  },
  {
    title: "How to Choose the Perfect Mattress for Your Needs",
    date: "April 10, 2021",
    content: "Choosing the right mattress can be overwhelming...",
    image: "/wakeup.png",
  },
  {
    title: "The Science Behind a Good Night’s Sleep",
    date: "March 22, 2021",
    content: "Understanding sleep cycles and how they impact...",
    image: "/wakeup.png",
  },
  {
    title: "Tips for Better Sleep Hygiene",
    date: "March 5, 2021",
    content: "Sleep hygiene refers to habits that help you...",
    image: "/wakeup.png",
  },
  {
    title: "Why Your Pillow Matters More Than You Think",
    date: "February 15, 2021",
    content: "Your pillow supports your head and neck...",
    image: "/wakeup.png",
  },
];

const ListArticle = () => {
  const [visibleArticles, setVisibleArticles] = useState(3);

  const loadMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-32 py-12">
      {articles.slice(0, visibleArticles).map((article, index) => (
        <div
          key={index}
          className="mb-10 flex flex-col md:flex-row items-center md:items-start"
        >
          <div className="relative w-full md:w-[500px] h-[300px] md:mr-6">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 500px"
              priority={index < 3} // Optional: Prioritize first few images for faster LCP
            />
          </div>
          <div className="mt-4 md:mt-0 w-full">
            <h2 className="text-xl font-bold mb-2 font-sans">{article.title}</h2>
            <p className="text-blue-300 mb-2 text-sm font-sans">{article.date}</p>
            <p className="text-gray-700 font-sans mb-1 text-sm">{article.content}</p>
            <a href="/article" className="font-bold text-xs font-sans">
              READ MORE &gt;
            </a>
          </div>
        </div>
      ))}

      {visibleArticles < articles.length && (
        <button
          onClick={loadMore}
          className="bg-black text-white px-6 py-2 rounded-3xl mt-4 mx-auto block"
        >
          LOAD MORE ARTICLES
        </button>
      )}
    </div>
  );
};

export default ListArticle;
