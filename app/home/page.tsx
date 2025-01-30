
import Navbar from './navbar'
import Image from "next/image";
import CardItem from "../component/cardItem";
import Styles from './postpage.module.css'
import Footer from "./footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="">
          <Image
            src="/home-menu-image.png"
            alt="Food"
            layout="responsive"
            width={100}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4 mt-6">
            <CardItem image="/shop-adult.png" alt="Shop Adult" text="Shop Adult" />
            <CardItem image="/shop-kids.png" alt="Shop Kids" text="Shop Kids" />
            <CardItem image="/shop-guest-room.png" alt="Shop Guest Room" text="Shop Guest Room" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing