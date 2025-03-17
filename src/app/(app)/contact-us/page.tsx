import Navbar from '../navbar';
import Image from "next/image";
import Footer from "../footer";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* NAVBAR SECTION */}
      <Navbar />
      {/* BANNER SECTION */}
      <div className='m-auto px-5'>
      <div className="relative w-full h-[600px] mb-2 ">
          <Image
            src="/adult-room.png"
            alt="Military Discount"
            layout="fill"
            objectFit="object-none"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col text-white px-6">
            <div className="text-center md:flex md:items-center md:justify-center w-full relative">
              <div className="md:w-1/2 my-16">
                <h1 className="text-3xl font-sans mb-3">Contact us.</h1>
                <p className="text-lg font-sans">We’d be delighted to hear from you.</p>
              </div>
              {/* Right-side divider and text */}
              <div className="absolute right-0 bottom-0 transform -translate-y-1/2 flex items-center -rotate-90 -mx-48 -my-28 ">
                <div className="w-56 h-0.5 bg-white mx-3"></div>
                <p className="text-xs text-white">Family Owned.  American Made.</p>
              </div>
            </div>
          </div>
        </div>
        </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Title */}

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 text-gray-800">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-500 mt-1" />
              <p className="text-lg">
                <strong>1519 W. 55th Street</strong> <br />
                La Grange Highlands, IL 60525
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-gray-500" />
              <p className="text-lg">(708) 246-2224</p>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-gray-500 mt-1" />
              <p className="text-lg">
                Monday - Friday: 10am-6pm <br />
                Saturday: 10am-5pm | Sunday: 11am-4pm
              </p>
            </div>

            <p className="text-gray-500 text-sm mt-2">
              *We deliver within a 40 mile radius, fees apply outside of 10 miles from our store.
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-100"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg border border-gray-300 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-100"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 rounded-lg border border-gray-300 mb-3 h-24 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-100"
              ></textarea>
              <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transition">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 mt-10">
        <iframe
          className="w-full h-full rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.349048267788!2d-87.85941682339183!3d41.79052867123625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e48b3c4f24965%3A0xc7878b67841fc1cb!2s1519%20W%2055th%20St%2C%20La%20Grange%20Highlands%2C%20IL%2060525!5e0!3m2!1sen!2sus!4v1707513362201!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};

export default ContactUs;
