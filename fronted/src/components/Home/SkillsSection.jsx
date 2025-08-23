import React, { useState, useRef, useEffect } from "react";
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
  const [isInView, setIsInView] = useState(false);
  const [headerInView, setHeaderInView] = useState(false);
  const [tabsInView, setTabsInView] = useState(false);
  const [contentInView, setContentInView] = useState(false);
  const [bottomInView, setBottomInView] = useState(false);

  // Refs for viewport detection
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            setIsInView(true);
          } else if (entry.target === headerRef.current) {
            setHeaderInView(true);
          } else if (entry.target === tabsRef.current) {
            setTabsInView(true);
          } else if (entry.target === contentRef.current) {
            setContentInView(true);
          } else if (entry.target === bottomRef.current) {
            setBottomInView(true);
          }
        }
      });
    }, observerOptions);

    const elements = [sectionRef, headerRef, tabsRef, contentRef, bottomRef];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
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

  const SkillCard = ({ skill, index, categoryGradient }) => {
    return (
      <div
        className={`group relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
          contentInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{
          transitionDelay: contentInView ? `${300 + index * 80}ms` : "0ms",
        }}
        onMouseEnter={() => setHoveredSkill(`${categoryGradient}-${index}`)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Neon border effect */}
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryGradient} blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          <div className="flex items-center space-x-4">
            <div className="text-3xl drop-shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-3">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-white text-lg transition-colors duration-300 group-hover:text-gray-100">
              {skill.name}
            </h3>
          </div>

          {/* Corner sparkle */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse">
            <Sparkles className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
          </div>

          {/* Floating particles effect */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 relative overflow-hidden bg-black"
      id="skills"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{ transitionDelay: "300ms" }}
        />
        <div
          className={`absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{ transitionDelay: "500ms" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: headerInView ? "0ms" : "0ms",
          }}
        >
          <div
            className={`inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-xl transition-all duration-600 ${
              headerInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div
              className={`transition-transform duration-500 ${
                headerInView ? "rotate-360" : "rotate-0"
              }`}
            >
              <Star className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm tracking-wide">
              SKILLS & EXPERTISE
            </span>
            <div
              className={`transition-all duration-500 ${
                headerInView ? "animate-pulse" : ""
              }`}
            >
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 drop-shadow-sm transition-all duration-800 ${
              headerInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{
              transitionDelay: headerInView ? "200ms" : "0ms",
            }}
          >
            Technical Skills
          </h1>

          <p
            className={`text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-800 ${
              headerInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{
              transitionDelay: headerInView ? "400ms" : "0ms",
            }}
          >
            Technologies that power my development journey and bring ideas to
            life
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          ref={tabsRef}
          className={`flex justify-center mb-12 transition-all duration-800 ${
            tabsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: tabsInView ? "200ms" : "0ms",
          }}
        >
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
            {skillsData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-3 sm:px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl scale-105`
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                <div className="transition-transform duration-300 hover:rotate-12">
                  {item.icon}
                </div>
                <span className="text-[14px] sm:text-sm font-bold tracking-wide">
                  {item.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div ref={contentRef} className="relative min-h-[400px]">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-400 ${
              contentInView ? "opacity-100" : "opacity-0"
            }`}
            key={activeTab}
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
        </div>

        {/* Bottom Message */}
        <div
          ref={bottomRef}
          className={`text-center max-sm:mt-14 transition-all duration-800 ${
            bottomInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: bottomInView ? "800ms" : "0ms",
          }}
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div
              className={`h-0.5 bg-gray-600 transition-all duration-800 ${
                bottomInView ? "w-8" : "w-0"
              }`}
              style={{
                transitionDelay: bottomInView ? "1000ms" : "0ms",
              }}
            />
            <span className="text-sm font-medium inline-flex items-center gap-2">
              <span
                className={`text-lg transition-all duration-500 ${
                  bottomInView ? "animate-bounce" : ""
                }`}
                style={{
                  animationDelay: bottomInView ? "1200ms" : "0ms",
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                }}
              >
                🚀
              </span>
              Always learning, always growing
            </span>
            <div
              className={`h-0.5 bg-gray-600 transition-all duration-800 ${
                bottomInView ? "w-8" : "w-0"
              }`}
              style={{
                transitionDelay: bottomInView ? "1000ms" : "0ms",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
