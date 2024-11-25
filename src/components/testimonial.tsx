import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <main className="mt-20 mx-4 lg:mx-20 px-4 md:px-10">
      <div className="text-center">
        <h3 className="text-gray-500 font-semibold uppercase tracking-wide">TESTIMONIALS</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
          What People Say About Us
        </h1>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-16">
        {/* Testimonial Card 1 */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-xl max-w-xs w-full p-6 transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
            <div className="flex justify-center mb-4">
              <Image 
                className="rounded-full"
                src="/anime-girl.jpg" 
                alt="Customer Testimonial"
                height={100}
                width={100}
              />
            </div>
            <div className="text-center">
              <p className="text-slate-500 text-lg font-medium mb-4">
                On the windows talking pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.
              </p>
              <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
              <p className="text-sm text-gray-400">Customer</p>
            </div>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-xl max-w-xs w-full p-6 transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
            <div className="flex justify-center mb-4">
              <Image 
                className="rounded-full"
                src="/anime-girl.jpg" 
                alt="Customer Testimonial"
                height={100}
                width={100}
              />
            </div>
            <div className="text-center">
              <p className="text-slate-500 text-lg font-medium mb-4">
                On the windows talking pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.
              </p>
              <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-sm text-gray-400">Customer</p>
            </div>
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-xl max-w-xs w-full p-6 transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
            <div className="flex justify-center mb-4">
              <Image 
                className="rounded-full"
                src="/anime-girl.jpg" 
                alt="Customer Testimonial"
                height={100}
                width={100}
              />
            </div>
            <div className="text-center">
              <p className="text-slate-500 text-lg font-medium mb-4">
                Amazing service. The whole experience was smooth and enjoyable from start to finish. Highly recommended for anyone looking for a seamless experience.
              </p>
              <h4 className="text-lg font-semibold text-gray-800">Alice Williams</h4>
              <p className="text-sm text-gray-400">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Testimonial;
