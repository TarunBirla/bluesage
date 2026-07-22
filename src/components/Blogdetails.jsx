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
          (item) => item.id === Number(id),
        );

        setBlog(selectedBlog || null);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const blogs = [
  {
    id: 1,
    image: "/bd1.png",
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 2,
    image: "/bd2.png",
    author: "John Doe",
    date: "Aug 24, 2021",
    title: "How Better Financial Planning Helps You Achieve Long-Term Goals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  },
  {
    id: 3,
    image: "/bd3.png",
    author: "John Doe",
    date: "Aug 25, 2021",
    title: "Why Smart Investment Decisions Build Wealth Over Time",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
  },
];

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
          <h1 className="text-white text-4xl font-bold mb-4">{blog?.title}</h1>

          {/* Category */}
          <span className="inline-block text-white text-sm bg-[#222] px-3 py-1 rounded mb-8">
            {blog?.category}
          </span>
        </div>
        {/* Image */}
        <div className="max-w-6xl mx-auto px-5">
          <img
            src={`${baseURL}/${blog?.image}`}
            alt={blog?.title}
            className="w-full h-[250px]  md:h-[500px] object-cover rounded-3xl mb-10"
          />
        </div>
        <div className="max-w-4xl mx-auto px-5">
          {/* Description */}
          {/* <div
      className="prose prose-invert max-w-none text-gray-300 leading-8"
      dangerouslySetInnerHTML={{
        __html: blog?.description || "",
      }}
    /> */}

          <div className="max-w-3xl">
            <h2
              className="
      text-white
      font-['Sen']
      font-bold
      text-[36px]
      leading-[48px]
      tracking-[-2px]
    "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>

            <p
              className="
      mt-6
      text-[#8E8E8E]
      font-['Inter']
      font-normal
      text-[16px]
      leading-[28px]
      tracking-[0px]
    "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div className="max-w-3xl mt-10">
            <h2
              className="
      text-white
      font-['Sen']
      font-bold
      text-[36px]
      leading-[48px]
      tracking-[-2px]
    "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>

            <p
              className="
      mt-6
      text-[#8E8E8E]
      font-['Inter']
      font-normal
      text-[16px]
      leading-[28px]
      tracking-[0px]
    "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
            <p
              className="
      mt-6
      text-[#8E8E8E]
      font-['Inter']
      font-normal
      text-[16px]
      leading-[28px]
      tracking-[0px]
    "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-5">
  <li
    className="
      text-white
      font-['Sen']
      font-bold
      text-[24px]
      leading-[32px]
      tracking-[0px]
    "
  >
    Lorem ipsum dolor sit amet
  </li>

  <li
    className="
      text-white
      font-['Sen']
      font-bold
      text-[24px]
      leading-[32px]
      tracking-[0px]
    "
  >
    Non blandit massa enim nec scelerisque
  </li>

  <li
    className="
      text-white
      font-['Sen']
      font-bold
      text-[24px]
      leading-[32px]
      tracking-[0px]
    "
  >
    Neque egestas congue quisque egestas
  </li>
</ul>
          </div>
        
          <div className="max-w-3xl mt-10">
            <h2
              className="
      text-white
      font-['Sen']
      font-bold
      text-[36px]
      leading-[48px]
      tracking-[-2px]
    "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </h2>

            <p
              className="
      mt-6
      text-[#8E8E8E]
      font-['Inter']
      font-normal
      text-[16px]
      leading-[28px]
      tracking-[0px]
    "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}
    <h2 className="text-white text-[40px] font-['Quicksand'] font-bold mb-14">
      What to read next
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card */}
      {blogs.map((blog) => (
        <div key={blog.id} className="group">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[240px] object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Meta */}
          <p className="mt-5 text-[#B8B8B8] text-[14px] font-['Quicksand']">
            By <span className="text-white">{blog.author}</span>
            <span className="mx-2">|</span>
             {blog.date}
          </p>

          {/* Title */}
          <h3 className="mt-4 text-white font-['Quicksand'] font-bold text-[36px] leading-[48px] tracking-[-2px]">
             {blog.title}
          </h3>

          {/* Description */}
          <p className="mt-5 text-[#8E8E8E] font-['Quicksand'] font-normal text-[16px] leading-[28px]">
           {blog.description}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

<section className="bg-black py-24">
  <div className="max-w-3xl mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="font-['Quicksand'] font-bold text-[32px] md:text-[48px] leading-[1.2] text-white">
      Join our team to be a part
      <br />
      of our story
    </h2>

    {/* Description */}
    <p className="mt-6 max-w-xl mx-auto font-['Quicksand'] text-[16px] leading-[28px] text-[#8E8E8E]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </p>

    {/* Button */}
    <button className="mt-10 px-10 py-4 bg-[#FFD050] text-black font-['Quicksand'] font-bold text-[18px] hover:bg-yellow-400 transition duration-300">
      Join Now
    </button>
  </div>

 
</section>

      <Footer />
    </>
  );
};

export default Blogdetails;
