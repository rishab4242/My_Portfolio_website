import React, { useState, useEffect, useRef } from "react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Observer for entire section (role overview, header, etc.)
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: isMobile ? 0.4 : 0.2 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    // Skills observer for mobile
    let skillsObserverMobile;
    if (isMobile) {
      skillsObserverMobile = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setSkillsVisible(true), 300);
          }
        },
        { threshold: 0.3 }
      );

      if (skillsRef.current) skillsObserverMobile.observe(skillsRef.current);
    }

    // Skills observer for desktop
    let skillsObserverDesktop;
    if (!isMobile) {
      skillsObserverDesktop = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setSkillsVisible(true), 300);
          }
        },
        { threshold: 0.3 }
      );

      if (skillsRef.current) skillsObserverDesktop.observe(skillsRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      if (skillsObserverMobile) skillsObserverMobile.disconnect();
      if (skillsObserverDesktop) skillsObserverDesktop.disconnect();
    };
  }, []);

  const skills = [
    { text: "React.js & Angular" },
    { text: "Digital Marketing Pages" },
    { text: "Restaurant App Testing" },
    { text: "Cross-team Collaboration" },
    { text: "Bug Testing & Fixes" },
  ];

  return (
    <div
      ref={sectionRef}
      className="md:max-w-7xl mx-auto md:p-8 p-4 bg-black min-h-screen max-sm:mt-5 overflow-hidden"
      id="experience"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[26px] md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
      </div>

      {/* Card */}
      <div className="relative">
        <div
          className={`bg-gray-900 rounded-2xl shadow-2xl transition-all duration-1000 transform overflow-hidden border border-gray-700 hover:shadow-blue-500/30 hover:-translate-y-2 hover:border-blue-500/50 hover:scale-[1.02] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
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
            <div
              className={`mb-8 transform transition-all duration-700 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
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
            </div>

            {/* Skills */}
            <div className="mb-8" ref={skillsRef}>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 cursor-pointer
          ${
            skillsVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                      animation: `float 3s ease-in-out infinite ${
                        index * 0.5
                      }s`,
                    }}
                  >
                    <span className="text-blue-400">⚡</span>
                    <span className="text-gray-200 font-medium">
                      {skill.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceSection;
