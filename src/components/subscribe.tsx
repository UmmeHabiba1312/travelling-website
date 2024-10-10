import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";


const Subscribe = () => {
  return (
    <main >
        <div className='bg-purple-100 mx-60 rounded-tl-[90px] '>
        <div className='bg-purple-600 rounded-full w-8 h-8 flex justify-center items-end text-white text-2xl p-1 md:ml-[890px] hover:animate-ping'><FaLocationArrow />
        </div>
        <p className='text-gray-500 font-medium text-[24px] flex justify-center pt-10'>Subscribe to get information, latest news and other <br /> interesting offers about Jadoo</p>
        <div className='flex bg-purple-100 justify-center gap-4 py-[70px]  rounded-lg'>
            <div className='flex py-2 pr-[100px] bg-white rounded-md pl-10'><div className='text-3xl text-gray-400'><MdOutlineEmail /></div>
            <div className=' items-center pl-2 '><input className='py-1' type="text" placeholder='Your email' required /></div></div>
            <div className='bg-orange-500 text-white py-3 px-5 font-semibold rounded-lg  hover:bg-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><button className=''>Subscribe</button></div>
        </div>
        </div>
    </main>
  )
}

export default Subscribe