import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { ChevronDown } from "lucide-react";

const Partner = () => {
  const cards = [
    {
      title: "Established Brand Backed by Experts",
      desc: "Operate under the Blue Sage Wealth banner — built by IIM alumni and certified financial planners with over 20 years of combined experience.",
    },
    {
      title: "End-to-End Business Infrastructure",
      desc: "Access our robust product platforms, tech tools, operations support, and compliance systems so you can scale efficiently.",
    },
    {
      title: "Training, Mentorship & Growth Support",
      desc: "We invest in our partners through hands-on mentorship, domain training, marketing support, and business development strategies.",
    },
    {
      title: "Join Industry's Best Insurance Company",
      desc: "We are recognized leaders in one of the leading insurance companies and we can help you establish your own successful insurance distribution business.",
    },
    {
      title: "Wide Product Spectrum",
      desc: "Offer your clients best-in-class solutions across mutual funds, insurance, retirement planning, estate advisory, and more.",
    },
    {
      title: "Ethical, Collaborative Culture",
      desc: "Collaborate with a brand built on trust, driven by compliance and focused on leading client impact and maintaining highest standards in ethics.",
    },
  ];
  return (
    <>
      <Header />

      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/partner.png"
          alt="partner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="text-center font-semibold 
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
          >
            Partner with us
          </h1>

          {/* Dropdown */}
          <div className="relative mt-4">
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
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-4 text-gray-300">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">
            Grow Together. Build Trust. Create Impact.
          </h2>

          {/* Paragraphs */}
          <p className="mb-6 text-[#C3C3C3] leading-relaxed">
            At Blue Sage Wealth, we don’t just build financial strategies — we
            build enduring relationships. Our success lies in empowering
            professionals who are driven by purpose, grounded in ethics, and
            committed to making a meaningful difference in clients’ financial
            lives.
          </p>

          <p className="mb-6 text-[#C3C3C3] leading-relaxed">
            We are more than a brand — we are a collaborative ecosystem of
            financial experts, advisors, and entrepreneurs united by one
            mission: To deliver trustworthy, transparent, and long-term wealth
            solutions that genuinely improve lives.
          </p>

          <p className="mb-6 text-[#C3C3C3] leading-relaxed">
            Whether you're a seasoned financial advisor, a tax consultant, an
            insurance specialist, or a passionate newcomer looking to enter the
            wealth industry — we invite you to grow with us.
          </p>

          <p className="mb-4 text-white leading-relaxed">
            By partnering with Blue Sage Wealth, you gain more than just a
            platform — you gain:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 text-[#C3C3C3] space-y-2 mb-6">
            <li>The credibility of a trusted brand</li>
            <li>The backing of experienced mentors</li>
            <li>
              A full suite of investment, insurance, and planning solutions
            </li>
            <li>Ongoing support to help you scale with integrity</li>
          </ul>

          <p className="leading-relaxed text-[#C3C3C3]">
            Together, we can deliver value that goes beyond returns — by helping
            clients build wealth that is secure, sustainable, and
            purpose-driven.
          </p>
        </div>
      </section>
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-3">
          {/* Heading */}
          <h2
            className="text-center font-semibold mb-10 
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
          >
            What We Offer
          </h2>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card1 */}
            {cards.map((item, index) => (
              <div
                key={index}
                className="relative w-full max-w-[320px] mx-auto text-white"
              >
                {/* border box */}
                <img src="/borderbox.png" alt="" className="w-full" />

                {/* content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-start">
                  {/* icon */}
                  <div className="mb-6">
                    <img src="/arrowbox.png" alt="" className="w-10 h-10" />
                  </div>

                  {/* title */}
                  <h3 className="font-semibold text-lg leading-snug mb-4">
                    {item.title}
                  </h3>

                  {/* description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partner;
