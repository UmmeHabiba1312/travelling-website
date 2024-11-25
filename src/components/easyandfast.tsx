import React from 'react';
import Image from 'next/image';
import { ImLeaf } from 'react-icons/im';
import { RiKanbanView2 } from 'react-icons/ri';
import { FaLocationArrow } from 'react-icons/fa';
import { HiChartBar } from 'react-icons/hi2';
import { FaRegHeart } from 'react-icons/fa6';

const EasyAndFast = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center mt-16 px-4 lg:px-16 gap-16">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full lg:pl-16 mb-8 lg:mb-0">
        <h3 className="text-gray-600 font-semibold uppercase">Easy and Fast</h3>
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold mt-1">
          Book Your Next Trip In 3 Easy Steps
        </h1>

        <div className="mt-8 space-y-8">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <Image
              className="h-14 w-14"
              src="/one.PNG"
              alt="Step 1: Choose Destination"
              height={500}
              width={500}
            />
            <div>
              <h4 className="text-gray-600 font-semibold">Choose Destination</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore culpa voluptas provident, corporis, ipsum vel dolorem repudiandae eaque.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <Image
              className="h-14 w-14"
              src="/two.PNG"
              alt="Step 2: Make Payment"
              height={500}
              width={500}
            />
            <div>
              <h4 className="text-gray-600 font-semibold">Make Payment</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore culpa voluptas provident, corporis, ipsum vel dolorem repudiandae eaque.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <Image
              className="h-14 w-14"
              src="/three.PNG"
              alt="Step 3: Reach Airport"
              height={500}
              width={500}
            />
            <div>
              <h4 className="text-gray-600 font-semibold">Reach Airport on Selected Date</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore culpa voluptas provident, corporis, ipsum vel dolorem repudiandae eaque.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full">
        <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <div className="relative">
            <Image
              className="rounded-2xl w-full h-64 object-cover"
              src="/Greece.webp"
              alt="Trip to Greece"
              height={500}
              width={500}
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-600">Trip to Greece</h3>
            <p className="text-gray-500 mt-2">11-24 June | by Umm e Habiba</p>

            <div className="flex gap-4 mt-6">
              <p className="bg-gray-100 p-3 rounded-full">
                <ImLeaf className="text-green-500" />
              </p>
              <p className="bg-gray-100 p-3 rounded-full">
                <RiKanbanView2 className="text-indigo-500" />
              </p>
              <p className="bg-gray-100 p-3 rounded-full">
                <FaLocationArrow className="text-blue-500" />
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <p className="bg-gray-100 p-3 rounded-full">
                  <HiChartBar className="text-orange-500" />
                </p>
                <p className="text-gray-500">24 People going</p>
              </div>
              <p className="bg-gray-100 p-3 rounded-full">
                <FaRegHeart className="text-red-500" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EasyAndFast;
