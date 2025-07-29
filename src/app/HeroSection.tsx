import React from "react";

export default function HeroSection() {
  return (
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
          By clicking {`"Get Started"`}, you agree with Terms and Conditions,
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
        By clicking {`"Get Started"`}, you agree with Terms and Conditions,
        Privacy Policy, Subscription Terms
        <br />
        <br />
        Fametonic 2025 ©All Rights Reserved.
      </div>
    </section>
  );
} 