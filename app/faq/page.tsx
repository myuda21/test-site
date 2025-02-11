import Navbar from '../home/navbar'
import Image from "next/image";
import CardItem from "../component/cardItem";
import Styles from './postpage.module.css'
import Footer from "../footer";
import { ArrowRight } from "lucide-react";
import Accordion from "./accordion";

const Landing = () => {
  return (
    <div className='bg-white'>
      {/* NAVBAR SECTION */}
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Kolom Gambar */}
      <div className="space-y-6">
        <Image src="/faqBed.png" width={300} height={200} alt="Mattress 1" />
        <Image src="/faqGreen.png" width={300} height={200} alt="Mattress 2" />
        <Image src="/faqPerson.png" width={300} height={200} alt="Worker" />
      </div>

      {/* Kolom FAQ */}
      <div className="col-span-2"> {/* TODO: fix texting and design */}
        <h1 className="text-2xl font-bold mb-4">Materials</h1>
        <Accordion title="How do your mattresses compare to major brands?" content="Our mattresses are high-quality..." />
        <Accordion title="There are so many choices on the market today.  What kinds of mattresses do you offer?" content="We offer memory foam, latex..." />
        <Accordion title="How can your mattresses be so affordable?" content="We offer memory foam, latex..." />
        <Accordion title="Why do you think it is important to offer two-sided mattresses  when other companies do not?" content="We offer memory foam, latex..." />
        <Accordion title="How are you different than major manufacturer retailers?" content="We offer memory foam, latex..." />
        <Accordion title="Are your mattresses tested for flammability?" content="We offer memory foam, latex..." />
        
        <h1 className="text-2xl font-bold mt-6 mb-4">Shipping <span>Local Delivery & Set</span></h1>
        <Accordion title="How long does it take to get a mattress built and delivered?" content="Typically 1-2 business days..." />
        <Accordion title="What is your delivery area?" content="Typically 1-2 business days..." />
        <Accordion title="How do I schedule delivery after I order?" content="Upon receipt of your order, a member of our customer service team will contact you to schedule delivery of your new mattress(es) during our normal business hours. Typically 1-2 business days will be required to construct your new mattress before it is available for delivery." />
        <Accordion title="Will you remove my old mattress?" content="Typically 1-2 business days..." />

        <h1 className="text-2xl font-bold mt-6 mb-4">Guarantee</h1>
        <Accordion title="How does your 100 Night Comfort Guarantee?" content="Typically 1-2 business days..." />
        <Accordion title="How good is your guarantee?" content="Typically 1-2 business days..." />
      </div>
    </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Landing