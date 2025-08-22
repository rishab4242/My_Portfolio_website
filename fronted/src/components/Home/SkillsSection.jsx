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

  // Initialize AOS-like functionality
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

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
      data-aos="zoom-in-up"
      data-aos-delay={index * 100}
      className={`aos-item group relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-700/50 hover:border-gray-600/70 overflow-hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
      }}
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
          <div
            className="text-3xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg"
            style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
          >
            {skill.icon}
          </div>
          <h3 className="font-semibold text-white group-hover:text-gray-100 transition-colors text-lg">
            {skill.name}
          </h3>
        </div>

        {/* Corner sparkle */}
        <div
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12"
          style={{ animation: "twinkle 2s ease-in-out infinite" }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
        </div>

        {/* Floating particles effect */}
        <div
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"
          style={{ animation: "float 3s ease-in-out infinite" }}
        ></div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        /* Custom AOS-like Animations */
        [data-aos] {
          opacity: 0;
          transition-property: transform, opacity;
          transition-duration: 0.6s;
          transition-timing-function: ease-out-quart;
        }

        [data-aos].aos-animate {
          opacity: 1;
        }

        /* Zoom In Up Animation */
        [data-aos="zoom-in-up"] {
          transform: scale(0.6) translateY(50px);
        }
        [data-aos="zoom-in-up"].aos-animate {
          transform: scale(1) translateY(0);
        }

        /* Fade Up Animation */
        [data-aos="fade-up"] {
          transform: translateY(50px);
        }
        [data-aos="fade-up"].aos-animate {
          transform: translateY(0);
        }

        /* Fade Down Animation */
        [data-aos="fade-down"] {
          transform: translateY(-50px);
        }
        [data-aos="fade-down"].aos-animate {
          transform: translateY(0);
        }

        /* Fade Left Animation */
        [data-aos="fade-left"] {
          transform: translateX(50px);
        }
        [data-aos="fade-left"].aos-animate {
          transform: translateX(0);
        }

        /* Fade Right Animation */
        [data-aos="fade-right"] {
          transform: translateX(-50px);
        }
        [data-aos="fade-right"].aos-animate {
          transform: translateX(0);
        }

        /* Slide Up Animation */
        [data-aos="slide-up"] {
          transform: translateY(100px);
        }
        [data-aos="slide-up"].aos-animate {
          transform: translateY(0);
        }

        /* Zoom In Animation */
        [data-aos="zoom-in"] {
          transform: scale(0.6);
        }
        [data-aos="zoom-in"].aos-animate {
          transform: scale(1);
        }

        /* Flip Up Animation */
        [data-aos="flip-up"] {
          transform: perspective(2500px) rotateX(-100deg);
          transform-origin: center bottom;
        }
        [data-aos="flip-up"].aos-animate {
          transform: perspective(2500px) rotateX(0deg);
        }

        /* Custom Keyframe Animations */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes rotateIn {
          0% {
            transform: rotate(-200deg) scale(0);
            opacity: 0;
          }
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        /* Animation Classes */
        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
        }

        .animate-slide-left {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-rotate-in {
          animation: rotateIn 1s ease-out forwards;
        }

        /* Hover animations for icons */
        .icon-hover:hover {
          animation: rotateIn 0.5s ease-out;
        }

        /* Pulse animation for buttons */
        .pulse-on-hover:hover {
          animation: pulseGlow 0.3s ease-in-out;
        }
      `}</style>

      <section className="py-10 relative overflow-hidden" id="skills">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            data-aos="fade-right"
            className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            data-aos="fade-left"
            className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
            style={{ animationDelay: "0.7s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              data-aos="fade-down"
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div
                data-aos="zoom-in"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-bounce-in pulse-on-hover"
                style={{ animationDelay: "0.2s" }}
              >
                <Star className="w-5 h-5 icon-hover" />
                <span className="font-bold text-sm tracking-wide">
                  SKILLS & EXPERTISE
                </span>
                <Zap className="w-4 h-4 icon-hover" />
              </div>

              <h1
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 drop-shadow-sm"
                style={{ animationDelay: "0.4s" }}
              >
                Technical Skills
              </h1>

              <p
                data-aos="fade-up"
                className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
                style={{ animationDelay: "0.6s" }}
              >
                Technologies that power my development journey and bring ideas
                to life
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div
            data-aos="slide-up"
            className="flex justify-center mb-12"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
              {skillsData.map((item, index) => (
                <button
                  key={index}
                  data-aos="zoom-in"
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-3 sm:px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 transform pulse-on-hover ${
                    activeTab === index
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl scale-105 hover:scale-110`
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105"
                  }`}
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                    animation: `fadeInUp 0.8s ease-out ${
                      0.3 + index * 0.1
                    }s both`,
                  }}
                >
                  <div
                    className={`transition-transform duration-300 icon-hover ${
                      activeTab === index ? "scale-110" : ""
                    }`}
                  >
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
          <div
            data-aos="fade-up"
            className="text-center max-sm:mt-14"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="inline-flex items-center gap-2 text-gray-400 animate-slide-left">
              <div
                data-aos="fade-right"
                className="w-8 h-0.5 bg-gray-600"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <span className="text-sm font-medium inline-flex items-center gap-2">
                <span
                  className="text-lg animate-bounce-in"
                  style={{ animationDelay: "0.8s" }}
                >
                  🚀
                </span>
                Always learning, always growing
              </span>
              <div
                data-aos="fade-left"
                className="w-8 h-0.5 bg-gray-600"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
