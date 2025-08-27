import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const skills = [
    { text: "React.js & Angular" },
    { text: "Digital Marketing Pages" },
    { text: "Restaurant App Testing" },
    { text: "Cross-team Collaboration" },
    { text: "Bug Testing & Fixes" },
  ];

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="md:max-w-7xl mx-auto md:p-8 p-4 bg-black min-h-screen max-sm:mt-5 overflow-hidden"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Header */}
      <motion.div className="text-center mb-12" variants={fadeUp} custom={0}>
        <h2 className="text-[26px] md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
      </motion.div>

      {/* Card */}
      <motion.div variants={fadeUp} custom={1} className="relative">
        <motion.div
          variants={fadeUp}
          custom={1.2}
          className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 hover:shadow-blue-500/30 hover:-translate-y-2 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-700 overflow-hidden"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 p-6 text-white relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">
              Full Stack Developer Intern
            </h3>
            <div className="flex flex-wrap gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span className="font-medium">Feb 2025 – July 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span className="font-medium">
                  Mentation PVT LTD | Vasai (E)
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Role Overview */}
            <motion.div variants={fadeUp} custom={1.4} className="mb-8">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">
                Role Overview
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Worked on front-end development using React.js and Angular,
                created digital marketing landing pages, contributed to
                real-time project development, tested and fixed bugs in a
                restaurant app, and wrote clean, maintainable code following
                best practices. Also collaborated with the design and backend
                teams to implement UI enhancements and integrate APIs for
                smoother user experiences.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeUp} custom={1.6} className="mb-8">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    custom={2 + index * 0.2}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
                  >
                    <span className="text-blue-400">⚡</span>
                    <span className="text-gray-200 font-medium">
                      {skill.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceSection;
