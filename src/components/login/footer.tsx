import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <><div className=' text-black py-6 px-4 md:px-12 flex justify-center'>
        
    <footer className="bg-gray-100 text-black py-6 px-4 w-[84%] md:px-12">
          {/* Top Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-4">
              {/* Address & Contact */}
              <div>
                  <h2 className="font-bold">ADDRESS</h2>
                  <p>2381 La Mirada Dr. Vista, CA 92081</p>
                  <h2 className="font-bold mt-4">CONTACT</h2>
                  <p>info@mealprepsundaysandiego.com</p>
                  <h2 className="font-bold mt-4">PHONE</h2>
                  <p>(888) 632-5918</p>
              </div>

              {/* Links */}
              <div>
                  <h2 className="font-bold">MY ACCOUNT</h2>
                  <ul className="space-y-2">
                      <li>Blogs</li>
                      <li>About Us</li>
                      <li>FAQ</li>
                  </ul>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col">
                  <span className="font-bold">Follow Us!</span>
                  <div className="flex gap-3 mt-2">
                      <FaFacebookF className="text-xl cursor-pointer" />
                      <FaInstagram className="text-xl cursor-pointer" />
                      <FaTwitter className="text-xl cursor-pointer" />
                      <FaYelp className="text-xl cursor-pointer" />
                  </div>
              </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-4 px-4">
              <div className="flex gap-4">
                  <span>Privacy</span>
                  <span>Terms and Conditions</span>
              </div>
              <p className="text-center md:text-right mt-2 md:mt-0">
                  Betting App San Diego 2023 © All rights reserved.
              </p>
          </div>
      </footer>
      <div className="absolute -right-8 mt-2 hidden md:block">
  <img
    src="Shades.svg"
    alt="random"
    className="w-full h-full rotate-[129.27deg]"
  />
</div>

<div className="absolute -left-8 mt-40 hidden md:block">
  <img
    src="Shades.svg"
    alt="random"
    className="w-full h-full rotate-[309.27deg]"
  />
</div>

      </div></>
  );
};

export default Footer;
