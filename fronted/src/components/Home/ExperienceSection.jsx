import React, { useState, useEffect, useRef } from "react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setSkillsVisible(true), 500);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { text: "React.js & Angular" },
    { text: "Digital Marketing Pages" },
    { text: "Restaurant App Testing" },
    { text: "Cross-team Collaboration" },
    { text: "Bug Testing & Fixes" },
  ];

  return (
    <div ref={sectionRef} className="md:max-w-7xl mx-auto md:p-8 p-4 bg-black min-h-screen" id="experience">
      {/* Animated Header */}
      <div className="text-center mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
        <h2 className="text-[26px] md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
      </div>

      {/* Animated Experience Card */}
      <div className="relative">
        <div className={`bg-gray-900 rounded-2xl shadow-2xl transition-all duration-1000 transform overflow-hidden border border-gray-700 hover:shadow-blue-500/30 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/50 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Animated Header with Gradient Flow */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <h3 className="text-2xl font-bold mb-2 relative z-10">
              Full Stack Developer Intern
            </h3>
            <div className="flex flex-wrap gap-4 text-blue-100 relative z-10">
              <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <span>📅</span>
                <span className="font-medium">Feb 2025 – July 2025</span>
              </div>
              <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <span>📍</span>
                <span className="font-medium">Mentation PVT LTD | Vasai (E)</span>
              </div>
            </div>
          </div>

          {/* Animated Content */}
          <div className="p-8">
            <div className={`mb-8 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Role Overview</h4>
              <p className="text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
                Worked on front-end development using React.js and Angular, created digital marketing landing pages, contributed to real-time project development, tested and fixed bugs in a restaurant app, and wrote clean, maintainable code following best practices. Also collaborated with the design and backend teams to implement UI enhancements and integrate APIs for smoother user experiences.
              </p>
            </div>

            {/* Animated Skills */}
            <div className="mb-8">
              <h4 className={`text-lg font-semibold text-gray-200 mb-4 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ 
                      transitionDelay: `${600 + index * 100}ms`,
                      animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                    }}
                  >
                    <span className="text-blue-400">⚡</span>
                    <span className="text-gray-200 font-medium">{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Element */}
      <div className={`mt-12 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <span className="text-sm font-medium">6 Months of Professional Growth</span>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default ExperienceSection;