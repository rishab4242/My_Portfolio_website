export default function Contact() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"></textarea>
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">Send Message</button>
      </form>
    </div>
  );
}
