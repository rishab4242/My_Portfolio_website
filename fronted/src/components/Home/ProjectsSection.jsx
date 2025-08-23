import React, { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
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

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(
    Array(projects.length).fill(false)
  );

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -20% 0px" }
    );

    cardRefs.current.forEach((el) => el && cardObserver.observe(el));
    return () => cardObserver.disconnect();
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      className=" text-white px-4 md:px-16 py-10 scroll-mt-20"
      id="projects"
    >
      <div className="text-center mb-16">
        <h2 className={`text-5xl font-bold text-gray-100 mb-4 leading-tight transition-all duration-700 ease-out ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          Featured Projects
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transform origin-center transition-transform duration-700 ease-out ${headingVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        <p className={`text-gray-300 mt-4 text-lg transition-all duration-700 ease-out delay-150 ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          A showcase of some projects I've built using MERN stack and modern web
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            data-index={idx}
            className={`bg-gray-900 border border-gray-600 rounded-lg p-8 flex flex-col justify-between hover:border-blue-400 hover:bg-gray-750 transition-all duration-500 ease-out transform group hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 ${visibleCards[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: visibleCards[idx] ? `${idx * 120 + 100}ms` : '0ms' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-100 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                {project.desc}
              </p>
            </div>
            <div className="flex items-center gap-6 mt-4">
              {/* Live Demo */}
              <a
                href={project.demo}
                className="group bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold hover:from-blue-400 hover:to-purple-400 hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ExternalLink size={16} className="text-blue-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>

              {/* GitHub */}
              <a
                href={project.github}
                className="group bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold hover:from-blue-400 hover:to-purple-400 hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLink size={16} className="text-purple-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
