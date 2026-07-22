import React, { useState, useRef, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Header from "./Header";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import InsightsSlider from "./InsightsSlider";
import SIPCalculator from "./SIPCalculator";
import http from "../service/http";
import { baseURL } from "../service/api";

const Home = () => {
  const data = [
    { name: "Principal", value: 40 },
    { name: "Interest", value: 60 },
  ];
  const swiperRef = useRef(null);
  const partnerRef = useRef(null);
  const awordref = useRef(null);
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);

useEffect(() => {
  setTimeout(() => {
    swiper1.current?.swiper?.autoplay?.start();
    swiper2.current?.swiper?.autoplay?.start();
  }, 100);
}, []);

  const COLORS = ["#949494", "#ffffff"];

  const [count, setCount] = useState([]);
  const [clienttest, setClientTest] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [awards, setAwards] = useState([]);
  const [logos, setLogos] = useState([]);
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

      setCount(AllData?.counters);
      setClientTest(AllData?.client_testimonials);
      setTestimonials(AllData?.testimonials);
      setAwards(AllData?.awards);
      setLogos(AllData?.client_logos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* <section className="relative w-full h-[80vh] sm:h-[80vh] md:h-[105vh] bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center mt-20 mb-10">
          <img src="/2.png" alt="circle" className="w-[500px] md:w-[500px] " />
          <video src="/video.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
        </div>

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[1200px] h-[250px] 
          bg-gradient-to-t from-gray-200 to-transparent 
          blur-[120px] opacity-40"
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          
          <h1
  className="
  text-white
    font-[Quicksand]
    font-weight-700
    text-center
    tracking-[-0.04em]
    text-[40px] leading-[121%]
    sm:text-[60px]
    md:text-[80px]
    lg:text-[105.91px]
  "
>
  Your Trusted <br />
  Investment Partner
</h1>

          <button
            className="mt-8 px-6 py-3 rounded-full
            border border-gray-400
            text-white
            bg-white/10 backdrop-blur-md
            hover:bg-white hover:text-black
            transition"
          >
            Review my portfolio ↓
          </button>
        </div>
      </section> */}

      {/* <section className="relative w-full h-[80vh] sm:h-[80vh] md:h-[105vh] bg-black overflow-hidden">
          <img
    src="/homeimg.jpeg"
    alt="Home Banner"
    className="block w-full"
  />
       </section> */}
      {/* <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-[90vh] lg:h-screen overflow-hidden bg-black">
  <img
    src="/homeimg.jpeg"
    alt="Home Banner"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
</section> */}
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

      <section className="bg-black pb-20 hidden md:block">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div
            className="grid grid-cols-2 -mt-20 md:grid-cols-4 
          bg-[#121212] border border-gray-700 rounded-2xl 
            py-10 text-center text-white shadow-xl
              hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
          >
            {count.map((item, index) => (
              <div key={index}>
                <h3 className="text-[40px] md:text-[64px] text-[#FFFFFF] font-weight-500 font-[Quicksand]">
                  {item.number}
                </h3>
                <p className="text-[13px] md:text-[18px] text-[#FFFFFF] font-weight-500  mt-2 font-[Quicksand] uppercase">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 
            w-[90vw] max-w-[600px] h-[200px] 
            bg-gradient-to-t from-gray-200 to-transparent 
            blur-[120px] opacity-40"
          />
          <div className="max-w-5xl mx-auto px-6 mt-20  relative z-10">
            <button className="px-6 py-2 border border-gray-500 rounded-full text-white text-[18px] mb-10">
              Who we are?
            </button>

            <ScrollHighlightText />
          </div>
        </div>
      </section>
      {/* Mobile */}
      <div className="block bg-black md:hidden px-4 -mt-8">
        <div className="relative grid grid-cols-2 gap-4 bg-[#121212] border border-gray-700 rounded-2xl py-4 text-center text-white  hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
          {count.map((item, index) => (
            <div key={index} className="py-1">
              <h3 className="text-[28px] font-[Quicksand] font-semibold">
                {item.number}
              </h3>

              <p className="text-[12px] uppercase mt-2 font-[Quicksand]">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-5 py-2 border border-gray-500 rounded-full text-white text-[15px] mb-8">
            Who we are?
          </button>

          <ScrollHighlightText />
        </div>
      </div>

      {/* <section className="bg-black  pb-20 overflow-hidden">
        
        <div className="max-w-7xl   mx-auto p-4 ">
          <img src="/scnhome.png" className="w-full h-[30vh] md:h-[85vh] lg:h-[85vh] " />
        </div>
      </section> */}
      <section className="bg-black pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full h-[220px] sm:h-[350px] md:h-[550px] lg:h-[700px]  rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="/scnhome.png"
              alt="SCN Home"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </section>
      {/* <section className="bg-black pb-20 overflow-hidden">
  <div className="max-w-7xl mx-auto p-4">
    <img
      src="/scnhome.png"
      alt="Stats"
      className="w-full h-[30vh] sm:h-[65vh] md:h-[100vh] lg:h-[85vh] object-cover rounded-2xl"
    />
  </div>
</section> */}

      <section className="relative bg-black py-25 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[200px] bg-gray-400 blur-[200px] opacity-20"></div>

        <div className="max-w-5xl  mx-auto px-5">
          {/* Heading */}
          <div className="mb-1">
            <h2 className="text-gray-400 text-5xl font-weight-700 font-semibold font-[Quicksand] mb-2">
              Process
            </h2>
            <p className="text-gray-400 font-[Quicksand]  max-w-xs text-[18px]">
A structured approach to help you invest, track, and grow your wealth with clarity and confidence.            </p>
          </div>

          <img src="line.png" className="" />
        </div>
      </section>

      <SIPCalculator />

      <section className="bg-black py-16 md:py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl text-gray-400 sm:text-4xl md:text-[80px] font-weight-600   font-[Quicksand]">
              {/* What our clien<span className="text-gray-400">t says</span> */}
              What our Partner says
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            onSwiper={(swiper) => (partnerRef.current = swiper)}

            autoplay={{ delay: 3500, reverseDirection: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.05,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.15,
                spaceBetween: 40,
              },
            }}
          >
            {clienttest.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1a1a1a] rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                  {/* Image */}
                  <div className="w-full md:w-[260px] lg:w-[280px] shrink-0">
                    <img
                      src={`${baseURL}/${item.image}`} // 👈 image path item.image}
                      className="rounded-2xl object-fill md:object-cover w-full h-[400px] md:h-[400px]"
                      alt=""
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left mt-2 md:mt-4">
                    <p className="text-gray-300 leading-relaxed font-[Quicksand] font-weight-400 mb-6 md:mb-8 text-[18px] sm:text-base md:text-[22px]">
                      {item.message}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <img
                        src={`${baseURL}/${item.image}`}
                        className="w-10 h-10 md:w-[55px] md:h-[55px] rounded-full"
                        alt=""
                      />

                      <div>
                        <h4 className=" font-weight-500 font-[Quicksand] text-[18px] sm:text-base md:text-[23.87px]">
                          {item.name}
                        </h4>

                        <p className="text-xs sm:text-[10px] md:text-[17.91px] text-gray-400">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
           <div className="flex justify-center gap-4 mt-8 md:mt-10">
            <button
              onClick={() => partnerRef.current.slidePrev()}
              className="w-9 h-9 md:w-10 md:h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ‹
            </button>

            <button
              onClick={() => partnerRef.current.slideNext()}
              className="w-9 h-9 md:w-10 md:h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-10 md:mb-14">
            <span className="border border-gray-600 px-4 py-1 rounded-full text-xs sm:text-[18px]">
              Testimonials
            </span>
          </div>

          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            className="testimonialSwiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div
                  className="
          w-full
          h-full
          min-h-[380px]
          bg-gradient-to-b
          from-[#303030]
          to-[#161616]
          rounded-2xl
          border
          border-gray-800
          p-6
          flex
          flex-col
          transition-all
          duration-300
          hover:shadow-[0_0_80px_#C2C2C2]
          hover:border-gray-600
          hover:scale-[1.02]
        "
                >
                  {/* Stars */}
                  <div className="mb-4 text-white text-lg">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-gray-400 text-[18px] leading-8 flex-grow">
                    {item.message}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={`${baseURL}/${item.image}`}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    <div>
                      <h4 className="text-white text-lg font-medium">
                        {item.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8 md:mt-10">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-9 h-9 md:w-10 md:h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ‹
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-9 h-9 md:w-10 md:h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <InsightsSlider />

      <section className="py-10 text-white bg-black overflow-hidden">
        <div className="max-w-7xl  mx-auto  py-10">
          <img src="/map.png" />
        </div>
      </section>

      {/* <section className="  py-10 text-white bg-black overflow-hidden">
        <div className="max-w-7xl  mx-auto px-6 bg-gradient-to-b from-[#0b0b0b] via-[#000000] to-[#050505] rounded-3xl py-10">
          

          <h2 className="text-center text-[40px] :md:text-[80px] lg:text-[80px] font-semibold font-[Quicksand] font-weight-600 mb-16 text-gray-300">
            Award and achievement
          </h2>

         
          <Swiper
            modules={[Navigation,Autoplay]}
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            onSwiper={(swiper) => (awordref.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {awards.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center 00  ">
                  <div className="relative flex justify-center items-center mb-10  hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
                    <img
                      src="/awd.png"
                      className="w-60 object-contain  "
                      alt="award background"
                    />

                   
                    <img
                      src={`${baseURL}/${item.image}`}
                      alt={item.title}
                      className="absolute  h-50 object-contain "
                    />

                   
                  </div>

                  
                  <h3
                    className="text-[24px] md:text-[28.18px] font-weight-500 font-[Quicksand] mb-3"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />

                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>     
          
        </div>
      </section> */}
      <section className="py-16 text-white bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center uppercase text-[40px] md:text-[50px] font-[Quicksand] font-weight-600 font-semibold mb-16 text-gray-300">
            Awards and Achievement
          </h2>

          {/* LEFT SHADOW */}
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20"></div>

            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20"></div>

            {/* ================= FIRST ROW ================= */}

            <Swiper
            ref={swiper1}
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={40}
              loop={true}
              speed={3500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {awards
                .slice(0, Math.ceil(awards.length / 2))
                .map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative flex justify-center items-center mb-8 hover:scale-105 transition duration-300">
                        <img
                          src="/awd.png"
                          className="w-35 object-contain"
                          alt=""
                        />

                        <img
                          src={`${baseURL}/${item.image}`}
                          alt={item.title}
                          className="absolute h-25 object-contain"
                        />
                      </div>

                      <h3
                        className="text-[20px] font-medium"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* ================= SECOND ROW ================= */}

            <Swiper
            ref={swiper2}
              className="mt-12"
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={40}
              loop={true}
              speed={3500}
              autoplay={{
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {awards.slice(Math.ceil(awards.length / 2)).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex justify-center items-center mb-8 hover:scale-105 transition duration-300">
                      <img
                        src="/awd.png"
                        className="w-35 object-contain"
                        alt=""
                      />

                      <img
                        src={`${baseURL}/${item.image}`}
                        alt={item.title}
                        className="absolute h-25 object-contain"
                      />
                    </div>

                    <h3
                      className="text-[20px] font-medium"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#161616] to-[#000] py-10">
        <section className=" py-16 md:mx-8">
          <div className="max-w-7xl mx-auto relative">
            {/* LEFT SHADOW */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black/90 to-transparent z-10"></div>

            {/* RIGHT SHADOW */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black/90 to-transparent z-10"></div>
            {/* Slider 1 */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              loopAdditionalSlides={logos.length}
              watchSlidesProgress={true}
              speed={3000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-20 w-full rounded-xl flex items-center justify-center p-2">
                    <img
                      src={`${baseURL}/${logo?.logo}`}
                      alt="logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider 2 */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              loopAdditionalSlides={logos.length}
              watchSlidesProgress={true}
              speed={3000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: true,
              }}
              className="mt-6"
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-20 w-full rounded-xl flex items-center justify-center p-2">
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
        </section>
      </section>

      <Footer />
    </>
  );
};

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

      // progress from 0 → 1
      const total = windowHeight + rect.height;
      const current = windowHeight - rect.top;

      let prog = current / total;

      prog = Math.max(0, Math.min(1, prog));

      setProgress(prog);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" flex items-center">
      <div ref={containerRef} className="w-full px-6">
        <h2>
          {lines.map((line, i) => {
            const start = i / lines.length;
            const end = (i + 1) / lines.length;

            let opacity = 0.2;

            if (progress >= start && progress <= end) {
              const localProgress = (progress - start) / (end - start);
              opacity = 0.2 + localProgress * 0.8;
            } else if (progress > end) {
              opacity = 1;
            }

            return (
              <span
                key={i}
                className="block transition-all duration-300 text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 500,
                  lineHeight: "126%",
                  letterSpacing: "-0.04em", // -4%

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
    </div>
  );
}

export default Home;
