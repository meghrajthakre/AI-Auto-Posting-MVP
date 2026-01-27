import React from "react";
import WhiskMark from "./WhiskMark";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#F6D84A] overflow-hidden font-mono">

      {/* Navbar */}
      <nav className="absolute top-4 left-6 flex items-center gap-3 z-50 animate-nav">
        <span className="text-2xl font-semibold tracking-tight">
          PostEngine
        </span>

        <button className="nav-btn">
          Experiment
        </button>
      </nav>

      {/* Floating Social Icons */}
      <img
        src="/images/linkdn.png"
        className="floating absolute left-24 top-32 w-44"
        alt="LinkedIn"
      />

      <img
        src="/images/x.png"
        className="floating absolute right-32 top-24 w-36"
        alt="X"
      />

      <img
        src="/images/insta.png"
        className="floating absolute left-28 bottom-32 w-40"
        alt="Instagram"
      />

      <img
        src="/images/youtub.png"
        className="floating absolute right-20 bottom-24 w-56"
        alt="YouTube"
      />

      {/* Whisk Logo */}
      <div className="whisk-center animate-logo z-20">
        <WhiskMark />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center opacity-0 animate-text">
        <h1 className="text-3xl md:text-4xl tracking-wider uppercase mb-6 font-extralight leading-snug">
          Your AI engine for effortless <br /> social posting.
        </h1>

        <button className="cta-btn cursor-pointer">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default Hero;
