import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ListHub - Task Management Web Application",
      desc: "A MERN-based task management app with real-time updates, user authentication, and project collaboration features.",
      demo: "https://your-live-demo-link.com", // replace with actual link
      github: "https://github.com/yourusername/listhub",
    },
    {
      title: "Weather Information Dashboard",
      desc: "Weather dashboard using OpenWeather API with real-time forecasts, location-based search, and responsive charts.",
      demo: "https://your-weather-demo-link.com",
      github: "https://github.com/yourusername/weather-dashboard",
    },
    {
      title: "Mentation Tech - Official Company Website",
      desc: "Developed the official company website for Mentation Tech, showcasing services, projects, and career opportunities.",
      demo: "https://mentationtech.com",
      github: "https://github.com/yourusername/mentation-tech",
    },
    {
      title: "CIB - Crime Investigation Bureau (Client Project)",
      desc: "Government crime investigation website for case tracking and secure communication. I contributed to the frontend development.",
      demo: "https://cib-demo-link.com",
      github: "https://github.com/yourusername/cib-project",
    },
    {
      title: "Digital Marketing & Web Services (Company Project)",
      desc: "A single-page MERN stack website offering SEO, digital marketing, and web services with a responsive UI and lead generation features.",
      demo: "https://dmws-demo-link.com",
      github: "https://github.com/yourusername/dmws",
    },
    {
      title: "Bhojpal – Restaurant Management App",
      desc: "Restaurant management app for internal use. I worked on frontend development and testing to ensure smooth order tracking and billing.",
      demo: "https://bhojpal-demo-link.com",
      github: "https://github.com/yourusername/bhojpal",
    },
  ];

  return (
    <section className="bg-black text-white px-6 md:px-16 py-10" id="projects">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          A showcase of some projects I’ve built using MERN stack and modern web
          technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-700 rounded-lg p-8 flex flex-col justify-between hover:border-gray-500 transition"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <a
                href="#"
                className="flex items-center text-orange-500 font-semibold hover:underline"
              >
                Live Demo
                <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </a>
              <a
                href="#"
                className="flex items-center text-orange-500 font-semibold hover:underline ml-6"
              >
                GitHub
                <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
