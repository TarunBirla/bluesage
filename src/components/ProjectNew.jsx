import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import { baseURL } from "../service/api";

const ProjectNew = () => {
  const [services, setServices] = useState([]);
  const [highlight, setHighlight] = useState(null);
  const [count, setCount] = useState([]);
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
      setServices(AllData?.services);
      setHighlight(AllData?.highlight);
      setCount(AllData?.counters || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const stats = count.length > 0
    ? count
    : [
        { number: "250+", subtitle: "Cr Assets managed" },
        { number: "350+", subtitle: "Clients" },
        { number: "20+", subtitle: "Years" },
      ];

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════
          HERO — text left, image right
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
        {/* Right side couple image */}
        <div className="absolute  top-0 h-full w-full md:w-[100%] pointer-events-none">
          <img
            src="/homeimg.jpeg"
            alt="Blue Sage Wealth"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>

      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE BLUE SAGE?
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-white font-bold font-[Quicksand] text-[32px] md:text-[48px] mb-10">
            Why choose Blue Sage?
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 bg-[#111] border border-gray-800 rounded-2xl py-8 px-4 mb-8">
            {stats.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className={`text-center ${i !== 2 ? "border-r border-gray-700" : ""}`}
              >
                <h3 className="text-white font-bold font-[Quicksand] text-[32px] md:text-[48px]">
                  {item.number}
                </h3>
                <p className="text-gray-400 text-[12px] md:text-[14px] font-[Quicksand] uppercase tracking-wide mt-1">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Schedule button */}
          <div className="flex justify-center">
            <button className="border border-gray-600 text-white text-[15px] font-[Quicksand] px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Schedule an appointment ↓
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICE CARDS GRID
      ══════════════════════════════════════ */}
      <section className="bg-black py-10 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-2xl border border-gray-800 p-6
                  hover:border-gray-600 hover:shadow-[0_0_40px_rgba(200,200,200,0.07)]
                  hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4">
                  <img
                    src={`${baseURL}/${service.icon_img}`}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-white text-[16px] font-semibold font-[Quicksand] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-[14px] leading-relaxed font-[Quicksand]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONSULTATION QUOTE TEXT
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold font-[Quicksand] text-[28px] sm:text-[36px] md:text-[48px] leading-tight tracking-[-0.02em]">
            Schedule a consultation to begin your investment journey aligned with your financial goals
          </h2>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RUPEE VISUAL + QR (scnhome image)
      ══════════════════════════════════════ */}
      <section className="bg-black pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <img
              src="/scnhome.png"
              alt="Investment Visual"
              className="max-w-full w-full md:w-[85%] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HIGHLIGHT — "Most portfolios fail..."
      ══════════════════════════════════════ */}
      {highlight && (
        <section className="bg-black py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left text */}
              <div>
                <h2 className="text-white font-bold font-[Quicksand] text-[28px] sm:text-[36px] md:text-[44px] leading-tight mb-6">
                  {highlight.title}
                </h2>
                <p className="text-gray-400 text-[15px] md:text-[16px] leading-relaxed font-[Quicksand] mb-6">
                  {highlight.description}
                </p>
                <button className="border border-gray-600 text-white text-[14px] font-[Quicksand] px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  Read more ↗
                </button>
              </div>
              {/* Right image */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={highlight.image ? `${baseURL}/${highlight.image}` : "/bigimg.png"}
                  alt={highlight.title}
                  className="max-w-[320px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default ProjectNew;
