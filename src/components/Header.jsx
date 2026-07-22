import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/abouts", label: "About us" },
  { to: "/project", label: "Service" },
  { to: "/research", label: "Research" },
  { to: "/partner", label: "Partner with us" },
  { to: "/calculators", label: "Calculators" },
  { to: "/blog", label: "Blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/Logo.png" alt="Blue Sage Wealth" className="h-14 w-auto" />
            </Link>
          </div>

          {/* CENTER — NAV LINKS (desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-white text-[15px] font-normal font-[Quicksand]">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to}>
                {({ isActive }) => (
                  <div className="relative pb-1 text-white hover:text-gray-300 transition-colors duration-200">
                    {label}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT — BUTTONS (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setOpenLogin(true)}
              className="border border-gray-600 px-5 py-2.5 rounded-full text-[15px] font-[Quicksand]
                hover:border-white text-white transition-all duration-300"
            >
              Investor login
            </button>
            <Link
              to="/project"
              className="bg-white text-black px-5 py-2.5 rounded-full text-[15px] font-[Quicksand] font-semibold
                hover:bg-gray-200 transition-all duration-300"
            >
              Review my portfolio
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800 px-6 py-6 space-y-5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-[16px] font-[Quicksand] transition-colors duration-200 ${
                    isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-gray-800">
              <button
                onClick={() => { setOpenLogin(true); setMenuOpen(false); }}
                className="w-full border border-gray-600 px-5 py-3 rounded-full text-white text-[15px] font-[Quicksand] hover:border-white transition"
              >
                Investor login
              </button>
              <Link
                to="/project"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center bg-white text-black px-5 py-3 rounded-full text-[15px] font-[Quicksand] font-semibold hover:bg-gray-200 transition"
              >
                Review my portfolio
              </Link>
            </div>
          </div>
        )}
      </header>

      {openLogin && <LoginModal close={() => setOpenLogin(false)} />}
    </>
  );
};

export default Header;
