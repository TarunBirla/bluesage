import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
  
  {/* LEFT - LOGO */}
  <div className="flex-shrink-0">
    <Link to="/">
      <img src="/Logo.png" alt="logo" className="h-18 w-auto" />
    </Link>
  </div>

  {/* CENTER - NAV LINKS */}
  <div className="hidden md:flex items-center space-x-8 text-white text-[20px]  font-normal  leading-[100%] tracking-[0%]">
    {/* <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
    <NavLink to="/abouts" className="hover:text-gray-300">About us</NavLink> */}
    <NavLink to="/">
    {({ isActive }) => (
      <div className="relative pb-1 text-white">
        Home
        <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}></span>
      </div>
    )}
  </NavLink>

  <NavLink to="/abouts">
    {({ isActive }) => (
      <div className="relative pb-1 text-white">
        About us
        <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}></span>
      </div>
    )}
  </NavLink>
  <NavLink to="/project">
    {({ isActive }) => (
      <div className="relative pb-1 text-white">
      Service
        <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}></span>
      </div>
    )}
  </NavLink>
  <NavLink to="/partner">
    {({ isActive }) => (
      <div className="relative pb-1 text-white">
        Partner with us
        <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}></span>
      </div>
    )}
  </NavLink>
  <NavLink to="/blog">
    {({ isActive }) => (
      <div className="relative pb-1 text-white">
    Blog
        <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}></span>
      </div>
    )}
  </NavLink>
    {/* <NavLink to="/project" className="hover:text-gray-300">Service</NavLink>
    <NavLink to="/partner" className="hover:text-gray-300">Partner with us</NavLink>
    <NavLink to="/blog" className="hover:text-gray-300">Blog</NavLink> */}
  </div>

  {/* RIGHT - BUTTONS */}
  <div className="hidden md:flex items-center space-x-4">
    <button
      onClick={() => setOpenLogin(true)}
      className="border border-white px-4 py-2 rounded-full text-[20px] hover:bg-[#303030] text-white transition"
    >
      Investor login
    </button>

    <Link
      to="/project"
      className="bg-[#303030] text-white px-4 py-2 rounded-full text-[20px]"
    >
      Review my portfolio
    </Link>
  </div>

  {/* MOBILE MENU ICON */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-white"
  >
    {menuOpen ? <X size={26} /> : <Menu size={26} />}
  </button>
</div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="flex flex-col md:hidden bg-black text-white px-6 py-6 space-y-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/abouts" onClick={() => setMenuOpen(false)}>
              About us
            </NavLink>
            <NavLink to="/project" onClick={() => setMenuOpen(false)}>
              Service
            </NavLink>
            <NavLink to="/partner" onClick={() => setMenuOpen(false)}>
              Partner with us
            </NavLink>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>
          </div>
        )}
      </header>

      {openLogin && <LoginModal close={() => setOpenLogin(false)} />}
    </>
  );
};

export default Header;
