import React from "react";
import { FaPlay } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden [*::before]:bg-transparent [*::after]:bg-transparent">
      {/* Background video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-110"
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay filter */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-10">
        {/* Title */}
        <div className="text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-wide mb-20 transition-all duration-500 ease-out">
            Full Stack Developer
            <br />
            <span className="text-4xl md:text-6xl lg:text-8xl leading-tight">
              &amp; Code Enthusiast
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl">.</span>
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center font-Poppins">
          {/* Hire Button */}
          <a
            href="#contact"
            className="bg-transparent text-white border border-[#e1a87a] font-semibold px-14 py-5 shadow-md hover:bg-gray-200 hover:text-black transition"
          >
            GET IN TOUCH
          </a>

          {/* Watch Video Button with Icon */}
          <a
            href="https://www.youtube.com/watch?v=v5Xh1RzV0x8&pp=ygUPI3NodWJoYW13cml0aW5n"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-transparent text-white font-semibold px-6 py-3 rounded-lg hover:text-gray-300 transition"
          >
            {/* Circular Icon */}
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black">
              <FaPlay className="text-sm ml-0.5" />
            </span>
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
