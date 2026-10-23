"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#2B2D38] w-full min-h-screen relative overflow-hidden">
      {/* logo */}
      <div className="pl-30 pr-30 pt-10">
        <p className="font-merriweather text-[30px]">
          <span className="text-[#DB2A6B]">Pick</span>
          <span className="text-white">Sure</span>
          <span className="text-[#DB2A6B]">.</span>
        </p>
      </div>
      {/* background decorative circles */}
      <div className="w-[852] h-[852] border border-[#E1E1E1]/25 rounded-full absolute left-[750] top-[153] z-0"></div>
      <div className="w-[550] h-[550] border border-[#E1E1E1]/25 rounded-full absolute left-[950] top-[300] z-0"></div>
      {/* hero content and visual */}
      <div className="flex pl-30 pr-20 items-center h-full mt-20">
        <div className="w-[550]">
          <h1 className="text-white text-[60px] font-heading font-bold leading-snug mb-5">
            Discover your next watch here
          </h1>
          <p className="text-white/50 w-[400] leading-relaxed mb-7">
            Find hidden gems you might have never come across, and explore what
            people with similar tastes are watching. From personalized
            recommendations to your own movies/series journal, PickSure brings
            everything you need to enjoy the journey of watching.
          </p>
          <div className="flex gap-7">
            <Link
              href="/signup"
              onClick={(e) => {
                const button = e.currentTarget;
                const rect = button.getBoundingClientRect();
                const ripple = document.createElement("span");
                const size = 2 * rect.width;
                ripple.className = "ripple";
                ripple.style.width = `${size}px`;
                ripple.style.height = `${size}px`;
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                button.appendChild(ripple);
                setTimeout(() => {
                  ripple.remove();
                }, 600);
              }}
              className="flex items-center justify-center relative overflow-hidden cursor-pointer text-white bg-[#DB2A6B] w-[170] h-[45] text-[15px] rounded-lg rounded-bl-none font-light hover:shadow-[0_0_10px_#DB2A6B] hover:scale-[1.03] transition-all duration-200 ease-out"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
            <button className="cursor-pointer h-[45] text-white underline flex items-center justify-center gap-3 font-semibold">
              <span>Learn More</span> <MoveRight />
            </button>
          </div>
        </div>
        <div className="relative z-10 animate-float">
          <Image
            src="/images/car-characters.png"
            alt="Movie watching illustration"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
