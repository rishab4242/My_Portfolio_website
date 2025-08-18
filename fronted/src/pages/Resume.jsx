import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Resume</h2>
      <p className="text-gray-600 mb-6">Click below to download my resume:</p>
      <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
        <FaDownload /> Download Resume
      </a>
    </div>
  );
}
