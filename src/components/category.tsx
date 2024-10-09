import React from 'react'
import Image from 'next/image'

const Category = () => {
  return (
    <main  className='lg:mt-3 sm:pt-96 md:pt-24'>
        <h2 className='font-bold  justify-center items-center flex hover text-gray-500'>CATEGORY</h2>
        <h1 className='text-4xl flex justify-center items-center font-bold mt-3'>We Offer Best Services</h1>
        <div className="parent grid md:grid-cols-4 sm:grid-cols-2 mt-7 lg:mx-10 ">
            <div className=' h-72 w-60 rounded-2xl hover:bg-slate-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-5'>
                <Image
                className='h-20 w-20  lg:ml-[80px] lg:mt-8 '
                height={500}
                width={500}
                src='/weather.png'
                alt='Image'/>
                <h3 className='font-semibold flex justify-center mt-4 text-[18.5px]'>Calculated Weather</h3>
                <p className='text-gray-500 flex justify-center lg:mt-4'>Built Wicket longer <br /> admire do barton vanity <br />itself do in it</p>
            </div>
            <div className=' h-72 w-60  rounded-2xl hover:bg-slate-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-5'>
            <Image
            className='h-20 w-20  lg:ml-[80px] lg:mt-8'
                height={500}
                width={500}
                src='/flights.png'
                alt=''/>
                <h3 className='font-semibold flex justify-center mt-4 text-[18.5px]'>Best Flights</h3>
                <p className='text-gray-500 flex justify-center lg:mt-4'>Engrossed listening. <br />Park gate sell they <br />west hard for the.</p>
            </div>
            <div className=' h-72 w-60 rounded-2xl hover:bg-slate-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-5'>
            <Image
            className='h-20 w-20  lg:ml-[80px] lg:mt-8 '
                height={500}
                width={500}
                src='/events.png'
                alt='Image'/>
                <h3 className='font-semibold flex justify-center mt-4 text-[18.5px]'>Local Events</h3>
                <p className='text-gray-500 flex justify-center lg:mt-4'>Barton vanity itself do <br />in it. preferd to men it <br />engrossed listening.</p>
            </div>
            <div className=' h-72 w-60 rounded-2xl hover:bg-slate-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-5'>
            <Image
            className='h-20 w-20  lg:ml-[80px] lg:mt-8 '
                height={500}
                width={500}
                src='/cutomize.png'
                alt='Image'/>
                <h3 className='font-semibold flex justify-center mt-4 text-[18.5px]'>Customization</h3>
                <p className='text-gray-500 flex justify-center lg:mt-4'>We deliver outsourced <br /> aviation services for <br />military customers.</p>
            </div>
        </div>
    </main>
  )
}

export default Category