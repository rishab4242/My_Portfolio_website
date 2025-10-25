import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Faster heading & fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  // Slightly faster right text animation
  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  // Image fade-left — smooth and fast for mobile
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <div
      className="bg-black text-white py-10 overflow-hidden relative"
      id="about"
    >
      {/* Main Heading */}
      <div className="text-center py-10">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-4"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
        />
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-15 items-center px-4 md:px-16 py-5">
        {/* Image — No flicker + faster slide */}
        <div className="relative w-full h-full md:w-[550px] rounded-xl shadow-lg overflow-hidden group">
          <motion.img
            src="/me1.jpg"
            alt="Section 1"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            style={{
              willChange: "transform, opacity",
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
            }}
            className="w-full h-full object-cover rounded-xl transition-all duration-700 ease-out group-hover:brightness-110"
          />

          {/* Hover effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#e1a87a]/50 group-hover:shadow-lg group-hover:shadow-[#e1a87a]/20 transition-all duration-700"></div>
        </div>

        {/* Right Text */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 space-x-6"
        >
          <h3 className="uppercase text-3xl tracking-wider font-semibold text-white leading-tight relative">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Passionate Full Stack Developer Ready to Make an Impact
            </span>
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

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="relative inline-block group"
          >
            <a
              href="#projects"
              className="relative inline-block px-8 py-4 border-2 border-[#e1a87a] text-white rounded-md bg-transparent overflow-hidden transition-all duration-300 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-[#e1a87a]/25 group"
            >
              <span className="absolute inset-0 bg-[#e1a87a] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                View My Projects
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decor */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#e1a87a]/10 to-yellow-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
