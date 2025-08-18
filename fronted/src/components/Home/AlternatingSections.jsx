export default function AlternatingSections() {
  return (
    <div className="bg-black text-white">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-center px-6 md:px-16 py-16">
        {/* Left Image */}
        <div className="w-full h-96 bg-gray-900 md:h-[730px] rounded-xl shadow-lg">
          {/* yahan pe apni image ka src lagao */}
          <img
            src="/me1.jpg"
            alt="Section 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-6 space-x-24">
          <h3 className="uppercase text-3xl tracking-wider font-semibold text-gray-400">
            Being a Squarespace Developer & Designer is my primary focus.
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            Let’s be honest and cut through the marketing bullshit, you need a
            website that looks amazing and actually works. Bottom line, that’s
            what I do. If you want to learn more about working with me, take a
            look through my website.
          </p>
          <button className="px-6 py-3 border border-orange-400 text-white rounded-md hover:bg-orange-400 hover:text-black transition">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}
