import Navbar from '../home/navbar'
import Image from "next/image";
import CardItem from "../component/cardItem";
import Styles from './postpage.module.css'
import Footer from "../footer";
import "./postpage.module.css"
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className='bg-white'>
      {/* NAVBAR SECTION */}
      <Navbar />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Landing