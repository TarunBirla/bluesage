import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import SIPCalculator from "./SIPCalculator";
import http from "../service/http";
import { baseURL } from "../service/api";

/* ─────────────────────────────────────────────
   Scroll-highlight animated text
───────────────────────────────────────────── */
const lines = [
  { text: "Blue Sage Wealth is a trusted ", bold: true },
  { text: "investment distribution firm built on ", bold: true },
  { text: "transparency, trust, and long-term", bold: false },
  { text: "relationships.", bold: false },
  { text: "With over 20 years of experience, we  ", bold: false },
  { text: "help individuals, families, and business ", bold: false },
  { text: "owners invest in suitable mutual fund ", bold: false },
  { text: "solutions and build long-term wealth  ", bold: false },
  { text: "through disciplined investing.", bold: false },
  { text: "Our approach focuses on simplifying", bold: false },
  { text: "investments, providing ongoing support,", bold: false },
  { text: "and helping you stay aligned with your", bold: false },
  { text: "financial goals.", bold: false },
];

function ScrollHighlightText() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = windowHeight + rect.height;
      const current = windowHeight - rect.top;
      let prog = current / total;
      prog = Math.max(0, Math.min(1, prog));
      setProgress(prog);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <h2>
        {lines.map((line, i) => {
          const start = i / lines.length;
          const end = (i + 1) / lines.length;
          let opacity = 0.18;
          if (progress >= start && progress <= end) {
            opacity = 0.18 + ((progress - start) / (end - start)) * 0.82;
          } else if (progress > end) {
            opacity = 1;
          }
          return (
            <span
              key={i}
              className="block transition-all duration-300 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[44px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                lineHeight: "126%",
                letterSpacing: "-0.04em",
                color: `rgba(255,255,255,${opacity})`,
                opacity,
              }}
            >
              {line.text}
            </span>
          );
        })}
      </h2>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Home Component
───────────────────────────────────────────── */
const Home = () => {
  const partnerRef = useRef(null);
  const swiperRef = useRef(null);
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);
  const swiper3 = useRef(null);
  const swiper4 = useRef(null);

  const [count, setCount] = useState([]);
  const [clienttest, setClientTest] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [awards, setAwards] = useState([]);
  const [logos, setLogos] = useState([]);
  const [insights, setInsights] = useState([]);
  const [activeInsightIndex, setActiveInsightIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomes();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      swiper1.current?.swiper?.autoplay?.start();
      swiper2.current?.swiper?.autoplay?.start();
      swiper3.current?.swiper?.autoplay?.start();
      swiper4.current?.swiper?.autoplay?.start();
    }, 200);
  }, [logos]);

  const fetchHomes = async () => {
    try {
      setLoading(true);
      const res = await http.get(`/home`);
      const AllData = res.data?.data;
      setCount(AllData?.counters || []);
      setClientTest(AllData?.client_testimonials || []);
      setTestimonials(AllData?.testimonials || []);
      setAwards(AllData?.awards || []);
      setLogos(AllData?.client_logos || []);
      setInsights(AllData?.insights || []);
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
          1. HERO SECTION
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
          className="block md:hidden w-full h-[35vh] mt-12 object-cover object-center"
        />
      </section>

      {/* ══════════════════════════════════════
          2. STATS BAR (Desktop & Mobile)
      ══════════════════════════════════════ */}
      <section className="bg-black py-4 sm:py-6 md:py-8 hidden md:block">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div
            className="grid grid-cols-2 -mt-16 md:grid-cols-4 
              bg-[#121212] border border-gray-700 rounded-2xl 
              py-8 text-center text-white shadow-xl
              hover:shadow-[0_0_120px_#C2C2C2] hover:border-gray-600 transition-all duration-300"
          >
            {count.map((item, index) => (
              <div key={index}>
                <h3 className="text-[32px] md:text-[52px] text-[#FFFFFF] font-medium font-[Quicksand]">
                  {item.number}
                </h3>
                <p className="text-[12px] md:text-[15px] text-[#FFFFFF] font-medium mt-1 font-[Quicksand] uppercase">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 
              w-[90vw] max-w-[600px] h-[150px] 
              bg-gradient-to-t from-gray-200 to-transparent 
              blur-[100px] opacity-30"
          />
        </div>
      </section>

      {/* Mobile Stats */}
      <div className="block bg-black md:hidden px-4 -mt-6 py-2">
        <div className="relative grid grid-cols-2 gap-3 bg-[#121212] border border-gray-700 rounded-2xl py-4 text-center text-white">
          {count.map((item, index) => (
            <div key={index} className="py-1">
              <h3 className="text-[24px] font-[Quicksand] font-semibold">
                {item.number}
              </h3>
              <p className="text-[11px] uppercase mt-1 font-[Quicksand]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          3. WHO WE ARE — SCROLL HIGHLIGHT
      ══════════════════════════════════════ */}
      <section className="bg-black py-8 sm:py-10 md:py-14 lg:py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="absolute top-0 right-0 w-[400px] h-[160px] bg-gray-400 blur-[180px] opacity-10 pointer-events-none" />

          <button className="px-5 py-1.5 border border-gray-500 rounded-full text-white text-[15px] sm:text-[17px] mb-6 sm:mb-8 font-[Quicksand]">
            Who we are?
          </button>

          <ScrollHighlightText />
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. INVESTMENT VISUAL / SCN HOME (Fitted to Screen Height)
      ══════════════════════════════════════ */}
      <section className="bg-black py-4 sm:py-6 md:py-8 overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-center items-center">
          <img
            src="/scnhome.png"
            alt="Investment Growth Visual"
            className="max-w-full max-h-[62vh] md:max-h-[70vh] w-auto object-contain object-center"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. PROCESS SECTION (Single Screen on Desktop, Compact on Mobile)
      ══════════════════════════════════════ */}
      <section className="relative bg-black py-8 sm:py-10 md:h-screen md:py-6 overflow-hidden flex flex-col justify-center">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[160px] bg-gray-400 blur-[180px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col justify-between items-start md:h-full md:max-h-[88vh]">
          {/* Heading */}
          <div className="mb-4 md:mb-4">
            <h2 className="text-gray-300 text-[28px] sm:text-[38px] md:text-[48px] font-bold font-[Quicksand] mb-1">
              Process
            </h2>
            <p className="text-gray-500 font-[Quicksand] max-w-sm text-[13px] sm:text-[15px] md:text-[16px] leading-snug">
              A structured approach to help you invest, track, and grow your wealth with clarity and confidence.
            </p>
          </div>

          {/* Timeline line image */}
          <div className="w-full flex-1 flex items-center justify-center overflow-hidden py-3 md:py-0">
            <img
              src="/line.png"
              alt="process line"
              className="w-full max-h-[35vh] sm:max-h-[45vh] md:max-h-[62vh] object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. SIP CALCULATOR
      ══════════════════════════════════════ */}
      <SIPCalculator />

      {/* ══════════════════════════════════════
          7. WHAT OUR PARTNER SAYS
      ══════════════════════════════════════ */}
      <section className="bg-black py-10 md:py-16 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-[34px] sm:text-[46px] md:text-[56px] font-bold font-serif text-white tracking-tight">
              What our Partner says
            </h2>
          </div>

          {clienttest.length > 0 && (
            <>
              <Swiper
                modules={[Pagination, Autoplay]}
                centeredSlides={false}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={700}
                onSwiper={(swiper) => (partnerRef.current = swiper)}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1.08, spaceBetween: 24 },
                  1024: { slidesPerView: 1.15, spaceBetween: 30 },
                }}
                className="partnerSwiper max-w-6xl mx-auto"
              >
                {clienttest.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-[#181818] rounded-[28px] p-6 sm:p-7 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-center border border-[#2a2a2a] transition-all duration-300 shadow-2xl">
                      {/* Left Person Photo */}
                      <div className="w-full md:w-[240px] lg:w-[275px] shrink-0">
                        <img
                          src={`${baseURL}/${item.image}`}
                          className="rounded-[20px] object-cover w-full h-[260px] md:h-[310px]"
                          alt={item.name}
                        />
                      </div>

                      {/* Right Quote Content */}
                      <div className="text-left flex-1 flex flex-col justify-between py-1">
                        <p className="text-[#d0d0d0] leading-[1.75] font-serif mb-6 md:mb-8 text-[14px] sm:text-[15px] md:text-[16px] font-normal">
                          {item.message}
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                          <img
                            src={`${baseURL}/${item.image}`}
                            className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover shrink-0 border border-gray-700"
                            alt=""
                          />
                          <div>
                            <h4 className="text-white font-bold font-serif text-[15px] md:text-[16px] leading-snug">
                              {item.name}
                            </h4>
                            <p className="text-[#959595] text-[12px] md:text-[13px] font-serif mt-0.5">
                              {item.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Navigation Controls */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => partnerRef.current?.slidePrev()}
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-bold"
                >
                  ‹
                </button>
                <button
                  onClick={() => partnerRef.current?.slideNext()}
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-bold"
                >
                  ›
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. TESTIMONIALS CARDS
      ══════════════════════════════════════ */}
      {testimonials.length > 0 && (
        <section className="bg-black py-8 sm:py-10 md:py-14 lg:py-16 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-10">
              <span className="border border-gray-700 px-4 py-1.5 rounded-full text-gray-400 text-xs sm:text-[15px] font-[Quicksand]">
                Testimonials
              </span>
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{ delay: 3500 }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} className="!h-auto flex">
                  <div
                    className="w-full h-full min-h-[320px] bg-gradient-to-b from-[#282828] to-[#141414]
                      rounded-2xl border border-gray-800 p-5 flex flex-col
                      transition-all duration-300 hover:shadow-[0_0_60px_rgba(200,200,200,0.08)]
                      hover:border-gray-600 hover:scale-[1.02]"
                  >
                    <div className="mb-3 text-white text-base">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed flex-grow font-[Quicksand]">
                      {item.message}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={`${baseURL}/${item.image}`}
                          alt={item.name}
                          className="w-7 h-7 object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-[14px] font-semibold font-[Quicksand]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-lg"
              >
                ‹
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-lg"
              >
                ›
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          9. INSIGHTS FOR OUR VLOG
      ══════════════════════════════════════ */}
      <section className="bg-black py-8 sm:py-10 md:py-14 lg:py-16 text-center overflow-hidden">
        <h2 className="text-2xl sm:text-4xl md:text-[60px] lg:text-[68px] font-bold font-[Quicksand] text-gray-300 mb-8 md:mb-12">
          Insights for our Vlog
        </h2>

        {insights.length > 0 ? (
          <>
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSlideChange={(swiper) => setActiveInsightIndex(swiper.realIndex)}
              breakpoints={{
                0:   { slidesPerView: 1,   spaceBetween: 10 },
                640: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 2,   spaceBetween: 30 },
                1024:{ slidesPerView: 3,   spaceBetween: 40 },
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
              }}
              className="max-w-6xl mx-auto px-4"
            >
              {insights.map((img, i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <div
                      className={`rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
                        isActive ? "scale-100 opacity-100" : "scale-95 opacity-50 blur-[1px]"
                      }`}
                    >
                      <img
                        src={`${baseURL}/${img.media_url}`}
                        alt="insight"
                        className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="relative mt-12 flex justify-center items-center">
              <div className="absolute w-[220px] sm:w-[350px] md:w-[500px] h-[100px] sm:h-[150px] md:h-[190px] border-t border-gray-700 rounded-t-full" />
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black border border-gray-500 rounded-full flex items-center justify-center text-white text-base sm:text-lg z-10 font-[Quicksand] font-semibold">
                {String(activeInsightIndex + 1).padStart(2, "0")}
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600 font-[Quicksand]">Insights coming soon...</p>
        )}
      </section>

      {/* ══════════════════════════════════════
          10. OUR GLOBAL CLIENTS — MAP
      ══════════════════════════════════════ */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 text-white bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-[60px] lg:text-[68px] font-bold font-[Quicksand] text-gray-300">
              Our Global Clients
            </h2>
          </div>
          <div className="flex justify-center">
            <img
              src="/map.png"
              alt="Global Clients Map"
              className="w-full max-w-5xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. AWARDS AND ACHIEVEMENTS
      ══════════════════════════════════════ */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 text-white bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center uppercase text-[28px] sm:text-[38px] md:text-[48px] font-bold font-[Quicksand] mb-10 md:mb-12 text-gray-300 tracking-wide">
            Awards and Achievements
          </h2>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20" />

            {/* Row 1 */}
            <Swiper
              ref={swiper1}
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              speed={3500}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              breakpoints={{
                320:  { slidesPerView: 1 },
                768:  { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {awards.slice(0, Math.ceil(awards.length / 2)).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative flex justify-center items-center mb-5 hover:scale-105 transition duration-300">
                      <img src="/awd.png" className="w-32 object-contain" alt="" />
                      <img
                        src={`${baseURL}/${item.image}`}
                        alt={item.title}
                        className="absolute h-20 object-contain"
                      />
                    </div>
                    <h3
                      className="text-[15px] sm:text-[16px] font-semibold font-[Quicksand] text-gray-300"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Row 2 */}
            <Swiper
              ref={swiper2}
              className="mt-8 md:mt-10"
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              speed={3500}
              autoplay={{ delay: 0, reverseDirection: true, disableOnInteraction: false }}
              breakpoints={{
                320:  { slidesPerView: 1 },
                768:  { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {awards.slice(Math.ceil(awards.length / 2)).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex justify-center items-center mb-5 hover:scale-105 transition duration-300">
                      <img src="/awd.png" className="w-32 object-contain" alt="" />
                      <img
                        src={`${baseURL}/${item.image}`}
                        alt={item.title}
                        className="absolute h-20 object-contain"
                      />
                    </div>
                    <h3
                      className="text-[15px] sm:text-[16px] font-semibold font-[Quicksand] text-gray-300"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          12. OUR CHANNEL PARTNER
      ══════════════════════════════════════ */}
      <section className="bg-black py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-[20px] sm:text-[28px] md:text-[40px] font-bold font-[Quicksand] text-gray-300 mb-6 sm:mb-8">
            Our channel partner
          </h2>

          <div className="bg-white py-3 md:py-4 px-2 sm:px-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              speed={3500}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              className="swiper-linear"
              breakpoints={{
                320:  { slidesPerView: 2 },
                640:  { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {(logos.length > 0 ? [...logos, ...logos, ...logos, ...logos] : []).map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="h-12 md:h-16 w-full flex items-center justify-center px-3">
                    <img
                      src={`${baseURL}/${logo?.logo}`}
                      alt="logo"
                      className="max-h-10 md:max-h-12 w-auto object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          13. OUR STRATEGY PARTNER
      ══════════════════════════════════════ */}
      <section className="bg-black py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-[20px] sm:text-[28px] md:text-[40px] font-bold font-[Quicksand] text-gray-300 mb-6 sm:mb-8">
            Our strategy partner
          </h2>

          <div className="bg-white py-3 md:py-4 px-2 sm:px-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              speed={3500}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              className="swiper-linear"
              breakpoints={{
                320:  { slidesPerView: 2 },
                640:  { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {(logos.length > 0 ? [...logos, ...logos, ...logos, ...logos] : []).map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="h-12 md:h-16 w-full flex items-center justify-center px-3">
                    <img
                      src={`${baseURL}/${logo?.logo}`}
                      alt="logo"
                      className="max-h-10 md:max-h-12 w-auto object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
