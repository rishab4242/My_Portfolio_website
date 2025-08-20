import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

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

  const SkillCard = ({ skill, index, categoryGradient }) => (
    <div
      className={`group relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-700/50 hover:border-gray-600/70 overflow-hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setHoveredSkill(`${categoryGradient}-${index}`)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      {/* Neon border effect */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryGradient} opacity-0 group-hover:opacity-10 blur-sm transition-all duration-500`}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          <div className="text-3xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
            {skill.icon}
          </div>
          <h3 className="font-semibold text-white group-hover:text-gray-100 transition-colors text-lg">
            {skill.name}
          </h3>
        </div>

        {/* Corner sparkle */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
          <Sparkles className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Star className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">
                SKILLS & EXPERTISE
              </span>
              <Zap className="w-4 h-4" />
            </div>

            <h1 className="text-5xl  font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 drop-shadow-sm">
              Technical Skills
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Technologies that power my development journey and bring ideas to
              life
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
            {skillsData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                  activeTab === index
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl scale-105 hover:scale-110`
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105"
                }`}
              >
                <div
                  className={`transition-transform duration-300 ${
                    activeTab === index ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-bold tracking-wide">
                  {item.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className="relative min-h-[400px]">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-700 ${
                activeTab === categoryIndex
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    categoryGradient={category.gradient}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <span className="text-sm font-medium inline-flex items-center gap-2">
              <span className="text-lg">🚀</span>
              Always learning, always growing
            </span>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
