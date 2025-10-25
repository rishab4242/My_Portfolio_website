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
import {
  Globe,
  Code2,
  Database,
  Users,
  Star,
  Sparkles,
  Zap,
} from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for mobile animations
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

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const SkillCard = ({ skill, index }) => {
    const cardVariants = {
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: index * 0.1,
          duration: 0.6,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
          damping: 20,
        },
      },
    };

    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // ✅ animate only once when visible
        className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 transition-transform duration-500 hover:scale-105"
      >
        <div className="relative z-10 flex items-center space-x-4">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {skill.icon}
          </motion.div>
          <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-10 relative overflow-hidden" id="skills">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-xl"
          >
            <Star className="w-5 h-5" />
            <span className="font-bold text-sm tracking-wide">
              SKILLS & EXPERTISE
            </span>
            <Zap className="w-4 h-4" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 drop-shadow-sm"
          >
            Technical Skills
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Technologies that power my development journey and bring ideas to
            life
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
            {skillsData.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-4 py-3 md:px-6 md:py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl`
                    : "text-gray-300"
                }`}
              >
                {item.icon}
                <span className="text-sm font-bold tracking-wide">
                  {item.category}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeTab].skills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="h-0.5 w-8 bg-gray-600" />
            <span className="text-sm font-medium inline-flex items-center gap-2">
              🚀 Always learning, always growing
            </span>
            <div className="h-0.5 w-8 bg-gray-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
