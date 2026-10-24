"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-background w-full min-h-screen relative overflow-hidden">
      {/* navbar */}
      <div className="pl-4 pr-3 sm:pl-6 sm:pr-6 md:pl-20 md:pr-20 pt-6 sm:pt-10 flex justify-between items-center">
        <p className="font-body text-[22px] sm:text-[26px] md:text-[30px] 2xl:text-[50px] font-bold">
          <span className="text-text-primary">Pick</span>
          <span className="text-persimmon">Sure</span>
        </p>
        <Link
          href="/login"
          className="text-text-secondary font-normal flex items-center justify-center gap-1 w-22 rounded-3xl h-11 cursor-pointer hover:bg-surface hover:text-persimmon transition-colors duration-200 active:text-sage"
        >
          <span className=" font-heading text-[13px] sm:text-[16px] 2xl:text-[25px] ">
            Log in
          </span>
          <MoveRight size={13} />
        </Link>
      </div>
      {/* hero content and visual */}
      <div className="w-full flex pl-4 pr-3 sm:pl-6 sm:pr-6 md:pl-20 md:pr-20 pt-6 sm:pt-10 items-center h-full mt-20 md:mt-15 lg:mt-10 flex-col lg:flex-row ">
        <div className="w-full max-w-[600] md:max-w-[700px] lg:max-w-[600px] 2xl:max-w-[900px] mb-20">
          <h1 className="text-[50px] sm:text-[55px] md:text-[60px] 2xl:text-[90px] font-heading font-bold leading-snug mb-5 text-transparent bg-clip-text heading-gradient w-full">
            Discover your next watch here
          </h1>
          <p className="font-body text-text-secondary w-[85%] leading-relaxed mb-7 text-[15px] sm:text-[18px] 2xl:text-[30px]">
            Find hidden gems you might have never come across, and explore what
            people with similar tastes are watching. From personalized
            recommendations to your own movies/series journal, PickSure brings
            everything you need to enjoy the journey of watching.
          </p>
          <div className="flex gap-5">
            <Link
              href="/signup"
              className="flex items-center justify-center relative overflow-hidden cursor-pointer text-text-on-accent font-bold bg-persimmon w-[150] h-[50] text-[15px] 2xl:w-[240px] 2xl:h-[90px] 2xl:text-[28px] rounded-xl font-light shadow-lg shadow-persimmon/20 hover:-translate-y-1 hover:shadow-persimmon/40 hover:brightness-125 transition-all duration-300 ease-out active:translate-y-0"
            >
              <span className="relative z-10 font-heading font-bold">
                Get Started
              </span>
            </Link>
            <button className="cursor-pointer font-heading font-bold h-[50] w-[150] rounded-xl text-text-primary border border-elevated-surface border-2 hover:-translate-y-1 hover:bg-elevated-surface/40 transition-all duration-300 2xl:w-[240px] 2xl:h-[90px] 2xl:text-[28px] active:translate-y-0">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative z-10 animate-float">
          <Image
            src="/images/welcomePageHero.png"
            alt="Movie watching illustration"
            width={900}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}
