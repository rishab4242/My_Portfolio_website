import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white border-b border-b-gray-600 p-6 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold">RD</h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-16 text-lg">
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

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible bg-black/95 backdrop-blur-md"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6 border-b border-gray-600">
          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-lg hover:text-yellow-300 transition-colors cursor-pointer py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-left text-lg hover:text-yellow-300 transition-colors cursor-pointer py-2"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-left text-lg hover:text-yellow-300 transition-colors cursor-pointer py-2"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-left text-lg hover:text-yellow-300 transition-colors cursor-pointer py-2"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left text-lg hover:text-yellow-300 transition-colors cursor-pointer py-2"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
