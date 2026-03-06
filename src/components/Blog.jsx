import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
      <Header />

       <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

  {/* Background Image */}
  <img
    src="/blog.png"
    alt="partner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

    <h1
      className="text-white font-[Syne] font-bold
      text-[38px] leading-[46px]
      sm:text-[56px] sm:leading-[60px]
      md:text-[72px] md:leading-[78px]"
    >
      Blog
    </h1>

    {/* Dropdown */}
    <select
      className="mt-10 px-6 py-3 rounded-full
      border border-gray-400
      text-white bg-white/10 backdrop-blur-md
      outline-none cursor-pointer
      hover:bg-white hover:text-black
      transition"
    >
      <option className="text-black">Book a free call</option>
      <option className="text-black">Investment Planning</option>
      <option className="text-black">Portfolio Review</option>
      <option className="text-black">Financial Consultation</option>
    </select>

  </div>

</section>
    
      <Footer />
    </>
  );
};

export default Blog;
