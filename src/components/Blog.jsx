import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import BlogSlider from "./blogs/BlogSlider";
import SmallBlogSlider from "./blogs/SmallBlogSlider";
import BlogGrid from "./blogs/BlogGrid";
import { ChevronDown } from "lucide-react";
import http from "../service/http";

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

        {/* Content */}
        <div className="relative z-10 mt-16  md:mt-28 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="text-white font-[Syne] font-bold
      text-[38px] leading-[46px]
      sm:text-[56px] sm:leading-[60px]
      md:text-[72px] md:leading-[78px]"
          >
            Blog
          </h1>

          {/* Dropdown Wrapper */}
          <div className="relative mt-16 md:mt-38">
            <select
              className="appearance-none px-8 py-3 pr-12 rounded-full
        border border-gray-400
        text-white bg-[#252525]
        text-center
        outline-none cursor-pointer
        hover:bg-white hover:text-black
        transition"
            >
              <option className="text-black">Book a free call</option>
              <option className="text-black">Investment Planning</option>
              <option className="text-black">Portfolio Review</option>
              <option className="text-black">Financial Consultation</option>
            </select>

            {/* Custom Arrow */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
              <ChevronDown size={20} />
            </span>
          </div>
        </div>
      </section>

      {/* <BlogSlider /> */}
      {/* <SmallBlogSlider /> */}
      <BlogGrid />

      <Footer />
    </>
  );
};

export default Blog;
