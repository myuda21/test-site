'use client';
import Navbar from "../navbar";
import Footer from "../footer";
import Image from 'next/image';

export default function MilitaryDiscount() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto text-gray-900 px-5">
        
        {/* Header Section */}
        <div className="relative w-full h-[500px] mb-2">
          <Image 
            src="/usa.png" 
            alt="Military Discount" 
            layout="fill" 
            objectFit="object-none" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
            <div className="text-center md:flex md:items-center md:justify-center w-full relative">
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold">Military Discount</h1>
                <p className="text-lg">Our way of saying thanks.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Discount Info Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center max-w-7xl px-16">
          <div>
            <Image src="/usaFlagHug.png" alt="Soldier and Child" width={500} height={300} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Enjoy a $50 Discount</h2>
            <p className="mt-4">
              My Green Mattress is happy to offer a $50 military discount to those who serve or have served in the military.
              We also extend this discount to first responders as well as those on the front line of COVID-19 relief.
            </p>
            <p className="mt-4">
              This discount cannot be used with multiple offers or sale items and is only applicable to orders over $500.
            </p>
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center px-16 py-10">
          <div>
            <h2 className="text-2xl font-semibold">How Do I get my $50 Discount?</h2>
            <p className="mt-4">To qualify, email <strong>marketing@mygreenmattress.com</strong> with:</p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Proof of service (military ID, official document, etc.)</li>
              <li>Email address or image of an official first responder ID</li>
              <li>The name of the person placing the order</li>
            </ul>
            <p className="mt-4">Once verified, we will respond with the discount code.</p>
          </div>
          <div>
            <Image src="/bed.png" alt="Mattress" width={500} height={300} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
