import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogSlider from "./blogs/BlogSlider";
import SmallBlogSlider from "./blogs/SmallBlogSlider";
import BlogGrid from "./blogs/BlogGrid";

const Blog = () => {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        <img
          src="/blog.png"
          alt="Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <span className="border border-gray-600 px-5 py-2 rounded-full text-gray-400 text-sm font-[Quicksand] mb-6">
            Latest Articles
          </span>
          <h1
            className="font-bold font-[Quicksand] tracking-[-0.03em]
              bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent
              text-[40px] leading-tight sm:text-[60px] md:text-[80px]"
          >
            Blog
          </h1>
          <p className="text-gray-400 mt-4 text-[16px] md:text-[18px] max-w-lg font-[Quicksand]">
            Insights, research, and financial wisdom to help you build lasting wealth.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ── BLOG SECTIONS ── */}
      <BlogSlider />
      <SmallBlogSlider />
      <BlogGrid />

      <Footer />
    </>
  );
};

export default Blog;
