import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
// import { FaLocationArrow } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <main>
      <div className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 mx-8 md:mx-32 rounded-tl-[90px] pt-16 pb-12">
        {/* Subscription Header */}
        <p className="text-white font-medium text-2xl md:text-3xl text-center px-4 md:px-0">
          Stay Updated with the Latest News, Information, and Special Offers from Jadoo!
        </p>

        {/* Subscription Form */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-6">
          
          {/* Input Box */}
          <div className="flex items-center  rounded-lg  w-full md:w-[60%] px-6 py-4">
            <MdOutlineEmail className="text-3xl text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full py-2 px-4 ml-3 text-gray-700 placeholder-gray-400 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Subscribe Button */}
          <div className="mt-4 md:mt-0">
            <button
              className="bg-orange-500 text-white py-3 px-6 font-semibold rounded-full shadow-lg transform hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Subscribe;
