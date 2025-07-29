"use client";

import PromoBanner from "./PromoBanner";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PhoneMockup from "./PhoneMockup";

export default function Home() {
  return (
    <div className="min-h-screen bg-fametonicBg flex flex-col font-sans overflow-hidden relative">
      {/* Phone Image - Positioned behind everything for desktop */}
      <PhoneMockup desktop />
      {/* Promo Banner - Mobile and Desktop */}
      <PromoBanner />
      {/* Top Bar */}
      <Header />
      {/* Main Section */}
      <main className="w-full max-w-[1440px] mx-auto px-4 md:px-16 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <HeroSection />
        {/* Mobile Phone Image (inside main) */}
        <PhoneMockup />
      </main>
    </div>
  );
}
