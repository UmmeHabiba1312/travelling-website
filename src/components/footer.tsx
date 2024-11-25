import React from 'react';

const Footer = () => {
  return (
    <main className="h-[100px] mt-40">
      <hr className="border-gray-300" />
      <div className="flex flex-col items-center justify-center mt-4 space-y-2">
        {/* Made with love text */}
        <p className="text-gray-600 font-bold text-sm sm:text-base md:text-lg">
          Made with love by Umm e Habiba
        </p>
        {/* All rights reserved text */}
        <p className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base">
          All rights reserved @Jadoo.com
        </p>
      </div>
    </main>
  );
};

export default Footer;
