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
              className="block transition-all duration-300 text-[24px] sm:text-[30px] md:text-[38px] lg:text-[46px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: line.bold ? 700 : 500,
                lineHeight: "126%",
                letterSpacing: "-0.03em",
                color: `rgba(255,255,255,${opacity})`,
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
   Process Steps Data
───────────────────────────────────────────── */
const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "We begin with a detailed discussion to understand your financial goals, risk appetite, and investment horizon.",
  },
  {
    number: "02",
    title: "Portfolio Analysis",
    desc: "Our experts analyse your current portfolio and identify opportunities for growth and optimisation.",
  },
  {
    number: "03",
    title: "Strategy Design",
    desc: "We design a customised investment strategy aligned with your unique financial objectives.",
  },
  {
    number: "04",
    title: "Implementation",
    desc: "Your personalised plan is executed with precision, selecting the best-suited mutual fund solutions.",
  },
  {
    number: "05",
    title: "Ongoing Review",
    desc: "We continuously monitor your portfolio and make adjustments to keep you on track toward your goals.",
  },
];

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
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* Desktop Hero */}
        <div className="hidden md:block relative w-full h-screen">
          <img
            src="/homeimg.jpeg"
            alt="Your Trusted Investment Partner"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradient */}
          <div className="absolute" />

          {/* Bottom glow */}
          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[180px] bg-gradient-to-t from-gray-300 to-transparent blur-[100px] opacity-20 pointer-events-none" /> */}
        </div>

        {/* Mobile Hero */}
        <div className="block md:hidden relative">
          <div className="h-[55vw] overflow-hidden mt-14">
            <img
              src="/mobile.png"
              alt="Home Banner"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
          </div>
          <div className="px-5 pt-6 pb-8 bg-black">
            <h1 className="text-white font-[Quicksand] font-bold text-[32px] leading-tight tracking-[-0.03em]">
              Your Trusted<br />Investment Partner
            </h1>
            <p className="text-gray-400 mt-3 text-sm font-[Quicksand]">
              Building long-term wealth through transparency, trust, and disciplined investing.
            </p>
            <button className="mt-5 px-6 py-3 rounded-full bg-white text-black font-semibold text-[14px] font-[Quicksand]">
              Review my portfolio
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-black pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4 -mt-10 md:-mt-16 relative z-10
              bg-[#111111] border border-gray-800 rounded-2xl
              py-8 md:py-10 text-center text-white
              shadow-2xl hover:shadow-[0_0_120px_rgba(200,200,200,0.12)]
              hover:border-gray-600 transition-all duration-500"
          >
            {count.length > 0
              ? count.map((item, index) => (
                  <div
                    key={index}
                    className={`py-3 md:py-0 ${
                      index !== count.length - 1
                        ? "border-r border-gray-700 md:border-r border-b md:border-b-0 border-gray-700"
                        : ""
                    }`}
                  >
                    <h3 className="text-[36px] md:text-[58px] text-white font-bold font-[Quicksand]">
                      {item.number}
                    </h3>
                    <p className="text-[11px] md:text-[14px] text-gray-400 mt-1 font-[Quicksand] uppercase tracking-widest">
                      {item.subtitle}
                    </p>
                  </div>
                ))
              : [
                  { number: "20+", subtitle: "Years Experience" },
                  { number: "1B+", subtitle: "Assets Managed" },
                  { number: "13+", subtitle: "Partner" },
                  { number: "350+", subtitle: "Happy Clients" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`py-3 md:py-0 ${index !== 3 ? "border-r border-gray-700" : ""}`}
                  >
                    <h3 className="text-[36px] md:text-[58px] text-white font-bold font-[Quicksand]">
                      {item.number}
                    </h3>
                    <p className="text-[11px] md:text-[14px] text-gray-400 mt-1 font-[Quicksand] uppercase tracking-widest">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHO WE ARE — SCROLL HIGHLIGHT
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 md:py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[200px] bg-gray-400 blur-[200px] opacity-10 pointer-events-none" />

          <button className="px-5 py-2 border border-gray-600 rounded-full text-white text-[14px] mb-10 font-[Quicksand] hover:border-gray-400 transition-all">
            Who we are?
          </button>

          <ScrollHighlightText />
        </div>
      </section>

      {/* ══════════════════════════════════════
          INVESTMENT VISUAL / SCN HOME
      ══════════════════════════════════════ */}
      <section className="bg-black pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="/scnhome.png"
              alt="Investment Growth Visual"
              className="max-w-full object-contain w-full md:w-[85%]"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS SECTION
      ══════════════════════════════════════ */}
      <section className="relative bg-black py-20 md:py-28 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[200px] bg-gray-400 blur-[220px] opacity-15 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-14 md:mb-20">
            <h2 className="text-gray-300 text-[42px] md:text-[64px] font-bold font-[Quicksand] mb-3">
              Process
            </h2>
            <p className="text-gray-500 font-[Quicksand] max-w-sm text-[16px] md:text-[18px] leading-relaxed">
              A structured approach to help you invest, track, and grow your wealth with clarity and confidence.
            </p>
          </div>

          {/* Timeline line image */}
          <img src="/line.png" alt="process line" className="w-full mb-0" />

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative group"
              >
                {/* Number bubble */}
                <div className="w-12 h-12 rounded-full border border-gray-600 bg-[#111] flex items-center justify-center mb-5 group-hover:border-gray-400 group-hover:bg-[#1a1a1a] transition-all duration-300">
                  <span className="text-white text-[13px] font-bold font-[Quicksand]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold font-[Quicksand] text-[16px] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-[Quicksand] text-[13px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SIP CALCULATOR
      ══════════════════════════════════════ */}
      <SIPCalculator />

      {/* ══════════════════════════════════════
          WHAT OUR PARTNER SAYS
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 md:py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl text-gray-300 sm:text-4xl md:text-[72px] font-bold font-[Quicksand]">
              What our Partner says
            </h2>
          </div>

          {clienttest.length > 0 && (
            <>
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop
                onSwiper={(swiper) => (partnerRef.current = swiper)}
                autoplay={{ delay: 3500, reverseDirection: true }}
                pagination={{ clickable: true }}
                breakpoints={{
                  768: { slidesPerView: 1.05, spaceBetween: 30 },
                  1024: { slidesPerView: 1.15, spaceBetween: 40 },
                }}
                className="partnerSwiper"
              >
                {clienttest.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-[#111] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start border border-gray-800 hover:border-gray-700 transition-all duration-300">
                      {/* Image */}
                      <div className="w-full md:w-[240px] lg:w-[260px] shrink-0">
                        <img
                          src={`${baseURL}/${item.image}`}
                          className="rounded-2xl object-cover w-full h-[320px] md:h-[380px]"
                          alt={item.name}
                        />
                      </div>
                      {/* Content */}
                      <div className="text-center md:text-left mt-2 md:mt-4 flex-1">
                        {/* Quote icon */}
                        <div className="text-gray-600 text-5xl font-serif mb-4 leading-none">"</div>
                        <p className="text-gray-300 leading-relaxed font-[Quicksand] mb-8 text-[16px] sm:text-[18px] md:text-[20px]">
                          {item.message}
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                          <img
                            src={`${baseURL}/${item.image}`}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                            alt=""
                          />
                          <div>
                            <h4 className="text-white font-semibold font-[Quicksand] text-[18px] md:text-[20px]">
                              {item.name}
                            </h4>
                            <p className="text-gray-500 text-[13px] md:text-[15px] mt-0.5">
                              {item.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => partnerRef.current?.slidePrev()}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-xl"
                >
                  ‹
                </button>
                <button
                  onClick={() => partnerRef.current?.slideNext()}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-xl"
                >
                  ›
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS CARDS
      ══════════════════════════════════════ */}
      {testimonials.length > 0 && (
        <section className="bg-black py-16 md:py-24 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-14">
              <span className="border border-gray-700 px-5 py-2 rounded-full text-gray-400 text-sm md:text-[16px] font-[Quicksand]">
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
                    className="w-full h-full min-h-[360px] bg-gradient-to-b from-[#282828] to-[#141414]
                      rounded-2xl border border-gray-800 p-6 flex flex-col
                      transition-all duration-300 hover:shadow-[0_0_60px_rgba(200,200,200,0.08)]
                      hover:border-gray-600 hover:scale-[1.02]"
                  >
                    {/* Stars */}
                    <div className="mb-4 text-white text-lg">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    {/* Message */}
                    <p className="text-gray-400 text-[15px] leading-7 flex-grow font-[Quicksand]">
                      {item.message}
                    </p>
                    {/* User */}
                    <div className="flex items-center gap-3 mt-6">
                      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={`${baseURL}/${item.image}`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-[15px] font-semibold font-[Quicksand]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-xl"
              >
                ‹
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 text-xl"
              >
                ›
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          INSIGHTS FOR OUR VLOG
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 md:py-20 text-center overflow-hidden">
        <h2 className="text-2xl sm:text-4xl md:text-[72px] font-bold font-[Quicksand] text-gray-300 mb-10 md:mb-14">
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
                        className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arc indicator */}
            <div className="relative mt-16 flex justify-center items-center">
              <div className="absolute w-[250px] sm:w-[400px] md:w-[600px] h-[120px] sm:h-[180px] md:h-[230px] border-t border-gray-700 rounded-t-full" />
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black border border-gray-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl z-10 font-[Quicksand] font-semibold">
                {String(activeInsightIndex + 1).padStart(2, "0")}
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600 font-[Quicksand]">Insights coming soon...</p>
        )}
      </section>

      {/* ══════════════════════════════════════
          OUR GLOBAL CLIENTS — MAP
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20 text-white bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-4xl md:text-[72px] font-bold font-[Quicksand] text-gray-300">
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
          AWARDS AND ACHIEVEMENTS
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20 text-white bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center uppercase text-[32px] md:text-[56px] font-bold font-[Quicksand] mb-14 text-gray-300 tracking-wide">
            Awards and Achievements
          </h2>

          <div className="relative">
            {/* Left/Right fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-black to-transparent z-20" />

            {/* Row 1 — left to right */}
            <Swiper
              ref={swiper1}
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={40}
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
                    <div className="relative flex justify-center items-center mb-6 hover:scale-105 transition duration-300">
                      <img src="/awd.png" className="w-36 object-contain" alt="" />
                      <img
                        src={`${baseURL}/${item.image}`}
                        alt={item.title}
                        className="absolute h-24 object-contain"
                      />
                    </div>
                    <h3
                      className="text-[17px] font-semibold font-[Quicksand] text-gray-300"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Row 2 — right to left */}
            <Swiper
              ref={swiper2}
              className="mt-12"
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={40}
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
                    <div className="relative flex justify-center items-center mb-6 hover:scale-105 transition duration-300">
                      <img src="/awd.png" className="w-36 object-contain" alt="" />
                      <img
                        src={`${baseURL}/${item.image}`}
                        alt={item.title}
                        className="absolute h-24 object-contain"
                      />
                    </div>
                    <h3
                      className="text-[17px] font-semibold font-[Quicksand] text-gray-300"
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
          OUR CHANNEL PARTNER
      ══════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-[#161616] to-[#000] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[22px] sm:text-[32px] md:text-[48px] font-bold font-[Quicksand] text-gray-300 mb-10">
            Our channel partner
          </h2>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-36 bg-gradient-to-r from-[#161616] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-[#161616] to-transparent z-10" />

            {/* Strip 1 */}
            <Swiper
              ref={swiper3}
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={6}
              loop={true}
              speed={3000}
              autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false }}
              breakpoints={{
                320:  { slidesPerView: 2 },
                640:  { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-16 md:h-20 w-full rounded-xl flex items-center justify-center p-2">
                    <img
                      src={`${baseURL}/${logo?.logo}`}
                      alt="logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Strip 2 — reverse */}
            <Swiper
              ref={swiper4}
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={6}
              loop={true}
              speed={3000}
              autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false, reverseDirection: true }}
              className="mt-5"
              breakpoints={{
                320:  { slidesPerView: 2 },
                640:  { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-16 md:h-20 w-full rounded-xl flex items-center justify-center p-2">
                    <img
                      src={`${baseURL}/${logo?.logo}`}
                      alt="logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STRATEGY PARTNER
      ══════════════════════════════════════ */}
      <section className="bg-[#000] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[22px] sm:text-[32px] md:text-[48px] font-bold font-[Quicksand] text-gray-300 mb-10">
            Our strategy partner
          </h2>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-36 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Row 1 */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={6}
              loop={true}
              speed={2800}
              autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: true }}
              breakpoints={{
                320:  { slidesPerView: 2 },
                640:  { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-16 md:h-20 w-full rounded-xl flex items-center justify-center p-2">
                    <img
                      src={`${baseURL}/${logo?.logo}`}
                      alt="logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Row 2 */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={6}
              loop={true}
              speed={2800}
              autoplay={{ delay: 1, disableOnInteraction: false }}
              className="mt-5"
              breakpoints={{
                320:  { slidesPerView: 2 },
                640:  { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-16 md:h-20 w-full rounded-xl flex items-center justify-center p-2">
                    <img
                      src={`${baseURL}/${logo?.logo}`}
                      alt="logo"
                      className="h-full w-full object-contain"
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
