import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "/google.png",
  "/google.png",
  "/google.png",
  "/google.png",
  "/google.png",
  "/google.png",
  "/google.png",
  "/google.png",
];

const Abouts = () => {
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

        <div className="relative w-full max-w-7xl  mx-auto px-6 py-14">
          <div
            className="relative 
            bg-contain bg-center h-[600px] w-full bg-no-repeat
            flex items-center gap-40 px-16"
            style={{ backgroundImage: "url('/aboutimg.png')" }}
          >
            <div className="w-[300px] shrink-0 ml-10">
              <img
                src="/bigimg.png"
                alt=""
                className="rounded-2xl object-cover w-full h-[400px] mt-20"
              />
            </div>

            <div className="text-gray-300 max-w-lg -mt-20">
              <p className="leading-relaxed font-light mb-10 text-[24px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <div className="flex items-center gap-3">
                <img src="/smallimg.png" className="w-10 h-10 rounded-full" />

                <div>
                  <h4 className="text-white font-semibold">Aadil bandukwala</h4>

                  <p className="text-sm text-gray-400">Managing director</p>
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
              src="/bigimg.png"
              alt=""
              className="rounded-2xl w-full h-[360px] object-fill"
            />
          </div>

          {/* text */}
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* author */}
          <div className="flex items-center gap-3">
            <img src="/smallimg.png" className="w-10 h-10 rounded-full" />

            <div>
              <h4 className="text-white font-semibold">Aadil bandukwala</h4>

              <p className="text-sm text-gray-400">Managing director</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-black text-white py-24">
        <div className="max-w-7xl  mx-auto px-6">
          
          <h2 className="text-center text-5xl font-semibold text-gray-300 mb-20">
            Our Journey
          </h2>

         
          <div className="relative">
            
            <div className="grid grid-cols-3 gap-12 mb-32">
              
              <div>
                <p className="text-xs text-gray-400 mb-2">2000-2005</p>

                <h3 className="font-semibold mb-2">
                  Lorem Ipsum is <br /> simply dummy text
                </h3>

                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">2000-2005</p>

                <h3 className="font-semibold mb-2">
                  Lorem Ipsum is <br /> simply dummy text
                </h3>

                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">2000-2005</p>

                <h3 className="font-semibold mb-2">
                  Lorem Ipsum is <br /> simply dummy text
                </h3>

                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            
            <div className="grid grid-cols-3 gap-12">
              <div>
                <p className="text-xs text-gray-400 mb-2">2000-2005</p>

                <h3 className="font-semibold mb-2">
                  Lorem Ipsum is <br /> simply dummy text
                </h3>

                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">2000-2005</p>

                <h3 className="font-semibold mb-2">
                  Lorem Ipsum is <br /> simply dummy text
                </h3>

                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">2000-2005</p>

                <h3 className="font-semibold mb-2">
                  Lorem Ipsum is <br /> simply dummy text
                </h3>

                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
          {/* TIMELINE LINE */}
          <svg
            className="absolute left-0 top-[-6px] w-full h-[400px]"
            viewBox="0 0 1200 400"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            {/* TOP LINE */}
            <path d="M20 30 H1080" />

            {/* ARROWS */}
            <polygon points="280,26 260,30 280,34" fill="white" />
            <polygon points="580,26 560,30 580,34" fill="white" />
            <polygon points="880,26 860,30 880,34" fill="white" />

            {/* CURVE */}
            <path d="M1080 30 Q1150 30 1150 90" />

            {/* DOWN LINE */}
            <path d="M1150 90 V260" />

            {/* DOWN ARROWS */}
            <polygon points="1145,120 1150,135 1155,120" fill="white" />
            {/* <polygon points="1145,160 1150,175 1155,160" fill="white" /> */}
          </svg>
          {/* TOP ROW */}
          <div className="grid grid-cols-3 px-16 pr-20 gap-24 mb-32 relative z-10">
            <div>
              <p className="text-gray-400 text-sm mb-3">2000-2005</p>
              <h3 className="font-semibold text-sm mb-2">
                Lorem Ipsum is <br /> simply dummy text
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-3">2000-2005</p>
              <h3 className="font-semibold text-sm mb-2">
                Lorem Ipsum is <br /> simply dummy text
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-3">2000-2005</p>
              <h3 className="font-semibold text-sm mb-2">
                Lorem Ipsum is <br /> simply dummy text
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          {/* TIMELINE LINE */}
          <svg
            className="absolute left-0 top-[140px] w-full h-[180px]"
            viewBox="0 0 1200 180"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            {/* DOWN ARROW */}
            <polygon points="1145,100 1150,115 1155,100" fill="white" />
            {/* CURVE TO BOTTOM LINE */}
            <path d="M1150 100 Q1150 130 1120 130" />
            {/* BOTTOM LINE */}
            {/* BOTTOM LINE */}
            <path d="M1120 130 H20" />

            {/* ARROWS BOTTOM */}
            <polygon points="880,126 860,130 880,134" fill="white" />
            <polygon points="580,126 560,130 580,134" fill="white" />
            <polygon points="280,126 260,130 280,134" fill="white" />
          </svg>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-3 gap-24 px-16 pr-20 mt-28 relative z-10">
            <div>
              <p className="text-gray-400 text-sm mb-3">2000-2005</p>
              <h3 className="font-semibold mb-2 text-sm">
                Lorem Ipsum is <br /> simply dummy text
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-3">2000-2005</p>
              <h3 className="font-semibold mb-2 text-sm">
                Lorem Ipsum is <br /> simply dummy text
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-3">2000-2005</p>
              <h3 className="font-semibold mb-2 text-sm">
                Lorem Ipsum is <br /> simply dummy text
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
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

          <div className="space-y-12">
            {/* ITEM */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></div>

              <p className="text-gray-400 text-xs mb-2">2000-2005</p>

              <h3 className="font-semibold text-sm mb-2">
                Lorem Ipsum is <br /> simply dummy text
              </h3>

              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            {/* ITEM */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></div>

              <p className="text-gray-400 text-xs mb-2">2005-2010</p>

              <h3 className="font-semibold text-sm mb-2">
                Lorem Ipsum is <br /> simply dummy text
              </h3>

              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            {/* ITEM */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></div>

              <p className="text-gray-400 text-xs mb-2">2010-2015</p>

              <h3 className="font-semibold text-sm mb-2">
                Lorem Ipsum is <br /> simply dummy text
              </h3>

              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            {/* ITEM */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full"></div>

              <p className="text-gray-400 text-xs mb-2">2015-2020</p>

              <h3 className="font-semibold text-sm mb-2">
                Lorem Ipsum is <br /> simply dummy text
              </h3>

              <p className="text-gray-400 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
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
            <div className="text-center relative w-fit mx-auto">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center relative w-fit mx-auto">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center relative w-fit mx-auto">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center relative w-fit mx-auto">
              {/* Laurels */}
              <img src="/10.png" className="mx-auto h-36 object-contain" />

              {/* Number badge */}
              <div className="relative -mt-32 flex justify-center">
                <img src="/number.png" className="h-28 object-contain" />
              </div>

              {/* Text */}
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
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
          bg-clip-text text-transparent"
          >
            Meet our team <br />
            of experts
          </h2>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#161616] to-[#161616]/99 py-16">
        <div className="max-w-7xl px-4 mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card */}
            <div className="bg-white rounded-3xl overflow-hidden">
              {/* Image */}
              <img
                src="/bigimg.png"
                className="w-full h-[350px] rounded-3xl object-cover"
                alt=""
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">Vaibhav Porwal</h3>

                <p className="text-gray-500 text-sm">Co-founder</p>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl overflow-hidden">
              <img
                src="/bigimg.png"
                className="w-full h-[350px] rounded-3xl object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">Vaibhav Porwal</h3>
                <p className="text-gray-500 text-sm">Co-founder</p>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl overflow-hidden">
              <img
                src="/bigimg.png"
                className="w-full h-[350px] rounded-3xl object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">Vaibhav Porwal</h3>
                <p className="text-gray-500 text-sm">Co-founder</p>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl overflow-hidden">
              <img
                src="/bigimg.png"
                className="w-full h-[350px] rounded-3xl object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">Vaibhav Porwal</h3>
                <p className="text-gray-500 text-sm">Co-founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-10">
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
                  <img src={logo} alt="logo" className="h-8 object-contain" />
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
                  <img src={logo} alt="logo" className="h-8 object-contain" />
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

export default Abouts;
