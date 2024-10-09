import React from 'react'

const Header2 = () => {
  return (
   <main className='w-[100%]'>
    <div className="navbar flex  h-[10vh] items-center justify-around ">
    <div className=''>
            <h2 className='font-bold text-2xl ml-12'>Jadoo</h2>
        </div>
        <div  className=' font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm'>Destinations</div>
        <div  className=' font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm'>Hotels</div>
        <div  className=' font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm'>Flights</div>
        <div className=' font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm'>Bookings</div>
<div className=' font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm  md:block hidden'>Login</div>
        <div className=' font-semibold border border-gray-500 px-4 py-1 rounded-sm hover:border-[2px] hover:border-orange-500 hover:text-orange-500 md:block hidden'>Sign Up</div>
        <div className=' font-semibold md:block hidden'>
         <select className=' font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-1 py-1 rounded-sm' id="options" name="options">
   <option value="option1">EN</option>
   <option value="option2">PK</option>
    </select>
    </div>
    {/* hamberger */}
<div className='md:hidden text-4xl cursore:pointer'>&#8801;</div>
       
</div>
     </main>
  )
}

export default Header2