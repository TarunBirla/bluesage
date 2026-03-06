import React, { useState, useRef, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const data = [
    { name: "Principal", value: 40 },
    { name: "Interest", value: 60 }
  ];

  const COLORS = ["#949494", "#ffffff"];
  return (
    <>
      <Header />

      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[90vh] bg-black overflow-hidden">
        {/* Center Circle Image */}
        <div className="absolute inset-0 flex items-center justify-center mt-20 mb-10">
          <img src="/2.png" alt="circle" className="w-[500px] md:w-[500px] " />
        </div>

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
  w-[1200px] h-[250px] 
  bg-gradient-to-t from-gray-200 to-transparent 
  blur-[120px] opacity-40"
        ></div>
        {/* Content */}
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

          {/* Button */}
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
      <section className=" bg-black pb-20">
        {/* Stats Card */}
        <div className="max-w-5xl mx-auto  px-6">
          <div
            className="grid grid-cols-2 -mt-20 md:grid-cols-4 
    bg-[#121212] backdrop-blur-md 
    border border-gray-700 
    rounded-2xl 
    py-10 text-center text-white shadow-xl"
          >
            {/* Item */}
            <div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-xs text-gray-400 mt-2">YEARS OF EXPERIENCE</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">18+</h3>
              <p className="text-xs text-gray-400 mt-2">AWARDS WE WON</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">250+</h3>
              <p className="text-xs text-gray-400 mt-2">CRORES</p>
              <span className="text-[10px] text-gray-500">
                (ASSET UNDER MANAGEMENT)
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-bold">350+</h3>
              <p className="text-xs text-gray-400 mt-2">
                HAPPY AND SATISFIED CLIENTS
              </p>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 
  w-[600px] h-[200px] 
  bg-gradient-to-t from-gray-200 to-transparent 
  blur-[120px] opacity-40"
          ></div>

          <div className="max-w-5xl mx-auto px-6 mt-20  relative z-10">
            {/* Button */}
            <button className="px-6 py-2 border border-gray-500 rounded-full text-white text-sm mb-10">
              Who we are?
            </button>

            {/* Text */}
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
      <section className="bg-black  pb-20">
        {/* Stats Card */}
        <div className="max-w-6xl mx-auto  ">
          <img src="/scnhome.png" className="w-full h-auto" />
        </div>
      </section>

      <section className="relative bg-black py-28 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-300 blur-[180px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-white text-5xl font-bold mb-6">Process</h2>

            <p className="text-gray-400 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            {/* Curved Line */}
            <svg
              className="absolute top-10 left-0 w-full"
              viewBox="0 0 600 200"
              fill="none"
            >
              <path
                d="M0 150 C100 50 200 200 300 100 C400 0 500 150 600 80"
                stroke="#9ca3af"
                strokeWidth="2"
              />
            </svg>

            {/* Steps */}
            <div className="relative flex justify-between mt-10">
              {[1, 2, 3, 4, 5, 6].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Dot */}
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Text */}
                  <div className="mt-4 max-w-[140px]">
                    <h4 className="text-white text-sm font-semibold">
                      Project Discovery Call
                    </h4>

                    <p className="text-gray-400 text-xs mt-1">
                      From they fine john he give of rich he. They age and draws
                      mrs like.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section className="bg-black py-24 flex justify-center">

      <div className="max-w-6xl w-full border border-white rounded-[40px] p-10">

        {/* TITLE */}
        <h2 className="text-white text-2xl font-semibold mb-6">
          SIP calculator
        </h2>

        {/* TOGGLE */}
        <div className="flex gap-8 mb-8 text-gray-300">
          <label className="flex items-center gap-2">
            <input type="radio" name="type" />
            SIP calculator
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="type" />
            Lumpsum
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT FORM */}
          <div className="border border-gray-700 rounded-2xl p-8">

            <div className="mb-10">
              <p className="text-gray-400 mb-2 text-sm">
                monthly SIP Amount
              </p>
              <input type="range" className="w-full custom-slider" />
            </div>

            <div className="mb-10">
              <p className="text-gray-400 mb-2 text-sm">
                SIP Period
              </p>
              <input type="range" className="w-full custom-slider "  />
            </div>

            <div>
              <p className="text-gray-400 mb-2 text-sm">
                Expected return rate (p.a)
              </p>
              <input type="range" className="w-full custom-slider" />
            </div>
<style>
  {
    `
    .custom-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  background: #6b7280; /* grey track */
  outline: none;
}

/* filled track */
.custom-slider::-webkit-slider-runnable-track {
  height: 2px;
  background: linear-gradient(to right, #ffffff 50%, #6b7280 50%);
}

/* thumb */
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 50%;
  margin-top: -6px;
  cursor: pointer;
}

/* Firefox */
.custom-slider::-moz-range-track {
  background: #6b7280;
  height: 2px;
}

.custom-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 50%;
  border: none;
}
    `
  }
</style>
          </div>

          {/* RIGHT CHART */}
          <div className="flex flex-col items-center justify-center">

            <PieChart width={220} height={220}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>

            {/* Legend */}
            <div className="flex gap-6 mt-4 text-gray-400 text-sm">
              <span>● Principal</span>
              <span>● Interest</span>
            </div>

            {/* Values */}
            <div className="mt-6 text-center text-gray-300 text-sm">

              <p>Total SIP Amount invested</p>
              <p className="text-white text-lg font-semibold">
                Rs. 1,71,75,000
              </p>

              <p className="mt-3">Total Growth</p>
              <p className="text-white text-lg font-semibold">
                Rs. 2,15,12,16,484
              </p>

              <p className="mt-3">Total Future Value</p>
              <p className="text-white text-lg font-semibold">
                Rs. 2,16,83,91,484
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

      <Footer />
    </>
  );
};

export default Home;
