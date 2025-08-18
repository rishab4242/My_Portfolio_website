import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    { title: "Airbnb Clone", desc: "A full-stack Airbnb clone using MERN stack." },
    { title: "Weather Dashboard", desc: "A real-time weather app using React & API integration." },
    { title: "CIB Website", desc: "Crime Investigation client website built with React & Tailwind." },
    { title: "SEO Single Page", desc: "MERN single-page app optimized for SEO." }
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((p, i) => (
          <motion.div whileHover={{ scale: 1.05 }} key={i} className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
