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

      <section className="relative w-full bg-black flex items-center justify-center py-24 overflow-hidden">
        {/* Bottom Silver Glow */}
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
            {/* Left Image */}
            <div className="w-[300px] shrink-0">
              <img
                src="/bigimg.png"
                alt=""
                className="rounded-2xl object-cover w-full h-[400px] mt-20"
              />
            </div>

            {/* Right Text */}
            <div className="text-gray-300 max-w-lg">
              <p className="leading-relaxed mb-8 text-[18px]">
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
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl  mx-auto px-6">
          {/* Heading */}
          <h2 className="text-center text-5xl font-semibold text-gray-300 mb-20">
            Our Journey
          </h2>

          {/* Timeline wrapper */}
          <div className="relative">
            {/* Top line */}
            {/* <div className="absolute top-24 left-0 w-full h-[1px] bg-gray-500"></div> */}

            {/* Bottom line */}
            {/* <div className="absolute bottom-24 left-0 w-full h-[1px] bg-gray-500"></div> */}

            {/* Top Row */}
            <div className="grid grid-cols-3 gap-12 mb-32">
              {/* Item */}
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

            {/* Bottom Row */}
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
      </section>
      <section className="bg-black text-white py-24 relative overflow-hidden">
        {/* bottom gradient glow */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-600/40 to-transparent blur-2xl"></div>

        <div className="max-w-7xl  mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-5xl font-semibold text-gray-300 mb-16">
            Award and achievement
          </h2>

          {/* Awards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
            {/* Award Item */}
            <div className="text-center">
              <img src="/10.png" className="mx-auto h-28 object-contain" />
              <p className="mt-4 text-sm text-gray-300">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center">
              <img src="/10.png" className="mx-auto h-28 object-contain" />
              <p className="mt-4 text-sm text-gray-300">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center">
              <img src="/10.png" className="mx-auto h-28 object-contain" />
              <p className="mt-4 text-sm text-gray-300">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>

            <div className="text-center">
              <img src="/10.png" className="mx-auto h-28 object-contain" />
              <p className="mt-4 text-sm text-gray-300">
                BSE Star <br />
                Mutual Fund Award <br />
                2019
              </p>
            </div>
          </div>

          {/* Next Section Title */}
          <h2 className="text-5xl font-semibold text-gray-300 mt-20">
            Meet our team <br />
            of experts
          </h2>
        </div>
      </section>
      <section className="bg-black py-10">
        <div className="max-w-7xl  mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card */}
            <div className="bg-white rounded-3xl overflow-hidden">
              {/* Image */}
              <img
                src="/bigimg.png"
                className="w-full h-[350px] object-cover"
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
                className="w-full h-[350px] object-cover"
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
                className="w-full h-[350px] object-cover"
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
                className="w-full h-[350px] object-cover"
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
