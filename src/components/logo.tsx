import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <main className=' mx-40 my-16'>
        <div className='flex'>
            <div className="1 flex m-[45px]">
                <Image
                className='size-fit'
                height={500}
                width={500}
                src='/logo1.png'
                alt='logoimg'/>
            </div>
            <div className="2  flex m-[45px]">
            <Image
                className='pb-[10px] size-fit'
                height={500}
                width={500}
                src='/logo2.png'
                alt='logoimg'/>
            </div>
            <div className="3  flex m-[45px]">
            <Image
                className='size-fit'
                height={500}
                width={500}
                src='/logo3.png'
                alt='logoimg'/>
            </div>
            <div className="4 flex m-[50px]  pt-10">               
                 <Image
                className='size-fit'
                height={500}
                width={500}
                src='/logo4.png'
                alt='logoimg'/></div>
        </div>
    </main>
  )
}

export default Logo