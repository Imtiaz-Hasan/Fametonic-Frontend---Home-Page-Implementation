import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between md:ml-30 mt-4 md:mt-8 px-6 md:px-12 h-[74px] bg-fametonicGray relative z-10">
      <div className="md:ml-12 w-full flex justify-center md:justify-start">
        <Image
          src="/logo.png"
          alt="Fametonic Logo"
          width={180}
          height={60}
          priority
          className="select-none md:w-[180px] w-[120px]"
          draggable={false}
        />
      </div>
      <nav className="hidden md:flex gap-8 mr-70 self-start whitespace-nowrap">
        <a href="#" className="text-fametonicText text-base font-medium">
          About us
        </a>
        <a href="#" className="text-fametonicText text-base font-medium">
          Contact
        </a>
      </nav>
      {/* Hamburger menu icon for mobile */}
      <button
        className="md:hidden absolute top-1/2 right-6 -translate-y-1/2 w-12 h-12 flex flex-col justify-center items-center z-50"
        aria-label="Menu"
      >
        <span className="block w-6 h-1 bg-white mb-1 rounded"></span>{" "}
        {/* Change color to white or any other color */}
        <span className="block w-6 h-1 bg-white mb-1 rounded"></span>
        <span className="block w-6 h-1 bg-white rounded"></span>
      </button>
    </header>
  );
} 