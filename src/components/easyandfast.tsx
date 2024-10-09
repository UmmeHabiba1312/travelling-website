import React from 'react'
import Image from 'next/image'
import { ImLeaf } from "react-icons/im";
import { RiKanbanView2 } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";

const EasyAndFast = () => {
  return (
    <main className='flex mt-16 gap-[100px] mx-10'>
        {/* left */}
        <div className='w-[50%] pl-10 '>
        <h3 className='text-gray-600 font-bold'>Easy and Fast</h3>
        <h1 className='text-[25px] text-gray-800 font-bold mt-1'>
            Book Your Next Trip In 3 Easy Steps
        </h1>
        <div className="one flex mt-8 gap-3 ">
        <Image
             className='h-14 w-14'
            src={'/one.PNG'}
            alt='img'
            height={500}
            width={500}
            />
           <div className=''>

           <h4 className='text-gray-600  font-bold '>Choose Destination</h4>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore culpa voluptas provident, corporis, ipsum vel dolorem repudiandae eaque.</p>
           </div>
        </div>
        <div className="two">
        <div className="one flex mt-8 gap-3">
        <Image
             className='h-14 w-14'
            src={'/two.PNG'}
            alt='img'
            height={500}
            width={500}
            />
           <div className=''>

           <h4 className='text-gray-600  font-bold'>Make Payment</h4>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore culpa voluptas provident, corporis, ipsum vel dolorem repudiandae eaque.</p>
           </div>
        </div>
        </div>
        <div className="three">
        <div className="one flex mt-8 gap-3">
        <Image
             className='h-14 w-14'
            src={'/three.PNG'}
            alt='img'
            height={500}
            width={500}
            />
           <div className=''>

           <h4 className='text-gray-600  font-bold'>Reach Airpot on Selected Date</h4>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore culpa voluptas provident, corporis, ipsum vel dolorem repudiandae eaque.</p>
           </div>
        </div>
        </div>
        </div>

        {/* right */}
        <div className='w-[35%]'>
            <div className='rounded-2xl  hover:bg-slate-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                <div className="parent flex justify-center rounded-2xl m-7 ">
                <Image
                className='rounded-2xl h-48 w-[400px] mt-8'
               src='/Greece.webp'
               alt='img'
               height={500}
               width={500}/>
                </div>
                <div className='mt-8 ml-8'>
                <h3 className='text-2xl font-bold text-gray-600 flex'>Trip To Greece</h3>
                <p className='text-gray-500 mt-4'>11-24 JUNE| by Umm e habiba</p>
                <div className='flex gap-8 mt-5 '>
                <p className='bg-slate-100 p-2 rounded-full'><ImLeaf /></p>
                <p className='bg-slate-100 p-2 rounded-full'><RiKanbanView2 /></p>
                <p className='bg-slate-100 p-2 rounded-full'><FaLocationArrow /></p>
                </div>
                <div className='flex  mt-6 gap-[240px]'>
                  <div className="1 flex ">               
                     <p className='bg-slate-100 p-2 rounded-full'><HiChartBar /></p>
                  <p>24 People going</p></div>
                  <div className="2">              
                      <p className='bg-slate-100 p-2 rounded-full'><FaRegHeart /></p></div>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default EasyAndFast