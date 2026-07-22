import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import { baseURL } from "../service/api";
import { ChevronDown } from "lucide-react";

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
      setServices(AllData?.services || []);
      setHighlight(AllData?.highlight);
      setCount(AllData?.counters || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════
          HERO — text left, image right
      ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* Desktop Image */}
        <img
          src="/homeimg.jpeg"
          alt="Home Banner"
          className="hidden md:block w-full h-screen object-cover object-center"
        />

        {/* Mobile Image */}
        <img
          src="/mobile.png"
          alt="Home Banner"
          className="block md:hidden w-full h-[30vh] mt-10 object-cover object-center"
        />
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE BLUE SAGE?
      ══════════════════════════════════════ */}
      <section className="bg-black pt-8 md:pt-12 pb-4 md:pb-6 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-center font-semibold mb-6 md:mb-8 font-[Quicksand]
            text-[36px] md:text-[60px] leading-tight tracking-[-0.02em]
            bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
          >
            Why choose Blue Sage?
          </h2>

          <div
            className="border border-gray-600 rounded-[28px] py-6 md:py-8 px-6
            backdrop-blur-md bg-black/60 hover:shadow-[0_0_120px_rgba(200,200,200,0.1)] hover:border-gray-500 transition-all duration-300"
          >
            <div className="grid md:grid-cols-3 text-white items-center">
              {/* Stat 1 */}
              <div className="text-center py-3 md:py-0">
                <h3 className="text-3xl md:text-[44px] font-semibold font-[Quicksand]">
                  250<span className="text-lg">+ Cr</span>
                </h3>
                <p className="text-[#AAAAAA] text-[14px] md:text-[16px] mt-1 font-[Quicksand]">
                  Assets under management
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center py-3 md:py-0 border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-gray-600">
                <h3 className="text-3xl md:text-[44px] font-semibold font-[Quicksand]">
                  350+
                </h3>
                <p className="text-[#AAAAAA] text-[14px] md:text-[16px] mt-1 font-[Quicksand]">
                  Clients trust Blue Sage Wealth
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center py-3 md:py-0">
                <h3 className="text-3xl md:text-[44px] font-semibold font-[Quicksand]">
                  20+ <span className="text-lg">Years</span>
                </h3>
                <p className="text-[#AAAAAA] text-[14px] md:text-[16px] mt-1 font-[Quicksand]">
                  Of experience
                </p>
              </div>
            </div>
          </div>

          {/* Schedule button */}
          <div className="flex items-center justify-center mt-6 md:mt-8">
            <button className="border flex items-center gap-2 border-gray-500 text-white px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium font-[Quicksand]">
              Schedule an expert call <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICE CARDS GRID (MINIMAL VERTICAL GAPS)
      ══════════════════════════════════════ */}
      <section className="bg-black pt-4 pb-8 md:pt-6 md:pb-10 relative overflow-hidden">
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gray-400 blur-[180px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 justify-items-center pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative w-full max-w-[350px] md:max-w-[370px] mx-auto text-center text-white
                  bg-gradient-to-b from-[#181818] via-[#111111] to-[#0a0a0a] border border-gray-800 rounded-[28px] px-6 pt-10 pb-6
                  hover:border-gray-500 hover:shadow-[0_0_50px_rgba(200,200,200,0.12)]
                  hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-start min-h-[190px] md:min-h-[210px]"
              >
                {/* Top Center Icon Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#1c1c1c] border border-gray-700 flex items-center justify-center shadow-lg group-hover:border-gray-500 group-hover:bg-[#252525] transition-all duration-300">
                  <img
                    src={`${baseURL}/${service.icon_img}`}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-[17px] md:text-[19px] font-bold font-[Quicksand] mb-2.5 text-white mt-1 leading-snug">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed font-[Quicksand]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONSULTATION & RUPEE VISUAL (Single Screen on Desktop, Compact on Mobile)
      ══════════════════════════════════════ */}
      <section className="relative bg-black py-8 sm:py-10 md:h-screen md:py-6 overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-between md:h-full md:max-h-[86vh]">
          {/* Quote Heading */}
          <div className="text-center pt-2 pb-2">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-semibold font-[Quicksand] bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent leading-tight max-w-5xl mx-auto">
              Schedule a consultation to begin your investment
              <br className="hidden md:block" />
              journey aligned with your financial goals
            </h2>
          </div>

          {/* Rupee Visual Image */}
          <div className="w-full flex-1 flex items-center justify-center overflow-hidden py-3 md:py-0">
            <img
              src="/scnhome.png"
              alt="Investment Visual"
              className="max-w-full max-h-[35vh] sm:max-h-[45vh] md:max-h-[54vh] object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HIGHLIGHT — "Most portfolios fail..."
      ══════════════════════════════════════ */}
      {highlight && (
        <section className="bg-black py-10 md:py-14 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gray-400 blur-[180px] opacity-15 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-white text-3xl md:text-4xl font-semibold font-[Quicksand] leading-tight">
                {highlight?.title || "Loading..."}
              </h2>

              <p className="text-gray-400 mt-4 max-w-md text-[14px] md:text-[16px] font-[Quicksand] leading-relaxed">
                {highlight?.description}
              </p>

              <button className="mt-6 border border-gray-500 text-white px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium font-[Quicksand]">
                Read more →
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={
                    highlight?.image
                      ? `${baseURL}/${highlight.image}`
                      : "/img/default.jpg"
                  }
                  alt="highlight"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-all duration-300"
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
