import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  Send,
  Calendar,
  Coffee,
  CheckCircle,
} from "lucide-react";

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    className="w-full flex items-center justify-between px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white text-xs"
  >
    <span>{value || "Select Date"}</span>
    <Calendar className="w-4 h-4 text-gray-400" />
  </button>
));

const CoffeeMeetingBox = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(),
    time: "",
    location: "cafe",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setMeetingData({
      ...meetingData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleDateChange = (date) => {
    setMeetingData({ ...meetingData, date });
    setErrors({ ...errors, date: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!meetingData.name.trim()) newErrors.name = "Name is required";
    if (!meetingData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(meetingData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!meetingData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(meetingData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }
    if (!meetingData.time) newErrors.time = "Please select a time";
    if (!meetingData.date) newErrors.date = "Please select a date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Validation check

    setIsSubmitting(true);

    try {
      const emailContent = {
        to: "rishabdakhale17@gmail.com",
        subject: `New Coffee Meeting Request - ${meetingData.name}`,
        body: `
        New Coffee Meeting Request:
        
        Name: ${meetingData.name}
        Email: ${meetingData.email} 
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
        userEmail: meetingData.email,
      };

      const response = await fetch(
        "https://my-portfolio-website-43sw.onrender.com/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailContent),
        }
      );

      if (!response.ok) throw new Error("Failed to send email");

      setIsSubmitting(false);
      setIsScheduled(true);
      setMeetingData({
        name: "",
        email: "",
        phone: "",
        date: new Date(),
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

  if (isScheduled) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-800/30 h-80 flex flex-col justify-center items-center text-center"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4"
        >
          <CheckCircle className="w-8 h-8 text-green-500" />
        </motion.div>
        <motion.h3
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xl font-semibold text-green-400 mb-2"
        >
          Meeting Scheduled!
        </motion.h3>
        <p className="text-gray-400 text-sm mb-4">
          I've received your meeting request and will confirm the details via
          email shortly.
        </p>
        <p className="text-green-300 text-xs">
          Check your email for confirmation ✨
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-800/30 h-80 flex flex-col">
      {!showForm ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center items-center h-full text-center"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 },
            }}
            className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mb-4"
          >
            <Coffee className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">
            Schedule a Coffee Meeting
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Let's discuss your project over a cup of coffee!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold py-2 px-4 rounded-lg text-sm"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col h-full overflow-x-hidden px-2 pt-2"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Coffee className="w-5 h-5 text-orange-500" />
              Schedule Coffee Meeting
            </h3>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => {
                setShowForm(false); // form close
                setMeetingData({
                  // form reset
                  name: "",
                  email: "",
                  phone: "",
                  date: new Date(),
                  time: "",
                  location: "cafe",
                  message: "",
                });
                setErrors({}); // errors clear
              }}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </motion.button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 px-2 pt-2">
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={meetingData.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white text-xs box-border"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={meetingData.email}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white text-xs"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={meetingData.phone}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white text-xs"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <DatePicker
                  selected={meetingData.date}
                  onChange={handleDateChange}
                  minDate={tomorrow}
                  dateFormat="dd/MM/yyyy"
                  customInput={<CustomDateInput />}
                  popperPlacement="top-start"
                  portalId="root"
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>

              <div className="flex flex-col">
                <select
                  name="time"
                  value={meetingData.time}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white text-xs"
                >
                  <option value="" disabled>
                    Select Time
                  </option>
                  {timeSlots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <select
              name="location"
              value={meetingData.location}
              onChange={handleInputChange}
              className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white text-xs"
            >
              {locations.map((loc, i) => (
                <option key={i} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={meetingData.message}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded text-white text-xs resize-none"
            ></textarea>
          </div>

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`mt-4 inline-flex items-center gap-2 justify-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold py-2 px-4 rounded-lg text-sm ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4"
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
                </motion.svg>
                Scheduling...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Schedule Meeting
              </>
            )}
          </motion.button>
        </motion.div>
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="bg-black text-white py-10 scroll-mt-20 overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          ></motion.div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 md:h-80 h-90 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-blue-500" />
              Contact Information
            </h3>

            <div className="space-y-3 flex-1 flex flex-col justify-center">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {item.link ? (
                    <motion.a
                      href={item.link}
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="text-blue-500 group-hover:text-blue-400 transition-colors"
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-80 flex flex-col justify-center"
          >
            <div className="text-center">
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Download className="w-8 h-8 text-black" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">Download Resume</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Get a detailed overview of my skills and experience.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-3 bg-white text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-80 flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Connect With Me
            </h3>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap gap-3 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 sm:p-3 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 text-gray-400 flex-shrink-0 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-400 text-center text-sm">
                Follow me on social media for updates.
              </p>
            </div>
          </motion.div>

          {/* Coffee Meeting Scheduler */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <CoffeeMeetingBox />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 border-t border-gray-800 pt-8 text-center max-sm:px-2 max-sm:mb-5"
      >
        <p className="text-gray-500">
          © 2025 <span className="text-white">RISHAB DAKHALE.</span> Developed
          with passion using modern web technologies. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
