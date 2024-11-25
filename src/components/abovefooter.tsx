import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlay, FaApple } from 'react-icons/fa';

const AboveFooter = () => {
  return (
    <main className="mt-[100px] mx-4 md:mx-20 lg:mx-[110px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0">Jadoo.</h3>
          <p className="text-gray-600 text-center font-medium max-w-xs">
            Back your trip in minutes. Get full control for much longer.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center space-y-2 md:space-y-3">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Company</h3>
          <p className="font-medium text-gray-500">About</p>
          <p className="font-medium text-gray-500">Careers</p>
          <p className="font-medium text-gray-500">Mobiles</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center space-y-2 md:space-y-3">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Contact</h3>
          <p className="font-medium text-gray-500">Help/FAQ</p>
          <p className="font-medium text-gray-500">Press</p>
          <p className="font-medium text-gray-500">Affiliates</p>
        </div>

        {/* More Links */}
        <div className="flex flex-col items-center space-y-2 md:space-y-3">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">More</h3>
          <p className="font-medium text-gray-500">Airline Fees</p>
          <p className="font-medium text-gray-500">Airline</p>
          <p className="font-medium text-gray-500">Low Fare Tips</p>
        </div>

        {/* Social & App Links */}
        <div className="flex flex-col items-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4 text-3xl text-gray-700">
            <div className="bg-gray-200 p-2 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
              <FaFacebook />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer">
              <FaTwitter />
            </div>
          </div>

          <h4 className="text-gray-600 font-semibold mt-4">Discover Our App</h4>

          {/* App Store & Play Store Buttons */}
          <div className="flex flex-col gap-3 mt-4 md:flex-row md:gap-4">
            <button className="bg-black text-white flex items-center rounded-lg shadow-md p-3 md:p-3 hover:bg-gray-800 transition-all duration-300 w-full md:w-[150px]">
              <FaGooglePlay className="text-2xl md:text-3xl mr-2" />
              <div>
                <p className="text-xs text-gray-400">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </button>

            <button className="bg-black text-white flex items-center rounded-lg shadow-md p-3 md:p-3 hover:bg-gray-800 transition-all duration-300 w-full md:w-[150px]">
              <FaApple className="text-2xl md:text-3xl mr-2" />
              <div>
                <p className="text-xs text-gray-400">Available on the</p>
                <p className="text-sm font-semibold">Apple Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboveFooter;
