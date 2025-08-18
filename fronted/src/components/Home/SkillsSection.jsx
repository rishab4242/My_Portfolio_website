import React, { useState, useEffect } from "react";
import { Globe, Code2, Database, Users, Star, Sparkles } from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
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
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
      ],
    },
    {
      category: "Database & Tools",
      icon: <Database className="w-5 h-5" />,
      gradient: "from-orange-500 to-red-500",
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
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Teamwork", icon: "🤝" },
        { name: "Communication", icon: "💬" },
        { name: "Adaptability", icon: "🌟" },
      ],
    },
  ];

  const SkillCard = ({ skill, index }) => (
    <div
      className={`group bg-transparent rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="font-medium text-white  transition-colors">
          {skill.name}
        </h3>
      </div>

      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 transition-all duration-300"></div>

      {/* Corner sparkle */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="w-3 h-3 text-yellow-400" />
      </div>
    </div>
  );

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full mb-4 shadow-lg">
              <Star className="w-4 h-4" />
              <span className="font-semibold text-sm">Skills & Expertise</span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-3">
              My Technical Skills
            </h1>

            <p className="text-lg text-gray-400">
              Technologies that power my development journey
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 p-1 bg-transparent rounded-2xl shadow-lg border border-gray-200">
            {skillsData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-md transform scale-105`
                    : "text-white hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className="relative min-h-[300px]">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-500 ${
                activeTab === categoryIndex
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="inline-block bg-transparent text-white px-6 py-3 rounded-xl shadow-md border border-gray-200">
            <span className="font-medium">
              Always learning, always growing 🚀
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
