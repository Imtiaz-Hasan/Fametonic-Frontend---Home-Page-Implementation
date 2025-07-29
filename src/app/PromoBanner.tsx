import React from "react";

export default function PromoBanner() {
  return (
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
  );
} 