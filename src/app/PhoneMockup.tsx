import React from "react";
import Image from "next/image";

type PhoneMockupProps = {
  desktop?: boolean;
};

export default function PhoneMockup({ desktop }: PhoneMockupProps) {
  if (desktop) {
    return (
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
    );
  }
  return (
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
  );
} 