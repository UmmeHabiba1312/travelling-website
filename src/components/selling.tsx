import React from 'react';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

const Selling = () => {
  return (
    <main className="mt-16 px-4 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-gray-500 font-semibold uppercase">Top Selling</h3>
        <h1 className="text-black font-extrabold text-3xl sm:text-4xl mt-2">Top Destinations</h1>
      </div>

      {/* Cards Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <Image
            className="rounded-t-2xl w-full h-60 object-cover"
            src="/itally.jpg"
            alt="Rome, Italy"
            height={300}
            width={500}
          />
          <div className="p-6">
            <div className="flex justify-between text-gray-700 font-semibold">
              <p>Rome, Italy</p>
              <p>$5,42k</p>
            </div>
            <div className="flex items-center mt-4 gap-2 text-gray-500">
              <FaLocationArrow className="text-orange-500" />
              <p>10 Days Trip</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <Image
            className="rounded-t-2xl w-full h-60 object-cover"
            src="/uk.jpg"
            alt="London, UK"
            height={300}
            width={500}
          />
          <div className="p-6">
            <div className="flex justify-between text-gray-700 font-semibold">
              <p>London, UK</p>
              <p>$4.2k</p>
            </div>
            <div className="flex items-center mt-4 gap-2 text-gray-500">
              <FaLocationArrow className="text-orange-500" />
              <p>12 Days Trip</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <Image
            className="rounded-t-2xl w-full h-60 object-cover"
            src="/roup.jpg"
            alt="Full Europe"
            height={300}
            width={500}
          />
          <div className="p-6">
            <div className="flex justify-between text-gray-700 font-semibold">
              <p>Full Europe</p>
              <p>$15k</p>
            </div>
            <div className="flex items-center mt-4 gap-2 text-gray-500">
              <FaLocationArrow className="text-orange-500" />
              <p>28 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Selling;
