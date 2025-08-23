import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ListHub - Task Management Web Application",
      desc: "A MERN-based task management app with real-time updates, user authentication, and project collaboration features.",
      demo: "https://listhub-full-featured-task-management.onrender.com/listings",
      github: "https://github.com/rishab4242/Mega-Project",
    },
    {
      title: "Weather Information Dashboard",
      desc: "Weather dashboard using OpenWeather API with real-time forecasts, location-based search, and responsive charts.",
      demo: "https://weather-info-rouge.vercel.app/",
      github: "https://github.com/rishab4242/Weather-Info",
    },
    {
      title: "Mentation Tech - Official Company Website",
      desc: "Developed the official company website for Mentation Tech, showcasing services, projects, and career opportunities.",
      demo: "https://mentationtech.vercel.app/",
      github: "https://github.com/rishab4242/Mentationtech",
    },
    {
      title: "CIB - Crime Investigation Bureau (Client Project)",
      desc: "Government crime investigation website for case tracking and secure communication. I contributed to the frontend development.",
      demo: "https://mentationgroup.com/cib/",
      github: "https://github.com/rishab4242/ncia",
    },
    {
      title: "Digital Marketing & Web Services (Company Project)",
      desc: "A single-page MERN stack website offering SEO, digital marketing, and web services with a responsive UI and lead generation features.",
      demo: "https://mentationgroup.com/mern-development/",
      github: "https://github.com/rishab4242/digitalmarketing-project",
    },
    {
      title: "Bhojpal – Restaurant Management App",
      desc: "Restaurant management app for internal use. I worked on frontend development and testing to ensure smooth order tracking and billing.",
      demo: "https://thebhojpal.com/",
      github: "https://github.com/Shikhaa098/Bhojpal_frontend",
    },
  ];

  return (
    <section
      className="text-white px-4 md:px-16 py-10 scroll-mt-20 overflow-hidden"
      id="projects"
    >
      {/* Animated Header */}
      <div className="text-center mb-16">
        <h2
          className={`text-5xl font-bold text-gray-100 mb-4 leading-tight transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Featured Projects
        </h2>

        <div
          className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transform transition-all duration-1200 delay-200 ${
            isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        ></div>

        <p
          className={`text-gray-300 mt-4 text-lg transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          A showcase of some projects I've built using MERN stack and modern web
          technologies.
        </p>
      </div>

      {/* Animated Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`bg-gray-900 border border-gray-600 rounded-lg p-8 flex flex-col justify-between 
              transform transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/20
              ${
                hoveredCard === idx
                  ? "border-blue-400 bg-gray-800"
                  : "hover:border-blue-400 hover:bg-gray-750"
              }
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }
            `}
            style={{
              transitionDelay: `${600 + idx * 100}ms`,
              transformStyle: "preserve-3d",
            }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background gradient on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg 
              transition-opacity duration-500 ${
                hoveredCard === idx ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            {/* Floating animation for content */}
            <div
              className={`space-y-4 relative z-10 transform transition-transform duration-300 ${
                hoveredCard === idx ? "translate-y-[-2px]" : ""
              }`}
            >
              <h3
                className={`text-xl font-medium text-gray-100 leading-tight transform transition-all duration-300 ${
                  hoveredCard === idx ? "text-blue-300" : ""
                }`}
              >
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed transform transition-all duration-300">
                {project.desc}
              </p>
            </div>

            {/* Animated Links */}
            <div
              className={`flex items-center gap-6 mt-4 relative z-10 transform transition-all duration-300 ${
                hoveredCard === idx ? "translate-y-[-2px]" : ""
              }`}
            >
              {/* Conditionally render Live Demo except for Bhojpal */}
              {project.title !== "Bhojpal – Restaurant Management App" && (
                <a
                  href={project.demo}
                  className={`bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold 
                    hover:from-blue-400 hover:to-purple-400 hover:underline transition-all flex items-center gap-1 
                    transform hover:scale-110 hover:translate-x-1 duration-300 relative group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ExternalLink
                    size={16}
                    className={`text-blue-500 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                      hoveredCard === idx ? "animate-pulse" : ""
                    }`}
                  />
                </a>
              )}

              {/* GitHub with bounce animation */}
              <a
                href={project.github}
                className={`bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold 
                  hover:from-blue-400 hover:to-purple-400 hover:underline transition-all flex items-center gap-1 
                  transform hover:scale-110 hover:translate-x-1 duration-300 relative group`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLink
                  size={16}
                  className={`text-purple-500 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                    hoveredCard === idx ? "animate-bounce" : ""
                  }`}
                />
              </a>
            </div>

            {/* Animated corner accent */}
            <div
              className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
              rounded-bl-full transform transition-all duration-500 ${
                hoveredCard === idx
                  ? "scale-150 opacity-100"
                  : "scale-0 opacity-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
