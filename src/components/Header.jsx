import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto py-4 px-6 md:px-2 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <img src="/Logo.png" alt="logo" className="h-12 w-auto" />
          </Link>

          {/* CENTER NAVBAR */}
          <div className="hidden md:flex items-center  px-8 py-3 rounded-full space-x-8 text-white text-sm">
            <NavLink to="/" className="hover:text-gray-300">
              Home
            </NavLink>

            <NavLink to="/abouts" className="hover:text-gray-300">
              About us
            </NavLink>

            <NavLink to="/project" className="hover:text-gray-300">
              Service
            </NavLink>

            <NavLink to="/partner" className="hover:text-gray-300">
              Partner with us
            </NavLink>

            <NavLink to="/blog" className="hover:text-gray-300">
              Blog
            </NavLink>

            {/* BUTTONS */}
            <button
              onClick={() => setOpenLogin(true)}
              className="border border-white px-4 py-2 rounded-full text-xs hover:bg-[#303030] hover:text-white transition"
            >
              Investor login
            </button>

            <Link
              to="/portfolio"
              className="bg-[#303030] text-white px-4 py-2 rounded-full text-xs  transition"
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
          <div className="md:hidden bg-black text-white px-6 py-6 space-y-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/abouts" onClick={() => setMenuOpen(false)}>
              About us
            </NavLink>

            <NavLink to="/service" onClick={() => setMenuOpen(false)}>
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
