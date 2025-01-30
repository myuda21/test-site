import React from "react";
import Image from "next/image";

interface CardItemProps {
    image: string;
    alt: string;
    text: string;
  }
  
  const CardItem: React.FC<CardItemProps> = ({ image, alt, text }) => (
    <div className="relative">
      <Image src={image} alt={alt} width={400} height={250} className="rounded" />
      <span className="absolute bottom-4 left-4 text-white font-bold">{text} →</span>
    </div>
  );

export default CardItem;