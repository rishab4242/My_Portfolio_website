import React, { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageScale, setImageScale] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setImageScale(true);
        } else {
          // On mobile, keep animations visible once triggered
          if (!isMobile) {
            setImageScale(false);
          }
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.3, // Lower threshold for mobile
        rootMargin: isMobile ? "50px 0px" : "0px 0px", // Earlier trigger on mobile
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div
      className="bg-black text-white py-10 overflow-hidden relative"
      id="about"
      ref={sectionRef}
    >
      {/* Main Heading */}
      <div className="text-center py-10">
        <h2
          className={`text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About Me
        </h2>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        ></div>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-15 items-center px-4 md:px-16 py-5">
        {/* Left Image */}
        <div
          className={`w-full h-full bg-gray-900 md:w-[550px] rounded-xl shadow-lg relative overflow-hidden group transition-all duration-1000 ${
            isMobile ? "delay-700" : "delay-500"
          } ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
        >
          {/* Image with scale animation based on section visibility */}
          <img
            src="/me1.jpg"
            alt="Section 1"
            className={`w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${
              imageScale ? "scale-105" : "scale-100"
            }`}
          />

          {/* Gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

          {/* Decorative border that glows on hover */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#e1a87a]/50 group-hover:shadow-lg group-hover:shadow-[#e1a87a]/20 transition-all duration-500"></div>

          {/* Floating particles effect */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200"></div>
        </div>

        {/* Right Text */}
        <div
          className={`space-y-6 space-x-6 transition-all duration-1000 ${
            isMobile ? "delay-1200" : "delay-700"
          } ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
        >
          <h3 className="uppercase text-3xl tracking-wider font-semibold text-white leading-tight relative">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Passionate Full Stack Developer Ready to Make an Impact
            </span>

            {/* Decorative element */}
            <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e1a87a] to-transparent transition-all duration-1000 delay-1500 hover:w-full"></div>
          </h3>

          <div className="relative">
            <p className="text-lg leading-relaxed text-gray-200 transition-all duration-500 hover:text-gray-100">
              Hi, I'm Rishab Sanju Dakhale! I recently completed my graduation
              in 2023-24 from Vartak College. During my final year, I discovered
              my passion for coding and decided to dive deep into the world of
              web development. I started learning through free resources and
              then completed a comprehensive 6-month MERN Stack development
              course, followed by a valuable 6-month internship where I gained
              hands-on experience working on live projects. During my
              internship, I built 15–20 static pages for client projects using
              React and Tailwind, redesigned official company websites,
              contributed to internal app testing, and created SEO-related
              service pages.
            </p>

            {/* Subtle background animation */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          <div className="relative inline-block group">
            <a
              href="#projects"
              className="relative inline-block px-8 py-4 border-2 border-[#e1a87a] text-white rounded-md bg-transparent overflow-hidden transition-all duration-300 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-[#e1a87a]/25 group"
            >
              {/* Background animation */}
              <span className="absolute inset-0 bg-[#e1a87a] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

              {/* Button text */}
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                View My Projects
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </a>

            {/* Floating dots around button */}
            <div className="absolute -top-2 -right-2 w-1 h-1 bg-[#e1a87a] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100"></div>
            <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#e1a87a]/10 to-yellow-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
