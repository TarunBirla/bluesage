import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import http from "../service/http";
import { baseURL } from "../service/api";

const Abouts = () => {
  const awordref = useRef(null);

  const [logos, setLogos] = useState([]);
  const [clienttest, setClientTest] = useState([]);
  const [journeys, setJourneys] = useState([]);
  const [team, setTeam] = useState([]);
  const [awards, setAwards] = useState([]);

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
      setAwards(AllData?.awards);

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

  const testimonials = [
    {
      image: "/sarikaa.png",
      avatar: "/sarikaa.png",
      name: "Sarikaa",
      designation: "managing director",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores necessitatibus molestias dignissimos quas exercitationem doloremque.",
    },
    {
      image: "/rajeev.png",
      avatar: "/rajeev.png",
      name: "Rajeev Arora",
      designation: "managing director",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores necessitatibus molestias dignissimos quas exercitationem doloremque.",
    },
  ];
  return (
    <>
      <Header />

      {/* <section className="relative w-full bg-black flex items-center justify-center py-24 overflow-hidden hidden md:flex">
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
              <p className="leading-relaxed font-light mb-10 text-[28px] font-weight-300 font-[Quicksand] line-clamp-6">
                {clienttest[0]?.message}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={`${baseURL}/${clienttest[0]?.image}`}
                  className="w-[74px] h-[74px] rounded-full"
                />

                <div>
                  <h4 className="text-white text-[31px] font-weight-300 font-[Quicksand]">
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
      </section> */}

      <section className="relative w-full bg-black py-24 hidden md:block overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-gray-200 to-transparent blur-[120px] opacity-40" />

        <div className="max-w-7xl mx-auto px-6">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative bg-contain bg-center bg-no-repeat h-[600px] flex items-center mt-15 gap-40 px-16"
                  style={{ backgroundImage: "url('/aboutimg.png')" }}
                >
                  {/* Left Image */}
                  <div className="w-[350px] shrink-0 ml-10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[400px] rounded-2xl object-cover mt-20"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="max-w-lg -mt-20">
                    <p className="text-[28px] text-gray-300 leading-relaxed font-light mb-10">
                      {item.message}
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-[74px] h-[74px] rounded-full object-cover"
                      />

                      <div>
                        <h4 className="text-white text-[31px] font-light">
                          {item.name}
                        </h4>

                        <p className="text-[22px] text-gray-400">
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

     <section className="bg-black text-white py-12 md:hidden overflow-hidden">
  <div className="px-5">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      speed={1000}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {testimonials?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#111111] border border-[#2A2A2A] mt-10 rounded-3xl p-5">
            {/* Image */}
            <div className="w-[300px] ">
            <img
              src={`${item.image}`}
              alt={item.name}
              className="w-full h-full rounded-2xl object-cover"
            />
            </div>

            {/* Message */}
            <p className="text-gray-300 text-[15px] leading-7 mt-6 min-h-[150px]">
              {item.message}
            </p>

            {/* User */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src={`${item.avatar}`}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="text-white text-lg font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-400">
                  {item.designation}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      <section className="bg-black py-24 text-white hidden md:block">
        <h2
          className="text-center font-semibold font-weight-600 font-[Quicksand] mb-16
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
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
              >
                <mpath href="#motionPath" />
              </animateMotion>
            </circle>
            <circle r="5" fill="#000">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
              >
                <mpath href="#motionPath" />
              </animateMotion>
            </circle>

            {/* 🔵 BALL 2 */}
            <circle r="5" fill="#00f0ff">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
              >
                <mpath href="#motionPath" />
              </animateMotion>
            </circle>

            {/* 🟣 BALL 3 */}
            <circle r="5" fill="#a855f7">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
              >
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
          className="text-center font-semibold font-weight-600 font-[Quicksand] mb-16
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

      <section className="bg-black text-white py-20 relative overflow-hidden">
        {/* bottom gradient glow */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-600/40 to-transparent blur-2xl"></div>

        <div className="max-w-7xl  mx-auto px-6 text-center">
          {/* Heading */}
          <div className="max-w-7xl  mx-auto px-6 bg-gradient-to-b from-[#0b0b0b] via-[#000000] to-[#050505] rounded-3xl py-10">
            {/* Heading */}

            <h2 className="text-center text-[40px] :md:text-[80px] lg:text-[80px] font-semibold font-[Quicksand] font-weight-600 text-gray-300">
              AWARDS & RECOGNITIONS
            </h2>
            <p className="mb-16 text-[20px] font-semibold font-[Quicksand] font-weight-600 text-gray-300 ">
              Recognized by leading mutual fund houses and industry platforms:
            </p>

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
                  <div className="flex flex-col items-center text-center 00  ">
                    {/* Trophy Section */}
                    <div className="relative flex justify-center items-center mb-10  hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
                      {/* Ribbon / Badge Background */}
                      <img
                        src="/awd.png"
                        className="w-60 object-contain  "
                        alt="award background"
                      />

                      {/* Trophy */}
                      <img
                        src={`${baseURL}/${item.image}`}
                        alt={item.title}
                        className="absolute  h-50 object-contain "
                      />

                      {/* Year */}
                      {/* <span className="absolute bottom-18 font-semibold text-[36px] bg-gradient-to-b from-[#000000] to-[#838383] bg-clip-text text-transparent">
                               {item.year}
                             </span> */}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[24px] md:text-[28.18px] font-weight-500 font-[Quicksand] mb-3"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />

                    {/* Description */}
                    {/* <p className="text-[#C8C8C8] md:text-[14.18px] font-weight-300 font-[Quicksand] px-8 leading-relaxed max-w-xs">
                             {item.description}
                           </p> */}
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

          {/* Next Section Title */}
          <h2
            className="text-center font-semibold mt-16 font-weight-600 font-[Quicksand]
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent "
          >
            Meet our team <br />
            of experts
          </h2>
        </div>
      </section>

      <section className=" py-20 bg-gradient-to-b from-[#161616] to-[#161616]/99">
        <div className="max-w-7xl px-20 mx-auto relative ">
          {/* Left Arrow */}
          <button className="team-prev absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronLeft size={20} className="text-black" />
          </button>

          {/* Right Arrow */}
          <button className="team-next absolute  right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronRight size={20} className="text-black" />
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            loop={true}
            centeredSlides={true}
            spaceBetween={40}
            slidesPerView={3}
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
            {team.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-w-[225px] sm:max-w-[240px] md:max-w-[265px] mx-auto bg-white rounded-[28px] overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
  <img
    src={`${baseURL}/${item.image}`}
    alt={item.name}
    className="w-full h-[240px] sm:h-[260px] md:h-[300px] object-cover"
  />

  <div className="px-5 py-5 ">
    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#202020]">
      {item.name}
    </h3>

    <p className="mt-2 text-[13px] sm:text-[14px] leading-5 text-[#666666]">
      {item.designation}
    </p>
  </div>
</div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Text */}
          <p className="text-center font-weight-400 text-white text-[18px] md:text-[28px] lg:text-[28px] mt-12 max-w-5xl mx-auto leading-[1.4] font-light">
            Our team supports clients with investment facilitation, portfolio
            tracking, and ongoing service assistance.
          </p>
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
          <div className="max-w-7xl mt-6 mx-auto relative">
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
