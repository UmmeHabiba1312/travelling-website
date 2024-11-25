import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <main className="mx-4 lg:mx-40 my-16">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
        {/* Logo 1 */}
        <div className="flex justify-center">
          <Image
            className="object-contain"
            src="/logo1.png"
            alt="Logo 1"
            height={200} // Adjust height as needed
            width={200}  // Adjust width as needed
          />
        </div>
        
        {/* Logo 2 */}
        <div className="flex justify-center">
          <Image
            className="object-contain pb-2"
            src="/logo2.png"
            alt="Logo 2"
            height={200} // Adjust height as needed
            width={200}  // Adjust width as needed
          />
        </div>

        {/* Logo 3 */}
        <div className="flex justify-center">
          <Image
            className="object-contain"
            src="/logo3.png"
            alt="Logo 3"
            height={200} // Adjust height as needed
            width={200}  // Adjust width as needed
          />
        </div>

        {/* Logo 4 */}
        <div className="flex justify-center pt-10">
          <Image
            className="object-contain"
            src="/logo4.png"
            alt="Logo 4"
            height={200} // Adjust height as needed
            width={200}  // Adjust width as needed
          />
        </div>
      </div>
    </main>
  );
};

export default Logo;
