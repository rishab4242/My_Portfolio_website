import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  Send,
  Clock,
  Calendar,
  MessageCircle,
  Coffee,
  Star,
  Users,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const CoffeeMeetingBox = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: "cafe",
    message: "",
  });

  const handleInputChange = (e) => {
    setMeetingData({
      ...meetingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailContent = {
        to: "rishabdakhale17@gmail.com", // Your email
        subject: `New Coffee Meeting Request - ${meetingData.name}`,
        body: `
        New Coffee Meeting Request:
        
        Name: ${meetingData.name}
        Email: ${meetingData.email} // User's email
        Phone: ${meetingData.phone}
        Preferred Date: ${meetingData.date}
        Preferred Time: ${meetingData.time}
        Location Preference: ${
          meetingData.location === "cafe"
            ? "Coffee Shop"
            : meetingData.location === "office"
            ? "Office/Co-working Space"
            : "Other"
        }
        Message: ${meetingData.message}
        
        Please confirm the meeting details.
      `,
        userEmail: meetingData.email, // Send user's email to backend
      };

      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailContent),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsSubmitting(false);
      setIsScheduled(true);
      setMeetingData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        location: "cafe",
        message: "",
      });

      setTimeout(() => {
        setIsScheduled(false);
        setShowForm(false);
      }, 5000);
    } catch (error) {
      console.error("Error scheduling meeting:", error);
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const locations = [
    { value: "cafe", label: "Coffee Shop" },
    { value: "office", label: "Office/Co-working" },
    { value: "other", label: "Other" },
  ];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (isScheduled) {
    return (
      <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-800/30 h-80 flex flex-col justify-center items-center text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-green-400 mb-2">
          Meeting Scheduled!
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          I've received your meeting request and will confirm the details via
          email shortly.
        </p>
        <p className="text-green-300 text-xs">
          Check your email for confirmation ✨
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-800/30 h-80 flex flex-col">
      {!showForm ? (
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mb-4">
            <Coffee className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Schedule a Coffee Meeting
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Let's discuss your project over a cup of coffee!
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Coffee className="w-5 h-5 text-orange-500" />
              Schedule Coffee Meeting
            </h3>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={meetingData.name}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-xs"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={meetingData.email}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-xs"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={meetingData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-xs"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                name="date"
                value={meetingData.date}
                onChange={handleInputChange}
                min={minDate}
                required
                className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white focus:outline-none focus:border-orange-500 transition-colors text-xs"
              />
              <select
                name="time"
                value={meetingData.time}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white focus:outline-none focus:border-orange-500 transition-colors text-xs"
              >
                <option value="" disabled>
                  Select Time
                </option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <select
              name="location"
              value={meetingData.location}
              onChange={handleInputChange}
              required
              className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white focus:outline-none focus:border-orange-500 transition-colors text-xs"
            >
              {locations.map((loc, index) => (
                <option key={index} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={meetingData.message}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-xs resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 inline-flex items-center gap-2 justify-center bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Scheduling...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Schedule Meeting
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

const ContactSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Full Stack Resume.pdf";
    link.download = "Full Stack Resume.pdf";
    link.click();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "rishabdakhale17@gmail.com",
      link: "mailto:rishabdakhale17@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7666938815",
      link: "tel:+917666938815",
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
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "GitHub",
      url: "https://github.com/rishab4242/",
      color: "hover:text-gray-300",
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rishab-dakhale-782346344/",
      color: "hover:text-blue-400",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: "Instagram",
      url: "https://www.instagram.com/rishabdakhale2002/",
      color: "hover:text-pink-400",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: "Facebook",
      url: "https://www.facebook.com/rishab.dakhale.9",
      color: "hover:text-blue-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
      label: "WhatsApp",
      url: "https://wa.me/917666938815",
      color: "hover:text-green-400",
    },
  ];

  const stats = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "Projects",
      value: "15+",
    },
    { icon: <Users className="w-6 h-6" />, label: "Clients", value: "8+" },
    {
      icon: <Star className="w-6 h-6" />,
      label: "Experience",
      value: "2+ Years",
    },
  ];

  const availability = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ];

  return (
    <section className="bg-black text-white py-10 scroll-mt-20" id="contact">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto ">
          {/* Contact Information */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 md:h-80 h-90 flex flex-col">
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
              <div className="flex flex-nowrap gap-2 justify-center overflow-x-auto sm:flex-wrap sm:gap-4 md:flex-wrap md:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-110 hover:-translate-y-1 text-gray-400 flex-shrink-0 ${social.color}`}
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

          {/* Coffee Meeting Scheduler */}
          <CoffeeMeetingBox />
        </div>
      </div>

      {/* Bottom Section - Full Width Border */}
      <div className="mt-16 border-t border-gray-800 pt-8 text-center max-sm:px-2 max-sm:mb-5">
        <p className="text-gray-500">
          © 2025 <span className="text-white">RISHAB DAKHALE.</span> Developed
          with passion using modern web technologies. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
