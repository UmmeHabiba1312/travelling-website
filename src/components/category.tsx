import React from 'react';
import Image from 'next/image';

const Category = () => {
  return (
    <main className="lg:mt-3 sm:pt-96 md:pt-24 px-6 lg:px-16">
      {/* Header */}
      <h2 className="text-gray-500 font-bold text-center">CATEGORY</h2>
      <h1 className="text-4xl font-bold text-center mt-3">We Offer Best Services</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {/* Card 1 */}
        <div className="h-72 w-full max-w-xs mx-auto rounded-2xl bg-white shadow-md hover:bg-slate-50 transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center mt-8">
            <Image
              height={80}
              width={80}
              src="/weather.png"
              alt="Weather Icon"
            />
          </div>
          <h3 className="text-center font-semibold text-lg mt-4">Calculated Weather</h3>
          <p className="text-center text-gray-500 mt-3">
            Built Wicket longer <br /> admire do barton vanity <br /> itself do in it.
          </p>
        </div>

        {/* Card 2 */}
        <div className="h-72 w-full max-w-xs mx-auto rounded-2xl bg-white shadow-md hover:bg-slate-50 transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center mt-8">
            <Image
              height={80}
              width={80}
              src="/flights.png"
              alt="Flights Icon"
            />
          </div>
          <h3 className="text-center font-semibold text-lg mt-4">Best Flights</h3>
          <p className="text-center text-gray-500 mt-3">
            Engrossed listening. <br /> Park gate sell they <br /> west hard for the.
          </p>
        </div>

        {/* Card 3 */}
        <div className="h-72 w-full max-w-xs mx-auto rounded-2xl bg-white shadow-md hover:bg-slate-50 transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center mt-8">
            <Image
              height={80}
              width={80}
              src="/events.png"
              alt="Events Icon"
            />
          </div>
          <h3 className="text-center font-semibold text-lg mt-4">Local Events</h3>
          <p className="text-center text-gray-500 mt-3">
            Barton vanity itself do <br /> in it. Preferred to men it <br /> engrossed listening.
          </p>
        </div>

        {/* Card 4 */}
        <div className="h-72 w-full max-w-xs mx-auto rounded-2xl bg-white shadow-md hover:bg-slate-50 transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center mt-8">
            <Image
              height={80}
              width={80}
              src="/cutomize.png"
              alt="Customization Icon"
            />
          </div>
          <h3 className="text-center font-semibold text-lg mt-4">Customization</h3>
          <p className="text-center text-gray-500 mt-3">
            We deliver outsourced <br /> aviation services for <br /> military customers.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Category;
