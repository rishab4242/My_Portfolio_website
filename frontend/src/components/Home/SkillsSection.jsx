import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaPuzzlePiece,
  FaUsers,
  FaComments,
  FaStar,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Globe, Code2, Database, Users, Star, Zap } from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-orange-600 text-3xl" />,
        },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500 text-3xl" />,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-400 text-3xl" />,
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux className="text-purple-600 text-3xl" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-violet-600 text-3xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
        },
      ],
    },
    {
      category: "Backend",
      icon: <Code2 className="w-5 h-5" />,
      gradient: "from-green-500 via-emerald-500 to-green-600",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600 text-3xl" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-700 text-3xl" />,
        },
      ],
    },
    {
      category: "Database & Tools",
      icon: <Database className="w-5 h-5" />,
      gradient: "from-orange-500 via-red-500 to-orange-600",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500 text-3xl" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-500 text-3xl" />,
        },
        { name: "GitHub", icon: <SiGithub className="text-black text-3xl" /> },
        {
          name: "VS Code",
          icon: <VscCode className="text-blue-600 text-3xl" />,
        },
      ],
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      skills: [
        {
          name: "Problem Solving",
          icon: <FaPuzzlePiece className="text-indigo-600 text-3xl" />,
        },
        {
          name: "Teamwork",
          icon: <FaUsers className="text-green-600 text-3xl" />,
        },
        {
          name: "Communication",
          icon: <FaComments className="text-blue-500 text-3xl" />,
        },
        {
          name: "Adaptability",
          icon: <FaStar className="text-yellow-500 text-3xl" />,
        },
      ],
    },
  ];

  // Mobile skill animation
  const mobileVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  // Desktop skill animation
  const desktopVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.6, 0.01, 0.2, 0.95],
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    }),
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      custom={index}
      variants={isMobile ? mobileVariants : desktopVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 cursor-pointer transition-all"
    >
      {skill.icon}
      <span className="text-white font-semibold">{skill.name}</span>
    </motion.div>
  );

  return (
    <section className="py-10 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and skills that power my development journey
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
            {skillsData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center space-x-2 px-4 py-3 md:px-6 md:py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl`
                    : "text-gray-300"
                }`}
              >
                {item.icon}
                <span className="text-sm font-bold tracking-wide">
                  {item.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeTab].skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
