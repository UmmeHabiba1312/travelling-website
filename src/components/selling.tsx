import React from 'react'
import Image from 'next/image'
import { FaLocationArrow } from "react-icons/fa";


const Selling = () => {
  return (
   <main className='mt-14'>
    <div>
        <h3 className='flex justify-center text-gray-500 font-bold'>
            Top Selling
        </h3>
        <h1 className='flex justify-center text-black font-bold text-4xl'>
            Top Destinations
        </h1>
    </div>
    {/* cards */}
    <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 h-auto justify-around w-[100vw] mt-10  px-60'>
        <div className='rounded-2xl w-[220px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image
            className='rounded-2xl h-[210px]'
            src={'/itally.jpg'}
            alt='img'
            height={500}
            width={500}
            />
            <div className='flex mt-4 justify-around'>
            <p className='text-gray-600 font-semibold'>Rome, Itally</p>
            <p className='text-gray-600 font-semibold'>$5,42k</p>
            </div>
            <div className='flex mt-4 gap-5'>
           <p className='pt-[4px] pl-[35px]'> < FaLocationArrow /></p>
            <p className='text-gray-600 font-semibold '>10 Days Trip</p>
            </div>
        </div>
        <div className='rounded-2xl  w-56   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image
             className='rounded-2xl w-60 h-[210px]'
            src={'/uk.jpg'}
            alt='img'
            height={500}
            width={500}
            />
            <div className='flex mt-4 justify-around'>
            <p className='text-gray-600 font-semibold'>London, UK</p>
            <p className='text-gray-600 font-semibold'>$4.2k</p>
            </div>
            <div className='flex mt-4 gap-5'>
           <p className='pt-[4px] pl-[35px]'> < FaLocationArrow /></p>
            <p className='text-gray-600 font-semibold '>12 Days Trip</p>
            </div>
        </div>
        <div className='rounded-2xl w-56   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image
             className='rounded-2xl h-[210px]'
            src={'/roup.jpg'}
            alt='img'
            height={500}
            width={500}
            />
            <div className='flex mt-4 justify-around'>
            <p className='text-gray-600 font-semibold'>Full Eourup</p>
            <p className='text-gray-600 font-semibold'>$15k</p>
            </div>
            <div className='flex mt-4 gap-5'>
           <p className='pt-[4px] pl-[35px]'> < FaLocationArrow /></p>
            <p className='text-gray-600 font-semibold '>28 Days Trip</p>
            </div>
        </div>
    </div>
   </main>
  )
}

export default Selling