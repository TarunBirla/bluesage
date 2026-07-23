import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ChevronDown } from "lucide-react";
import http from "../service/http";
import { baseURL } from "../service/api";
import { MFTrailingReturns } from "./Calculators";

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
      setCard(AllData?.offerings ? [...AllData.offerings].reverse() : []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <img
          src="/partner.png"
          alt="partner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-12">
          <h1
            className="text-center font-bold font-[Quicksand]
            text-[38px] md:text-[68px] leading-tight tracking-[-0.02em]
            bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-4"
          >
            Research
          </h1>

          <div className="relative mt-2">
            <select
              className="appearance-none px-8 py-2.5 pr-12 rounded-full
                border border-gray-400 text-white bg-[#252525] text-center
                outline-none cursor-pointer hover:bg-white hover:text-black transition duration-300 font-medium text-sm"
            >
              <option className="text-black">Book a free call</option>
              <option className="text-black">Investment Planning</option>
              <option className="text-black">Portfolio Review</option>
              <option className="text-black">Financial Consultation</option>
            </select>

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
              <ChevronDown size={18} />
            </span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / INTRO */}
      <section className="relative bg-black py-10 md:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-gray-400 blur-[180px] opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-bold font-[Quicksand] bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-8 text-center md:text-left">
            Grow Together. Build Trust. Create Impact.
          </h2>

          <div className="bg-gradient-to-b from-[#181818] via-[#111111] to-[#0a0a0a] border border-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-gray-500 hover:shadow-[0_0_50px_rgba(200,200,200,0.12)] transition-all duration-300">
            <div className="border-l-2 border-gray-500 pl-6 sm:pl-8 space-y-5">
              <p className="text-gray-300 text-[15px] sm:text-[17px] md:text-[18px] font-medium leading-relaxed font-[Quicksand]">
                At Blue Sage Wealth, we don’t just build financial strategies — we build enduring relationships. Our success lies in empowering professionals who are driven by purpose, grounded in ethics, and committed to making a meaningful difference in clients’ financial lives.
              </p>
              <p className="text-gray-400 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-[Quicksand]">
                We are more than a brand — we are a collaborative ecosystem of financial experts, advisors, and entrepreneurs united by one mission: To deliver trustworthy, transparent, and long-term wealth solutions that genuinely improve lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER (EXACT FIGMA DESIGN MATCH) */}
      <section className="relative bg-black py-12 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h2
            className="text-center font-bold font-[Quicksand] mb-12 sm:mb-16
            text-[36px] sm:text-[48px] md:text-[60px] leading-tight tracking-[-0.02em]
            bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
          >
            What We Offer
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7">
            {card.map((item, index) => (
              <div
                key={index}
                className="w-full text-left text-white bg-gradient-to-b from-[#181818] via-[#121212] to-[#0e0e0e] border border-[#2a2a2a] rounded-[24px] p-8 md:p-9 hover:border-gray-600 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-start"
              >
                {/* Icon Container */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-[#1d1d1d] border border-gray-700/80 flex items-center justify-center p-2.5 shadow-md">
                  <img
                    src={`${baseURL}/${item.icon_img}`}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-[19px] md:text-[22px] font-semibold font-[Quicksand] leading-snug mb-3.5 text-left">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#b0b0b0] text-[14px] md:text-[15px] leading-relaxed font-[Quicksand] text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUTUAL FUND TRAILING RETURNS (STANDALONE SECTION WITHOUT TABS) */}
      <section className="bg-black py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <MFTrailingReturns />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Research;
