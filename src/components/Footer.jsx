import { Link } from "react-router-dom";
import footerBg from "/ftr.png";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* ── MAIN FOOTER ── */}
      <div
        className="bg-cover bg-center bg-no-repeat pt-16 pb-12"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COL 1 — Company */}
          <div>
            <h3 className="font-[Quicksand] font-semibold text-white text-[20px] mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-[15px] text-gray-300">
              <li>
                <Link to="/abouts" className="hover:text-white transition-colors duration-200">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/project" className="hover:text-white transition-colors duration-200">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-white transition-colors duration-200">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-white transition-colors duration-200">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="hover:text-white transition-colors duration-200">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 2 — Services */}
          <div>
            <h3 className="font-[Quicksand] font-semibold text-white text-[20px] mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-[15px] text-gray-300">
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                Wealth Management
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                Tax Planning Services
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                Retirement Planning
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                Risk Management &amp; Insurance Solutions
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                Estate Planning
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                Valuation Services
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                NRI Financial Solutions
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-default">
                Multi Family Office Support
              </li>
            </ul>
          </div>

          {/* COL 3 — Contact Us */}
          <div>
            <h3 className="font-[Quicksand] font-semibold text-white text-[20px] mb-5">
              Contact Us
            </h3>
            <ul className="space-y-5 text-[15px] text-gray-300">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 015.5 3h.5a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 00-1 1v.5A9.5 9.5 0 0013.5 19h.5a1 1 0 001-1v-.5a1 1 0 011-1h3a1 1 0 011 1v.5A2.5 2.5 0 0118.5 21C9.94 21 3 14.06 3 5.5z" />
                </svg>
                <span>+91 9428129291</span>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9 6-9-6M3 8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span>support@desaiinvestment.in</span>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                <span>11, Amritwadi Society Station Road Dahod, Gujarat – 389151 India</span>
              </li>
            </ul>
          </div>

          {/* COL 4 — Logo + Follow Us */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <Link to="/">
                <img src="/Logo.png" alt="Blue Sage Wealth" className="h-14 w-auto" />
              </Link>
            </div>

            {/* Follow Us */}
            <h3 className="font-[Quicksand] font-semibold text-white text-[20px] mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-[#1877F2] hover:opacity-90 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a href="#" aria-label="X (Twitter)"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-black border border-gray-600 hover:border-gray-400 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a href="#" aria-label="Pinterest"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-[#E60023] hover:opacity-90 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-[#0A66C2] hover:opacity-90 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" aria-label="YouTube"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-[#FF0000] hover:opacity-90 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 rounded-md flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:opacity-90 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-2">
          <p className="text-[12px] md:text-[13px] text-[#9B9B9B]">
            AMFI Registered Mutual Fund Distributor | ARN- 152121 | ARN valid from: 14 Aug 2018 | Current Validity of ARN: 13 Aug 2027
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[12px] md:text-[13px] text-[#9B9B9B]">
            <span>© 2025 Blue Sage Wealth. All Rights Reserved.</span>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Important Links</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Disclaimer</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Disclosure</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">SID/SAI/KIM</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">SEBI Circulars</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
