import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Variants for smooth animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
        />
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-15 items-center px-4 md:px-16 py-5">
        {/* Left Image */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-full bg-gray-900 md:w-[550px] rounded-xl shadow-lg relative overflow-hidden group"
        >
          <img
            src="/me1.jpg"
            alt="Section 1"
            className="w-full h-full object-cover rounded-xl transform transition-all duration-1000 ease-out md:group-hover:scale-105 group-hover:brightness-110"
          />

          {/* Gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>

          {/* Decorative border that glows on hover */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#e1a87a]/50 group-hover:shadow-lg group-hover:shadow-[#e1a87a]/20 transition-all duration-700"></div>
        </motion.div>

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

            {/* Subtle background animation */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block group"
          >
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
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#e1a87a]/10 to-yellow-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
