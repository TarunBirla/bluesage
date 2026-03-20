import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import http from "../service/http";
import { baseURL } from "../service/api";

const Abouts = () => {
  const [logos, setLogos] = useState([]);
  const [clienttest, setClientTest] = useState([]);
  const [journeys, setJourneys] = useState([]);
  const [team, setTeam] = useState([]);

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

      setClientTest(AllData?.client_testimonials);
      setLogos(AllData?.client_logos);
      setJourneys(AllData?.journeys);
      setTeam(AllData?.team);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const topRow = journeys.slice(0, 3);
  const bottomRow = journeys.slice(3, 6);
  return (
    <>
      <Header />

      <section className="relative w-full bg-black flex items-center justify-center py-24 overflow-hidden hidden md:flex">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[700px] h-[250px] 
          bg-gradient-to-t from-gray-200 to-transparent 
          blur-[120px] opacity-40"
        ></div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-14">
              <div
        className="relative 
        bg-contain bg-center h-[600px] w-full bg-no-repeat
        flex items-center gap-40 px-16 "

            style={{ backgroundImage: "url('/aboutimg.png')" }}
          >
            <div className="w-[350px] shrink-0 ml-10 ">
              <img
                src={`${baseURL}/${clienttest[0]?.image}`}
                alt=""
                className="rounded-2xl object-fill w-full h-[400px] mt-20"
              />
            </div>

            <div className="text-gray-300 max-w-lg -mt-20">
              <p className="leading-relaxed font-light mb-10 text-[28px] line-clamp-6">
                {clienttest[0]?.message}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={`${baseURL}/${clienttest[0]?.image}`}
                  className="w-[74px] h-[74px] rounded-full"
                />

                <div>
                  <h4 className="text-white text-[31px] font-semibold">
                    {clienttest[0]?.name}
                  </h4>

                  <p className="text-[23.73px] text-gray-400">
                    {clienttest[0]?.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-16 md:hidden">
        <div className="max-w-md mx-auto px-6 py-6">
          {/* image */}
          <div className="mb-8">
            <img
              src={`${baseURL}/${clienttest[0]?.image}`}
              alt=""
              className="rounded-2xl w-full h-[360px] object-fill"
            />
          </div>

          {/* text */}
          <p className="text-gray-300 text-base leading-relaxed mb-8 line-clamp-6">
            {clienttest[0]?.message}
          </p>

          {/* author */}
          <div className="flex items-center gap-3">
            <img src="/smallimg.png" className="w-10 h-10 rounded-full" />

            <div>
              <h4 className="text-white font-semibold">
                {" "}
                {clienttest[0]?.name}
              </h4>

              <p className="text-[18px] text-gray-400">
                {clienttest[0]?.designation}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white hidden md:block">
        <h2
          className="text-center font-semibold mb-16
          text-[80px] leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
        >
          Our Journey
        </h2>
        <div className="max-w-7xl mx-auto px-6 relative">
         
          <svg
  className="absolute left-0 top-[-1px] w-full h-[400px]"
  viewBox="0 0 1200 400"
  fill="none"
  stroke="white"
  strokeWidth="2"
> 

  {/* MAIN PATH (FULL U SHAPE) */}
  <path
    id="motionPath"
    d="M20 30 H1080 Q1150 30 1150 90 V260 Q1150 300 1120 300 H20"
    fill="none"
    stroke="white"
    strokeWidth="2"
  />

  {/* ARROWS */}
  <polygon points="280,26 260,30 280,34" fill="white" />
  <polygon points="580,26 560,30 580,34" fill="white" />
  <polygon points="880,26 860,30 880,34" fill="white" />
  <polygon points="1145,120 1150,135 1155,120" fill="white" />
  <polygon points="880,296 860,300 880,304" fill="white" />
  <polygon points="580,296 560,300 580,304" fill="white" />
  <polygon points="280,296 260,300 280,304" fill="white" />

  {/* 🔴 BALL 1 */}
  <circle r="5" fill="#ff4d4d">
    <animateMotion dur="3s" repeatCount="indefinite"  keyPoints="1;0" keyTimes="0;1">
      <mpath href="#motionPath" />
    </animateMotion>
  </circle>
   <circle r="5" fill="#000">
    <animateMotion dur="5s" repeatCount="indefinite"  keyPoints="1;0" keyTimes="0;1">
      <mpath href="#motionPath" />
    </animateMotion>
  </circle>

  {/* 🔵 BALL 2 */}
  <circle r="5" fill="#00f0ff">
    <animateMotion dur="6s" repeatCount="indefinite"  keyPoints="1;0" keyTimes="0;1">
      <mpath href="#motionPath" />
    </animateMotion>
  </circle>

  {/* 🟣 BALL 3 */}
  <circle r="5" fill="#a855f7">
    <animateMotion dur="8s" repeatCount="indefinite"  keyPoints="1;0" keyTimes="0;1">
      <mpath href="#motionPath" />
    </animateMotion>
  </circle>

</svg>
          {/* TOP ROW */}
          <div className="grid grid-cols-3 px-16 pr-20 gap-24 mb-32 relative z-10">
            {topRow.map((item) => (
              <div key={item.id}>
                <p className="text-gray-400 text-[18px] mb-3">{item.period}</p>

                <h3 className="font-semibold text-[18px] mb-2">{item.title}</h3>

                <p className="text-gray-400 text-[18px]">{item.description}</p>
              </div>
            ))}
          </div>

          {/* TIMELINE LINE */}
         

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-3 gap-24 px-16 top-[-10px]   pr-20 mt-28 relative z-10">
            {bottomRow.map((item) => (
              <div key={item.id}>
                <p className="text-gray-400 text-[18px] mb-3">{item.period}</p>

                <h3 className="font-semibold mb-2 text-[18px]">{item.title}</h3>

                <p className="text-gray-400 text-[18px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-black py-16 text-white md:hidden">
        <h2
          className="text-center font-semibold mb-16
          text-[40px] leading-[45px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
        >
          Our Journey
        </h2>
        <div className="max-w-md mx-auto px-6 relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/30"></div>

          <div className="space-y-12 ">
            {journeys.map((item) => (
              <div key={item.id} className="relative pl-10 ">
                <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></div>

                <p className="text-gray-400 text-xs mb-2">{item.period}</p>

                <h3 className="font-semibold text-[18px] mb-2">{item.title}</h3>

                <p className="text-gray-400 text-[18px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24 relative overflow-hidden">
        {/* bottom gradient glow */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-600/40 to-transparent blur-2xl"></div>

        <div className="max-w-7xl  mx-auto px-6 text-center">
          {/* Heading */}
          <h2
            className="text-center font-semibold mb-16
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
          >
            Award and achievement
          </h2>

          {/* Awards Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
            {/* Award Item */}
            <div className="text-center relative w-fit mx-auto hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all hover:bg-transparent">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-[18px] text-gray-300 leading-relaxed">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center relative w-fit mx-auto hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-[18px] text-gray-300 leading-relaxed">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center relative w-fit mx-auto hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-[18px] text-gray-300 leading-relaxed">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center relative w-fit mx-auto hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-[18px] text-gray-300 leading-relaxed">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>
          </div>

          {/* Next Section Title */}
          <h2
            className="text-center font-semibold mt-16
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent "
          >
            Meet our team <br />
            of experts
          </h2>
        </div>
      </section>

      <section className="bg-black">
        <section className="bg-gradient-to-b from-[#161616] to-[#161616]/99 py-16 mx-8">
          <div className="max-w-7xl px-4 mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Card */}
              {team.map((item, index) => (
                <div className="bg-white rounded-[30px] overflow-hidden hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
                  {/* Image */}
                  <img
                    src={`${baseURL}/${item.image}`}
                    className="w-full h-[350px] rounded-[30px] object-cover"
                    alt=""
                  />

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>

                    <p className="text-gray-500 text-[18px]">
                      {item.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* <section className="bg-black py-10">
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
                    src={`${baseURL}/${logo.logo}`}
                    alt="logo"
                    className="h-8 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
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
                    src={`${baseURL}/${logo.logo}`}
                    alt="logo"
                    className="h-8 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
      <section className="bg-black  py-10">
        <section className="bg-gradient-to-b from-[#161616] to-[#161616]/99 py-16 md:mx-8">
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

            {/* Slider 2 */}
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
      </section>
      <Footer />
    </>
  );
};

export default Abouts;
