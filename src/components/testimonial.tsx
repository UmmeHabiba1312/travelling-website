import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <main className='grid md:grid-cols-2 mt-20 mx-40'>
        {/* left */}
        <div className="one  ">
            <h3 className='text-gray-500 font-bold'>TESTIMONIALS</h3>
            <h1 className='text-6xl'>What People Say About Us.</h1>
        </div>


        {/* right */}
        <div className="two ">
        <div className="p-6 max-w-sm mx-auto bg-slate-50 rounded-xl shadow-lg items-center space-x-4">
      <div className="shrink-0">
        <Image 
         className='size-12 rounded-full'
         height={500}
         width={500}
         src="/anime-girl.jpg" 
         alt="cream logo"/>
      </div>
        <div className="font-semibold text-black">
        <p className="text-slate-500">On the windows talking pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no</p>
        </div>
      </div>
    </div>

    </main>
  )
}

export default Testimonial