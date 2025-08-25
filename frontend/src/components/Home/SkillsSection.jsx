import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: window.innerWidth < 768 ? 0.3 : 0.2,
  });

  const skillsData = [
    {
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      skills: [
        { name: "HTML", icon: "🏗️" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React.js", icon: "⚛️" },
        { name: "Redux Toolkit", icon: "🔄" },
        { name: "Bootstrap", icon: "📱" },
        { name: "Tailwind CSS", icon: "💨" },
      ],
    },
    {
      category: "Backend",
      icon: <Code2 className="w-5 h-5" />,
      gradient: "from-green-500 via-emerald-500 to-green-600",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
      ],
    },
    {
      category: "Database & Tools",
      icon: <Database className="w-5 h-5" />,
      gradient: "from-orange-500 via-red-500 to-orange-600",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
      ],
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Teamwork", icon: "🤝" },
        { name: "Communication", icon: "💬" },
        { name: "Adaptability", icon: "🌟" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingParticleVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [-8, 0, -8],
      opacity: [0, 0.2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const tabVariants = {
    inactive: { scale: 1, backgroundColor: "rgba(0, 0, 0, 0)" },
    active: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(55, 65, 81, 0.5)",
      transition: { duration: 0.2 },
    },
  };

  const SkillCard = ({ skill, index, categoryGradient }) => (
    <motion.div
      custom={index}
      initial="hidden"
      animate={skillsInView ? "visible" : "hidden"}
      variants={skillCardVariants}
      className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50"
    >
      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="pulse"
            className="text-3xl drop-shadow-lg"
          >
            {skill.icon}
          </motion.div>
          <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
        </div>
        <motion.div
          variants={sparkleVariants}
          initial="initial"
          animate="animate"
          className="absolute top-3 right-3"
        >
          <Sparkles className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
        </motion.div>
        <motion.div
          variants={floatingParticleVariants}
          initial="initial"
          animate="animate"
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md"
        />
      </div>
    </motion.div>
  );

  // Dynamic margin-top based on number of skills for mobile
  const getDynamicMargin = () => {
    const skillCount = skillsData[activeTab].skills.length;
    if (window.innerWidth < 768) {
      if (skillCount >= 5) return "mt-14"; // Larger margin for more skills
      if (skillCount >= 3) return "mt-10"; // Medium margin for moderate skills
      return "mt-8"; // Smaller margin for fewer skills
    }
    return "mt-10"; // Consistent margin for desktop
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 relative overflow-hidden"
      id="skills"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
          className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-xl"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Star className="w-5 h-5" />
            </motion.div>
            <span className="font-bold text-sm tracking-wide">
              SKILLS & EXPERTISE
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
            {skillsData.map((item, index) => (
              <motion.button
                key={index}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === index ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-3 sm:px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl`
                    : "text-gray-300"
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-[14px] sm:text-sm font-bold tracking-wide">
                  {item.category}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData[activeTab].skills.map((skill, skillIndex) => (
            <SkillCard
              key={`${activeTab}-${skill.name}`}
              skill={skill}
              index={skillIndex}
              categoryGradient={skillsData[activeTab].gradient}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`text-center ${getDynamicMargin()}`}
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <motion.div
              initial={{ width: 0 }}
              animate={sectionInView ? { width: 32 } : { width: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="h-0.5 bg-gray-600"
            />
            <span className="text-sm font-medium inline-flex items-center gap-2">
              <motion.span
                animate={sectionInView ? { y: [0, -5, 0] } : { y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="text-lg"
              >
                🚀
              </motion.span>
              Always learning, always growing
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={sectionInView ? { width: 32 } : { width: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="h-0.5 bg-gray-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
