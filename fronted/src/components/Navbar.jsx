import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Rishab's Portfolio</h1>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/projects" className="hover:text-yellow-300">Projects</Link>
        <Link to="/resume" className="hover:text-yellow-300">Resume</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>
    </div>
  );
}
