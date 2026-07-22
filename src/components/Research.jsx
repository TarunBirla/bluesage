import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ChevronDown } from "lucide-react";
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

      {/* PHILOSOPHY / INTRO (MATCHED TO OUR THEME) */}
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

      {/* WHAT WE OFFER (SMALLER COMPACT BOXES) */}
      <section className="relative bg-black py-10 md:py-16 overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[300px] bg-gray-400 blur-[180px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-center font-bold font-[Quicksand] mb-10
            text-[36px] md:text-[60px] leading-tight tracking-[-0.02em]
            bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
          >
            What We Offer
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {card.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[360px] mx-auto text-white bg-gradient-to-b from-[#181818] via-[#111111] to-[#0a0a0a] border border-gray-800 rounded-3xl p-6 hover:border-gray-500 hover:shadow-[0_0_50px_rgba(200,200,200,0.12)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-start min-h-[200px]"
              >
                {/* Icon */}
                <div className="mb-4 w-12 h-12 rounded-xl bg-[#1c1c1c] border border-gray-700 flex items-center justify-center p-2.5 shadow-md">
                  <img
                    src={`${baseURL}/${item.icon_img}`}
                    alt={item.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-[17px] md:text-[19px] font-bold font-[Quicksand] leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed font-[Quicksand]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Research;
