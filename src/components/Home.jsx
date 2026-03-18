import React, { useState, useRef, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Header from "./Header";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
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
  const awordref = useRef(null);

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

      <section className="relative w-full h-[80vh] sm:h-[80vh] md:h-[90vh] bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center mt-20 mb-10">
          <img src="/2.png" alt="circle" className="w-[500px] md:w-[500px] " />
        </div>

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[1200px] h-[250px] 
          bg-gradient-to-t from-gray-200 to-transparent 
          blur-[120px] opacity-40"
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="text-white font-[Syne] font-bold
            text-[38px] leading-[46px]
            sm:text-[56px] sm:leading-[60px]
            md:text-[72px] md:leading-[78px]"
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
      </section>

      <section className="bg-black pb-20">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div
            className="grid grid-cols-2 -mt-20 md:grid-cols-4 
      bg-[#121212] border border-gray-700 rounded-2xl 
      py-10 text-center text-white shadow-xl"
          >
            {count.map((item, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold">{item.number}</h3>
                <p className="text-[15px] text-gray-400 mt-2">{item.subtitle}</p>
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

            <h2
              className="text-gray-300 font-[Syne] 
              text-[26px] leading-[40px]
              sm:text-[32px] sm:leading-[48px]
              md:text-[40px] md:leading-[58px]"
            >
              <span className="text-white">
                Our bespoke wealth management firm
              </span>{" "}
              is built on the principles of transparency, trust, and long-term
              partnerships. With over 20 years of experience, our team brings
              deep market insight, proven expertise, and a strong commitment to
              managing wealth for individuals, families, and business owners.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-black  pb-20 overflow-hidden">
        {/* Stats Card */}
        <div className="max-w-7xl  mx-auto p-4 ">
          <img src="/scnhome.png" className="w-full h-auto" />
        </div>
      </section>

      <section className="relative bg-black py-32 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-400 blur-[200px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-6">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-white text-5xl font-bold mb-4">Process</h2>
            <p className="text-gray-400 max-w-xs text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <img src="line.png" />
        </div>
      </section>

      <SIPCalculator />

      <section className="bg-black py-16 md:py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              What our clien<span className="text-gray-400">t says</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-[18px] sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{ delay: 3500 }}
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
                      className="rounded-2xl object-cover w-full h-[220px] sm:h-[260px] md:h-[320px]"
                      alt=""
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-[18px] sm:text-base">
                      {item.message}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <img
                        src={`${baseURL}/${item.image}`}
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />

                      <div>
                        <h4 className="font-semibold text-[18px] sm:text-base">
                          {item.name}
                        </h4>

                        <p className="text-xs sm:text-[18px] text-gray-400">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

          {/* Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1c1c1c] p-5 md:p-6 rounded-xl border border-gray-800 h-full flex flex-col">
                  {/* Stars */}
                  <div className="mb-4 text-yellow-400 text-[18px] md:text-base">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-400 text-[18px] leading-relaxed mb-6 flex-grow">
                    {item.message}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <img
                      src={`${baseURL}/${item.image}`}
                      alt={item.name}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="text-[18px] font-semibold">{item.name}</h4>
                      <p className="text-xs text-gray-500">
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
          {/* Heading */}
          <img src="/map.png" />
        </div>
      </section>

      <section className="py-10 text-white bg-black overflow-hidden">
        <div className="max-w-7xl  mx-auto px-6 bg-gradient-to-b from-[#0b0b0b] via-[#000000] to-[#050505] rounded-3xl py-10">
          {/* Heading */}

          <h2 className="text-center text-5xl font-semibold mb-16 text-gray-300">
            Award and achievement
          </h2>

          {/* Slider */}

          <Swiper
            modules={[Navigation]}
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
                <div className="text-center relative flex flex-col items-center">
                  {/* Trophy + Hexagon */}
                  <div className="relative flex justify-center mt-10 items-center mb-10">
                    {/* Hexagon Border */}
                    <img src="/outerborder.png" className="absolute w-40 z-1" />

                    {/* Trophy */}
                    <img
                      src={`${baseURL}/${item.image}`}
                      alt={item.title}
                      className="relative z-10 h-40 -top-8 object-contain"
                    />

                    {/* Ribbon */}
                    <div className="absolute -bottom-20 flex flex-col items-center z-0">
                      <img src="/ribbon.png" className="w-24" />

                      {/* Year */}
                      <span className="absolute top-8 text-gray-700 font-semibold text-xl">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-3 mt-16"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />

                  {/* Description */}
                  <p className="text-gray-400 text-xs px-8 leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* arrows */}

          <div className="flex justify-center gap-4 mt-14">
            <button
              onClick={() => awordref.current.slidePrev()}
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ‹
            </button>

            <button
              onClick={() => awordref.current.slideNext()}
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black py-10 overflow-hidden">
        <div className="max-w-7xl  mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={6}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl flex items-center justify-center p-4">
                  <img
                    src={`${baseURL}/${logo?.logo}`}
                    alt="logo"
                    className="h-8 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider 2 - Right Direction */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={6}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
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
                <div className="bg-white rounded-xl flex items-center justify-center p-4">
                  <img
                    src={`${baseURL}/${logo?.logo}`}
                    alt="logo"
                    className="h-8 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
