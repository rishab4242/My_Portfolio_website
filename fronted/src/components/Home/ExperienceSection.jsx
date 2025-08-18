import React from "react";
import {
  Calendar,
  MapPin,
  Code,
  Smartphone,
  Users,
  Bug,
  Globe,
} from "lucide-react";

const ExperienceSection = () => {
  const skills = [
    { icon: <Code className="w-4 h-4" />, text: "React.js & Angular" },
    { icon: <Globe className="w-4 h-4" />, text: "Digital Marketing Pages" },
    {
      icon: <Smartphone className="w-4 h-4" />,
      text: "Restaurant App Testing",
    },
    { icon: <Users className="w-4 h-4" />, text: "Cross-team Collaboration" },
    { icon: <Bug className="w-4 h-4" />, text: "Bug Testing & Fixes" },
  ];

  const achievements = [
    "Developed responsive landing pages with 40% better conversion rates",
    "Successfully integrated 15+ REST APIs for seamless user experiences",
    "Reduced bug reports by 60% through comprehensive testing",
    "Collaborated with 8+ team members across design and backend teams",
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Experience Card */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

        {/* Timeline Dot */}
        <div className="absolute left-6 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

        {/* Main Experience Card */}
        <div className="md:ml-20 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Full Stack Web Developer Intern
            </h3>
            <div className="flex flex-wrap gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Feb 2025 – July 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
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
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Role Overview
              </h4>
              <p className="text-slate-600 leading-relaxed">
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
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-200 hover:scale-105 transition-transform duration-200"
                  >
                    <span className="text-blue-600">{skill.icon}</span>
                    <span className="text-slate-700 font-medium">
                      {skill.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Key Achievements
              </h4>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="bg-slate-50 px-8 py-4 border-t border-slate-200">
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
                  className="px-3 py-1 text-xs font-medium bg-white text-slate-600 rounded-full border border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Visual Elements */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-slate-500">
          <div className="w-8 h-0.5 bg-slate-300"></div>
          <span className="text-sm font-medium">
            6 Months of Professional Growth
          </span>
          <div className="w-8 h-0.5 bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
