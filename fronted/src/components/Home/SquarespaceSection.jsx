import React from "react";

export default function SquarespaceSection() {
  const cards = [
    {
      title: "Code Shop",
      text: "Built by an expert, I provide high-quality Squarespace plugins, snippets, and support that will help take your Squarespace site further.",
      link: "View All Plugins",
    },
    {
      title: "Site Builds",
      text: "Looking to have me completely build out a custom and unique Squarespace site? Learn how I work with all of my clients to make this a reality.",
      link: "Hire a Developer",
    },
    {
      title: "Consulting",
      text: "Built your own Squarespace site and need some help? Bring me in for one-on-one training, feature requests, or just to answer your questions.",
      link: "Learn More",
    },
    {
      title: "My Work",
      text: "Feel free to take a look at some of the latest Squarespace projects that I’ve been working on and the type of clients I typically work with.",
      link: "View Projects",
    },
    {
      title: "Online Courses",
      text: "Take a look at my upcoming self-paced online Squarespace courses. Developed to get you up and running with the latest 7.1 version.",
      link: "View Courses",
    },
    {
      title: "Reach Out",
      text: "Looking to hire a Squarespace developer, consultant, or you just have a general question that needs to be answered? Reach out.",
      link: "Contact Me",
    },
  ];

  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light italic">
          Everything Squarespace.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border border-gray-700 rounded-lg p-8 flex flex-col justify-between hover:border-gray-500 transition"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
            </div>
            <a
              href="#"
              className="mt-6 block text-sm font-semibold text-orange-400 uppercase tracking-wide hover:text-orange-300"
            >
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
