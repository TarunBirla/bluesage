import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import { baseURL } from "../service/api";

const Research = () => {
  const [content_section, setContent_section] = useState(null);
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomes();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fetchHomes = async () => {
    try {
      setLoading(true);
      const res = await http.get(`/home`);
      const AllData = res.data?.data;
      console.log("AllData", AllData);
      setContent_section(AllData?.content_section);
      setCard(AllData?.offerings.reverse());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/partner.png"
          alt="Research hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gray-400 blur-[200px] opacity-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="font-[Quicksand] font-bold
              text-[48px] md:text-[80px] leading-[52px] md:leading-[88px]
              tracking-[-0.02em]
              bg-gradient-to-b from-white to-[#999999]
              bg-clip-text text-transparent mb-6"
          >
            Research
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-7 mb-10">
            Data-driven insights for smarter investment decisions.
          </p>

          <button
            className="px-8 py-3 rounded-full border border-gray-600 text-white
              hover:bg-white hover:text-black transition-all duration-300 font-[Quicksand] font-semibold"
          >
            Explore Research
          </button>
        </div>
      </section>

      {/* ── 2. INTRO / PHILOSOPHY SECTION ── */}
      <section className="relative bg-black py-16 md:py-24 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gray-400 blur-[200px] opacity-15 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="border-l-2 border-gray-600 pl-8">
            <h2 className="text-gray-300 text-4xl font-bold font-[Quicksand] mb-6">
              Our Research Philosophy
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              At Blue Sage Wealth, we don't just build financial strategies — we
              build enduring relationships. Our success lies in empowering
              professionals who are driven by purpose, grounded in ethics, and
              committed to making a meaningful difference in clients' financial
              lives.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              We are more than a brand — we are a collaborative ecosystem of
              financial experts, advisors, and entrepreneurs united by one
              mission: To deliver trustworthy, transparent, and long-term wealth
              solutions that genuinely improve lives.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              Whether you're a seasoned financial advisor, a tax consultant, an
              insurance specialist, or a passionate newcomer looking to enter the
              wealth industry — we invite you to grow with us.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-4">
              By partnering with Blue Sage Wealth, you gain more than just a
              platform — you gain:
            </p>

            <ul className="text-gray-400 text-lg leading-9 space-y-1">
              <li>• The credibility of a trusted brand</li>
              <li>• The backing of experienced mentors</li>
              <li>• A full suite of investment, insurance, and planning solutions</li>
              <li>• Ongoing support to help you scale with integrity</li>
            </ul>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              Together, we can deliver value that goes beyond returns — by
              helping clients build wealth that is secure, sustainable, and
              purpose-driven.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. RESEARCH TOOLS / OFFERINGS CARDS ── */}
      <section className="relative bg-black py-16 md:py-24 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gray-400 blur-[200px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section heading */}
          <h2
            className="text-center font-[Quicksand] font-bold mb-14
              text-[40px] md:text-[64px] leading-[44px] md:leading-[72px]
              tracking-[-0.02em]
              bg-gradient-to-b from-white to-[#999999]
              bg-clip-text text-transparent"
          >
            Research Tools
          </h2>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {card.map((item, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-800 rounded-2xl p-8
                  hover:border-gray-600
                  hover:scale-[1.02]
                  hover:shadow-[0_0_50px_rgba(200,200,200,0.08)]
                  transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <img
                  src={`${baseURL}/${item.icon_img}`}
                  alt={item.title}
                  className="w-12 h-12 mb-5 object-contain"
                />

                {/* Title */}
                <h3 className="text-white text-xl font-semibold font-[Quicksand] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DATA STATS ROW ── */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0d0d0d] rounded-2xl border border-gray-800 py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center py-6 md:py-0">
                <span
                  className="font-[Quicksand] font-bold text-[48px] leading-tight
                    bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
                >
                  500+
                </span>
                <span className="text-gray-500 text-sm mt-1 tracking-wide uppercase">
                  Research Reports
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center py-6 md:py-0">
                <span
                  className="font-[Quicksand] font-bold text-[48px] leading-tight
                    bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
                >
                  20+
                </span>
                <span className="text-gray-500 text-sm mt-1 tracking-wide uppercase">
                  Years of Data
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center py-6 md:py-0">
                <span
                  className="font-[Quicksand] font-bold text-[48px] leading-tight
                    bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
                >
                  50+
                </span>
                <span className="text-gray-500 text-sm mt-1 tracking-wide uppercase">
                  Fund Categories
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DISCLAIMER ── */}
      <div className="bg-black">
        <div className="max-w-2xl mx-auto px-6 py-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs text-center leading-5">
            All research is for educational purposes only and does not constitute
            investment advice. Please consult your financial advisor.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Research;
