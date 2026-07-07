import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

import { ChevronDown } from "lucide-react";
import http from "../service/http";


import { baseURL } from "../service/api";
import { useParams } from "react-router-dom";

const Blogdetails = () => {
  const { id } = useParams();

const [blog, setBlog] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
  getBlog();
}, [id]);

const getBlog = async () => {
  try {
    const res = await http.get("/blogs");

    if (res.data?.data) {
      const selectedBlog = res.data.data.find(
        (item) => item.id === Number(id)
      );

      setBlog(selectedBlog || null);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

if (loading) {
  return (
    <>
      <Header />
      <div className="bg-black text-white h-screen flex justify-center items-center">
        Loading...
      </div>
      <Footer />
    </>
  );
}

  return (
    <>
      <Header />

      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/Mask group.png"
          alt="partner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 mt-16  md:mt-28 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="text-white font-[Syne] font-semibold font-weight-600 font-[Quicksand]
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

     <section className="bg-black py-20">
  <div className="max-w-4xl mx-auto px-5">

    {/* Author */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-3 h-3 rounded-full bg-white"></div>

      <div>
        <h4 className="text-white text-sm font-semibold">
          {blog?.author}
        </h4>

        <p className="text-gray-400 text-xs">
          {new Date(blog?.published_date).toLocaleDateString()}
        </p>
      </div>
    </div>

    {/* Title */}
    <h1 className="text-white text-4xl font-bold mb-4">
      {blog?.title}
    </h1>

    {/* Category */}
    <span className="inline-block text-white text-sm bg-[#222] px-3 py-1 rounded mb-8">
      {blog?.category}
    </span>

    {/* Image */}
    <img
      src={`${baseURL}/${blog?.image}`}
      alt={blog?.title}
      className="w-full h-[500px] object-cover rounded-3xl mb-10"
    />

    {/* Description */}
    <div
      className="prose prose-invert max-w-none text-gray-300 leading-8"
      dangerouslySetInnerHTML={{
        __html: blog?.description || "",
      }}
    />

  </div>
</section>

      <Footer />
    </>
  );
};

export default Blogdetails;
