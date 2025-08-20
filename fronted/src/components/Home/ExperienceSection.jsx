import React from "react";

const ExperienceSection = () => {
  const skills = [
    { text: "React.js & Angular" },
    { text: "Digital Marketing Pages" },
    { text: "Restaurant App Testing" },
    { text: "Cross-team Collaboration" },
    { text: "Bug Testing & Fixes" },
  ];

  const achievements = [
    "Developed responsive landing pages with 40% better conversion rates",
    "Successfully integrated 15+ REST APIs for seamless user experiences",
    "Reduced bug reports by 60% through comprehensive testing",
    "Collaborated with 8+ team members across design and backend teams",
  ];

  return (
    <div
      className="max-w-7xl mx-auto p-8 bg-black min-h-screen"
      id="experience"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Experience Card */}
      <div className="relative">
        {/* Main Experience Card */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden border border-gray-700 hover:border-gray-600">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Full Stack Web Developer Intern
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

          {/* Card Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
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

            {/* Key Skills Used */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500 hover:scale-105 transition-all duration-200"
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

          {/* Card Footer */}
          {/* <div className="bg-gray-800/50 px-8 py-4 border-t border-gray-700">
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Angular",
                "JavaScript",
                "API Integration",
                "Bug Testing",
                "UI/UX",
                "Team Collaboration",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full border border-gray-600 hover:border-blue-500 hover:bg-gray-600 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Additional Visual Elements */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <span className="text-sm font-medium">
            6 Months of Professional Growth
          </span>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </div>

      {/* Optional: Add some floating particles for extra visual appeal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-25 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ExperienceSection;
