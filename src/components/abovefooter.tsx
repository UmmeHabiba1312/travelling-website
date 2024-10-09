import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const AboveFooter = () => {
  return (
    <main className='mt-[100px] h-40 mx-[110px]'>
        <div className='grid md:grid-cols-5 sm:grid-cols-2'>
            <div className="1  h-40">
                <h3 className='text-gray-900 text-5xl font-bold flex justify-center'>Jadoo.</h3>
                <p className='text-gray-500 font-semibold flex justify-center mt-4'>Back your trip in minute. get full <br />control for much longer.</p>
            </div>
            <div className="2  h-40">
                <h3 className='text-2xl font-bold text-gray-900 flex justify-center'>Company</h3>
                <p className='font-semibold text-gray-500 flex justify-center mt-4'>About</p>
                <p className='font-semibold text-gray-500 flex justify-center'>Careers</p>
                <p className='font-semibold text-gray-500 flex justify-center'>Mobiles</p>
            </div>
            <div className="3 h-40">
            <h3 className='text-2xl font-bold text-gray-900 flex justify-center'>Contact</h3>
            <p className='font-semibold text-gray-500 flex justify-center mt-4'>Help/FAQ</p>
                <p className='font-semibold text-gray-500 flex justify-center'>Press</p>
                <p className='font-semibold text-gray-500 flex justify-center'>Affilates</p>
            </div>
            <div className="4  h-40">
            <h3 className='text-2xl font-bold text-gray-900 flex justify-center'>More</h3>
            <p className='font-semibold text-gray-500 flex justify-center mt-4'>Airlinefess</p>
                <p className='font-semibold text-gray-500 flex justify-center'>Airline</p>
                <p className='font-semibold text-gray-500 flex justify-center'>Low fare tips</p>
            </div>
            <div className="5  h-40 w-[300px]">
                <div className='flex text-4xl justify-center gap-5'>
                <div className='bg-slate-200 p-2 rounded-lg'><FaFacebook /></div>
                <div className='bg-slate-200 p-2 rounded-lg'><FaInstagram /></div>
                <div className='bg-slate-200 p-2 rounded-lg'><FaTwitter /></div>
                </div>
                <h4 className='text-gray-600 font-semibold flex justify-center mt-4'>Discover Our App</h4>
                <div className='flex rounded-lg justify-around  mt-4 '>
                    <button className='bg-black text-white flex rounded-3xl p-2'><div className='text-3xl mt-2'><FaGooglePlay /> </div><div><p className='text-white font-bold'>Got It On</p> <p className='text-gray-400'>GOOGLE PLAY</p></div></button>
                    <button className='bg-black text-white flex rounded-3xl  '><div className='text-3xl mt-2'><FaApple /></div><div><p className='text-gray-400'>Available on the</p> <p className='text-white font-bold'>APPLE STORE</p></div></button>

                </div>
            </div>
        </div>
    </main>
  )
}

export default AboveFooter