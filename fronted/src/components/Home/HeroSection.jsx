import React from "react";
import { FaPlay } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          id="vimeoplayer"
          src="https://player.vimeo.com/video/357581440?autoplay=1&muted=1&loop=1&background=1"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            transform: "scale(1.2)", // 👈 fills screen
            objectFit: "cover",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Background Video"
        ></iframe>
      </div>

      {/* Overlay filter */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 transition-all duration-500 ease-out">
          Squarespace Developer
          <span className="hidden sm:inline">
            <br /> &amp; Coffee Enthusiast
          </span>
          .
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          {/* Hire Button */}
          <a
            href="/squarespace-developer"
            className="bg-transparent text-white border font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 hover:text-black transition"
          >
            Hire an Expert
          </a>

          {/* Watch Video Button with Icon */}
          <a
            href="https://vimeo.com/355949646"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-transparent text-white font-semibold px-6 py-3 rounded-lg hover:text-gray-300 transition"
          >
            {/* Circular Icon */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black ">
              <FaPlay className="text-xs ml-0.5 " />
            </span>
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
