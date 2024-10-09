import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className='grid md:grid-cols-2 h-auto'>
        {/* left side */}
        <div className=' px-36 justify-end lg:pt-4'>
            <h3 className='text-orange-500 font-bold flex items-center justify-center md:pt-[64px] lg:pt-[30px]'>BEST DESTINATIONS AROUND THE WORLD</h3>
            <h1 className='text-6xl flex items-center justify-center font-bold pt-[12px] lg:pt-[15px] md:pt-[44px] md:pl-20 lg:pl-[10px] w-[440px]'>Travel, enjoy and live a new and full life</h1>
            <p className='flex justify-center pt-[28px] lg:pt-[24px] w-96 text-gray-500 md:pt-14 md:pl-24 lg:pl-4 md:text-2xl lg:text-xl'>Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening Park Gate 
                sell they west hard for the.
            </p>
            {/* button and demo button div */}
            <div className='mt-[30px] lg:mt-[20px] md:mt-[60px] md:ml-[-60px] lg:ml-[-30px] grid grid-cols-2'>
                {/* button */}
            <div className=' flex justify-end '>
            <button className=' bg-orange-400  hover:bg-orange-500  px-4 py-4 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  font-semibold'>Find Out More</button>
            </div>
            {/* demo button */}
            <div className='grid grid-cols-2 gap-none mt-2'>
            <span className='flex justify-end'>
            <FaCirclePlay className="size-10 text-red-500  hover:text-red-600 hover:animate-spin"/>
            </span>
            <span className='justify-center items-center '>
            <p className='text-gray-500'>Play demo</p>
            </span>
            </div>
            </div>
        </div>
        {/* right side */}
        <div className='flex justify-center h-auto'>
            <Image className='size-cover'
            height={500}
            width={650}
            src='/hero-img.png'
            alt='image'/>

        </div>
    </main>
  )
}

export default Hero