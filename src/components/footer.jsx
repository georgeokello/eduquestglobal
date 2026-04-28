const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-200 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* 🔹 Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">EduQuest Global</h2>
          <p className="text-gray-400 text-sm">
            Helping students achieve their dreams of studying abroad through
            expert guidance and trusted support.
          </p>
          <p className="text-gray-400 text-sm py-2">ABC BUILDING, 3e etage bureau D5/F, avenue de l’amitie</p>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/courses" className="hover:text-white">Top Courses</a></li>
            <li><a href="/universities" className="hover:text-white">Universities</a></li>
            <li><a href="/destinations" className="hover:text-white">Destinations</a></li>
          </ul>
        </div>

        {/* 🔹 Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* 🔹 Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get updates on new programs and special offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-lg text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#3D3BF3] text-white px-4 py-2 rounded-lg hover:bg-[#DA4848] transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-2">
            We respect your privacy. No spam.
          </p>
        </div>

      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 EduQuest Global. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;