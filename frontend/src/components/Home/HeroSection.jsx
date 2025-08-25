import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

function HeroSection() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const text1 = "Full Stack Developer";
  const text2 = "& Code Enthusiast.";

  useEffect(() => {
    let timeout1;
    let timeout2;
    let buttonTimeout;

    // First text typing animation
    const typeText1 = (index = 0) => {
      if (index < text1.length) {
        setDisplayText1(text1.slice(0, index + 1));
        timeout1 = setTimeout(() => typeText1(index + 1), 100);
      } else {
        // Start second text after a brief pause
        setShowCursor1(false);
        setShowCursor2(true);
        setTimeout(() => {
          const typeText2 = (index = 0) => {
            if (index < text2.length) {
              setDisplayText2(text2.slice(0, index + 1));
              timeout2 = setTimeout(() => typeText2(index + 1), 100);
            } else {
              // Show buttons after typing is complete
              setShowCursor2(false);
              buttonTimeout = setTimeout(() => setShowButtons(true), 300);
            }
          };
          typeText2();
        }, 200);
      }
    };

    // Start typing animation after component mounts
    const startTimeout = setTimeout(() => typeText1(), 500);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(buttonTimeout);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-16">
        {/* Title with Typing Animation */}
        <div className="text-center px-4 mb-20">
          <h1 className="text-white text-5xl md:text-[88px] font-light tracking-wide leading-tight">
            <span className="block">
              {displayText1}
              {showCursor1 && (
                <span className="animate-pulse text-[#e1a87a]">|</span>
              )}
            </span>
            <span className="block text-4xl md:text-[88px]">
              {displayText2}
              {showCursor2 && (
                <span className="animate-pulse text-[#e1a87a]">|</span>
              )}
            </span>
          </h1>
        </div>

        {/* Buttons with Animations */}
        <div
          className={`flex gap-6 flex-wrap justify-center font-sans transition-all duration-700 transform ${
            showButtons
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Hire Button */}
          <a
            href="#contact"
            className="group relative bg-transparent text-white border-2 border-[#e1a87a] font-semibold px-8 py-6 overflow-hidden transition-all duration-300 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-[#e1a87a]/25"
          >
            <span className="absolute inset-0 bg-[#e1a87a] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 tracking-wide">GET IN TOUCH</span>
          </a>

          {/* Watch Video Button with Enhanced Icon */}
          <a
            href="https://www.youtube.com/watch?v=v5Xh1RzV0x8&pp=ygUPI3NodWJoYW13cml0aW5n"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-transparent text-white font-semibold px-6 py-4 transition-all duration-300 hover:text-[#e1a87a] hover:scale-105"
          >
            {/* Animated Circular Icon */}
            <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black transition-all duration-300 group-hover:bg-[#e1a87a] group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg">
              <Play
                className="text-sm ml-0.5 transition-transform duration-300 group-hover:scale-125"
                fill="currentColor"
              />

              {/* Ripple effect */}
              <span className="absolute inset-0 rounded-full bg-white opacity-30 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></span>
            </span>
            <span className="tracking-wide">Watch Video</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
