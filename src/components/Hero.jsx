import React, { useEffect } from "react";
import WhiskMark from "./WhiskMark";
import gsap from "gsap";
import { Chrome } from "lucide-react";
// 774878697524-snalcvisrtlgsl2fvl5nmedruss3gi0t.apps.googleusercontent.com
const Hero = () => {
  useEffect(() => {
    // Set initial states
    gsap.set(".img-left, .img-right", { opacity: 0, scale: 0.8 });
    gsap.set(".whisk-center", { opacity: 0, scale: 0.5, rotate: -180 });
    gsap.set(".animate-text", { opacity: 0, y: 30 });
    gsap.set(".nav-btn", { opacity: 0, x: -20 });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      }
    });

    // Orchestrated entrance
    tl.to(".whisk-center", {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1.2,
      ease: "back.out(1.4)",
    })
    
    // Left images cascade in
    .to(".img-left", {
      x: 0,
      opacity: 0.9,
      scale: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6")
    
    // Right images cascade in
    .to(".img-right", {
      x: 0,
      opacity: 0.9,
      scale: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6")
    
    // Text fades up
    .to(".animate-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4")
    
    // Nav button slides in
    .to(".nav-btn", {
      opacity: 1,
      x: 0,
      duration: 0.5,
    }, "-=0.5");

    // Floating animation for social icons
    gsap.to(".floating", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.3,
        from: "random"
      }
    });

  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAD502] overflow-hidden font-mono">
      {/* Navbar */}
      <nav className="absolute top-4 left-6 flex items-center gap-3 z-50">
        <span className="text-2xl font-semibold tracking-tight">
          PostEngine
        </span>
        <button className="nav-btn bg-black text-[#FAD502] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors">
          Experiment
        </button>
      </nav>

      {/* Floating Social Icons */}
      <img
        src="/images/linkdn.png"
        className="floating img-left absolute left-24 top-32 w-44 cursor-pointer hover:scale-110 transition-transform"
        alt="LinkedIn"
      />

      <img
        src="/images/x.png"
        className="floating img-left absolute right-32 top-24 w-36 cursor-pointer hover:scale-110 transition-transform"
        alt="X"
      />

      <img
        src="/images/insta.png"
        className="floating img-right absolute left-78 bottom-32 w-40 cursor-pointer hover:scale-110 transition-transform"
        alt="Instagram"
      />

      <img
        src="/images/youtub.png"
        className="floating img-right absolute right-80 bottom-15 w-56 cursor-pointer hover:scale-110 transition-transform"
        alt="YouTube"
      />

      {/* Whisk Logo */}
      <div className="whisk-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <WhiskMark />
      </div>

      {/* Center Content */}
      <div className="animate-text flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-3xl md:text-4xl tracking-wider uppercase mb-6 font-extralight leading-snug">
          Your AI engine for effortless <br /> social posting.
        </h1>

        <p className="font-mono pb-5 uppercase font-extralight">
          Sign in and let's see what you can dig up.
        </p>

        <button className="cta-btn bg-white text-black px-8 py-3 rounded-full text-base font-semibold cursor-pointer hover:bg-gray-100 transition-colors flex items-center gap-2">
          <Chrome size={20} />
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Hero;