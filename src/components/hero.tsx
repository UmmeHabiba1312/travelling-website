import React from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import Image from 'next/image';

const Hero = () => {
  return (
    <main className="grid md:grid-cols-2 gap-6 h-auto p-6">
      {/* Left Side */}
      <div className="flex flex-col justify-center space-y-6 lg:space-y-8 px-6 md:px-12 lg:px-20">
        <h3 className="text-orange-500 font-bold text-center md:text-left">
          BEST DESTINATIONS AROUND THE WORLD
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left leading-tight">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="text-gray-500 text-center md:text-left md:text-lg lg:text-xl leading-relaxed">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it
          engrossed listening. Park Gate sell they west hard for the.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
          {/* Main Button */}
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:-translate-y-1 hover:scale-105 duration-300">
            Find Out More
          </button>
          {/* Play Demo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <FaCirclePlay className="text-red-500 text-3xl hover:text-red-600 transition-transform duration-300 hover:rotate-90" />
            <p className="text-gray-500 text-lg font-medium">Play Demo</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center">
        <Image
          className="object-cover rounded-lg "
          height={500}
          width={650}
          src="/hero-img.png"
          alt="Travel Destination"
        />
      </div>
    </main>
  );
};

export default Hero;
