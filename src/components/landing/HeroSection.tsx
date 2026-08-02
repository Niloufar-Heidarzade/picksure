import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/landing-hero.png"
        alt="A warm picture of a room full of films"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Left & Top Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to right,
              #09090A 0px,
              #09090A 400px,
              rgba(9,9,10,0.7) 600px,
              transparent 700px
            ),
            linear-gradient(
              to bottom,
              #09090A 0px,
              rgba(9,9,10,0.7) 50px,
              transparent 180px
            )
          `,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.55) 100%)",
        }}
      />

      {/* Warm Glow */}
      <div className="absolute bottom-[-200px] right-[-150px] h-[700px] w-[700px] rounded-full bg-orange-300/10 blur-[200px]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="tracking-wide ml-15 mt-15 relative">
          <p className="text-button-background font-normal font-default">
            Feel <span className="text-secondary font-semibold">sure</span>{" "}
            about what you
            <span className="text-secondary font-semibold"> pick</span> to
            watch.
          </p>
          <h1 className="text-primary font-display text-[60px] w-[370px] font-bold leading-[66px] text-transparent bg-clip-text bg-gradient-to-r from-primary to-button-hover mt-5">
            Find your next favorite movie or series.
          </h1>
          <span className="text-gold-accent text-lg absolute top-30 left-90">
            ✦
          </span>
          <p className="font-default text-paragraph w-[390px] mt-4">
            Build your personal movie library, discover your next favorite
            story, connect with fellow movie lovers, and receive AI-powered
            recommendations tailored to your unique taste.
          </p>
          <button className="font-normal font-light bg-button-background text-button-text w-[200px] h-[50px] rounded-lg mt-8 shadow-[0_10px_30px_rgba(227,179,124,0.35)]">
            Get Started <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
