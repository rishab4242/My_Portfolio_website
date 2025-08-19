import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

const ContactSection = () => {
  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update this path
    link.download = "Your_Name_Resume.pdf";
    link.click();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "your.email@gmail.com",
      link: "mailto:your.email@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 12345 67890",
      link: "tel:+911234567890",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-400",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: "Facebook",
      url: "https://facebook.com/yourusername",
      color: "hover:text-blue-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
      label: "WhatsApp",
      url: "https://wa.me/911234567890",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section className="bg-black text-white py-10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-80 flex flex-col">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-blue-500" />
              Contact Information
            </h3>

            <div className="space-y-3 flex-1 flex flex-col justify-center">
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  {item.link ? (
                    <a
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group-hover:transform group-hover:translate-x-2"
                    >
                      <div className="text-blue-500 group-hover:text-blue-400 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl">
                      <div className="text-blue-500">{item.icon}</div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-80 flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-xl font-semibold mb-3">Download Resume</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Get a detailed overview of my skills and experience.
              </p>

              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-3 bg-white text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-200"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-80 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Connect With Me
            </h3>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-110 hover:-translate-y-1 text-gray-400 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-center text-sm">
                Follow me on social media for updates.
              </p>
            </div>
          </div>

          {/* Email Conversation */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 hover:border-blue-700/50 transition-all duration-300 h-80 flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:from-blue-400 hover:to-purple-500 transition-all duration-300 hover:scale-110">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">Let's Talk</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Ready to work together? Let's discuss your project and turn your
                vision into reality.
              </p>

              <a
                href="mailto:your.email@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Mail className="w-5 h-5" />
                Start Conversation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Full Width Border */}
      <div className="mt-16 border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500">
          © 2025 <span className="text-white">RISHAB DAKHALE.</span> Developed
          with passion using modern web technologies. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;