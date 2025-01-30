import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-8">
          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Mattresses</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
              <li><a href="#" className="hover:underline">Platforms</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ's</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Military Discount</a></li>
              <li><a href="#" className="hover:underline">Promotions</a></li>
              <li><a href="#" className="hover:underline">Financing</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <p className="mb-1">(708) 246-2244</p>
            <p className="mb-1"><a href="#" className="hover:underline">1519 W. 55th St.</a></p>
            <p><a href="#" className="hover:underline">La Grange Highlands, IL 60525</a></p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="hover:opacity-75">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:opacity-75">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="text-center text-sm space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-4">
          © 2016 Quality Sleep Shop 1519 W. 55th Street La Grange Highlands, Illinois 60525
        </p>
      </div>
    </div>
  );
};

export default Footer;