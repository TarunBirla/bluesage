import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      {/* CTA CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 px-6 sm:px-8 py-6 sm:py-8">
          <h2 className="text-gray-700 text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-center sm:text-left">
            Start Your Investment <br className="hidden sm:block" />
            Journey Here
          </h2>

          <button className="bg-[#303030] text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-black transition w-full sm:w-auto">
            Start your Investment →
          </button>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
