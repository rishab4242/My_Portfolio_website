import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with offset for navbar
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // Reduced from 100 to 70
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white border-b border-b-gray-600 p-6 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold">RD</h1>
      <div className="space-x-16 text-lg">
        <button 
          onClick={() => scrollToSection("about")}
          className="hover:text-yellow-300 transition-colors cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="hover:text-yellow-300 transition-colors cursor-pointer"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection("experience")}
          className="hover:text-yellow-300 transition-colors cursor-pointer"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection("projects")}
          className="hover:text-yellow-300 transition-colors cursor-pointer"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection("contact")}
          className="hover:text-yellow-300 transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}