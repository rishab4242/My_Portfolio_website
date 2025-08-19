export default function AboutSection() {
  return (
    <div className="bg-black text-white" id="about">
      {/* Main Heading */}
      <div className="text-center py-10">
        <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6 md:px-16 py-5">
        {/* Left Image */}
        <div className="w-full h-96 bg-gray-900 md:h-[750px] rounded-xl shadow-lg">
          {/* yahan pe apni image ka src lagao */}
          <img
            src="/me1.jpg"
            alt="Section 1"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-6 space-x-6">
          <h3 className="uppercase text-3xl tracking-wider font-semibold text-gray-400">
            Passionate Full Stack Developer Ready to Make an Impact
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            Hi, I'm Rishab Sanju Dakhale! I recently completed my graduation in
            2023-24 from Vartak College. During my final year, I discovered my
            passion for coding and decided to dive deep into the world of web
            development. I started learning through free resources and then
            completed a comprehensive 6-month MERN Stack development course,
            followed by a valuable 6-month internship where I gained hands-on
            experience.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            Currently, I'm actively seeking full-time or entry-level
            opportunities as a Full Stack Developer. What I love most about
            coding is the joy of problem-solving and creating something
            meaningful from scratch. When I'm not coding, you'll find me playing
            kabaddi, trekking through scenic trails, or exploring new
            technologies that keep my curiosity alive.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 border border-orange-400 text-white rounded-md hover:bg-orange-400 hover:text-black transition"
          >
            View My Projects →
          </a>
        </div>
      </div>
    </div>
  );
}
