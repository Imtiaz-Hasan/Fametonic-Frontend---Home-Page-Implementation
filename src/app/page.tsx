"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-fametonicBg flex flex-col font-sans overflow-hidden relative">
      {/* Phone Image - Positioned behind everything for desktop */}
      <div className="hidden md:block absolute mt-10 mr-20 right-0 top-1/2 -translate-y-1/2 z-0">
        <div className="relative w-[666px] h-[679px]">
          <Image
            src="/phone.png"
            alt="Phone mockup"
            fill
            priority
            className="object-contain drop-shadow-2xl select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Promo Banner - Mobile and Desktop */}
      <div className="w-full h-auto md:h-[46px] bg-gradient-to-r from-[#FC004E] to-[#10CBE0] py-3 md:py-0 flex items-center justify-center text-center relative z-10 font-['Figtree']">
        <p className="text-[16px] md:text-[22px] font-['Figtree'] leading-[100%] tracking-[0%] text-white">
          <span className="text-[#00E7F9] font-extrabold">
            🚀 FRESH BEGINNINGS SALE:
          </span>
          <span className="font-semibold text-white ml-1 inline md:inline">
            {" "}
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </p>
      </div>

      {/* Top Bar */}
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

      {/* Main Section */}
      <main className="w-full max-w-[1440px] mx-auto px-4 md:px-16 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <section className="w-full md:w-[560px] z-20 flex flex-col ml-0 md:ml-40 items-center md:items-start text-center md:text-left">
          <h1 className="text-fametonicText text-[25px] md:text-[35px] font-bold leading-[100%] tracking-[0%] mb-[15px]">
            Want to Turn Social Media Into a{" "}
            <span className="inline-block whitespace-nowrap">
              Profitable Career?
            </span>
          </h1>

          <div className="mb-4 w-full">
            <span
              className="text-[#00E7F9] text-[25px] md:text-[35px] font-bold leading-[100%] tracking-[0%] inline-block px-1"
              style={{
                textShadow: "0px 4px 4px #FC004E",
                fontFamily: "Urbanist, sans-serif",
              }}
            >
              <span className="whitespace-nowrap md:whitespace-normal">
                Discover your way to success
              </span>{" "}
              <br className="md:hidden" /> with Fametonic:
            </span>
          </div>

          <ul className="text-fametonicText space-y-3 text-left mb-20 md:mb-8 w-full md:w-[500px]">
            <li className="flex items-start gap-3 text-[16px] md:text-[16px]">
              <span className="text-fametonicYellow mt-0.5">✨</span> Start
              growing your influence right away—no waiting required!
            </li>
            <li className="flex items-start gap-3 text-[16px] md:text-[16px]">
              <span className="text-fametonicYellow mt-0.5">✨</span> Create
              viral TikToks and Reels step by step with easy-to-follow lessons
            </li>
            <li className="flex items-start gap-3 text-[16px] md:text-[16px]">
              <span className="text-fametonicYellow mt-0.5">✨</span> Use a
              Personal AI Worker to boost your content
            </li>
            <li className="flex items-start gap-3 text-[16px] md:text-[16px]">
              <span className="text-fametonicYellow mt-0.5">✨</span> Learn from
              expert-led courses designed for aspiring influencers
            </li>
          </ul>

          <div className="flex flex-col items-center md:items-start w-full relative">
            <a
              href="#"
              className="bg-[#fc004e] text-white font-bold text-lg rounded-lg px-8 py-4 shadow-[4px_4px_8px_0_#00E0FF] border-2 border-transparent w-full max-w-xs text-center mb-3 cursor-pointer"
            >
              GET STARTED <span className="ml-2">&gt;</span>
            </a>

            {/* Mobile-specific terms and conditions text */}
            <div className="md:hidden text-xs text-fametonicText opacity-60 text-center mb-10 absolute bottom-16 w-full">
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
              <br />
              <br />
              Fametonic 2025 ©All Rights Reserved.
            </div>

            <span className="text-fametonicText md:ml-10 text-xs opacity-80">
              1-minute quiz for personalized Insights
            </span>
          </div>

          {/* Desktop version Terms and Conditions */}
          <div className="hidden mt-6 text-xs text-fametonicText opacity-60 max-w-xs text-center md:text-left md:block">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
            <br />
            <br />
            Fametonic 2025 ©All Rights Reserved.
          </div>
        </section>

        {/* Mobile Phone Image (inside main) */}
        <section className="w-full flex md:hidden items-center justify-center">
          <Image
            src="/phone.png"
            alt="Phone mockup"
            width={320}
            height={512}
            priority
            className="object-contain drop-shadow-2xl select-none"
            draggable={false}
          />
        </section>
      </main>
    </div>
  );
}
