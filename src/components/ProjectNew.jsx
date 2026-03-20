import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { ChevronDown } from "lucide-react";
import http from "../service/http";
import { baseURL } from "../service/api";

const ProjectNew = () => {
  const [logos, setLogos] = useState([]);
  const [services, setServices] = useState([]);
  const [highlight, setHighlight] = useState(null);

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

      setServices(AllData?.services);
      setHighlight(AllData?.highlight);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />

      <section className="relative w-full h-[80vh] md:h-[90vh] bg-black overflow-hidden ">
        {/* Bottom Silver Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[700px] h-[250px] 
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
            Blue Sage Wealth:
          </h1>

          <h2
            className="text-white font-[Syne] font-semibold
            text-[28px] leading-[36px]
            sm:text-[46px] sm:leading-[50px]
            md:text-[52px] md:leading-[58px]"
          >
            Your Family’s Wealth Partner
          </h2>

          <p className="text-gray-300 text-[18px] mt-3">
            Helps in achieving your financial goals
          </p>

          {/* Dropdown */}
          {/* Dropdown Wrapper */}
          <div className="relative mt-10">
            <select
              className="appearance-none px-8 py-3 pr-12 rounded-full
              border border-gray-400
              text-white bg-[#252525]
              text-center
              outline-none cursor-pointer
              hover:bg-white hover:text-black
              transition"
            >
              <option className="text-black">Book a free call</option>
              <option className="text-black">Investment Planning</option>
              <option className="text-black">Portfolio Review</option>
              <option className="text-black">Financial Consultation</option>
            </select>

            {/* Custom Arrow */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
              <ChevronDown size={20} />
            </span>
          </div>
        </div>
      </section>
      <section className="bg-black py-24 relative overflow-hidden">
        {/* side glow */}
        <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-gray-300 blur-[150px] opacity-20"></div>
        <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-gray-300 blur-[150px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-6 text-center">
          {/* Heading */}
          <h2
            className="text-center font-semibold mb-20
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
          >
            Why choose Blue Sage?
          </h2>

          {/* Stats Card */}
          <div
            className="border border-gray-600 rounded-[30px] py-10 px-6
          backdrop-blur-md bg-black/60 hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
          >
            <div className="grid md:grid-cols-3 text-white items-center ">
              {/* Stat 1 */}
              <div className="text-center py-4 md:py-0">
                <h3 className="text-3xl md:text-[55px] font-semibold">
                  15,000<span className="text-lg">+ Cr</span>
                </h3>
                <p className="text-[#AAAAAA] text-[18px] md:text-[22px] mt-2">
                  Client assets in 4 years
                </p>
              </div>

              {/* Divider */}
              {/* <div className="hidden md:block border-l border-gray-600 h-14 mx-auto"></div> */}

              {/* Stat 2 */}
              <div className="text-center py-4 md:py-0 border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-gray-600">
                <h3 className="text-3xl md:text-[55px] font-semibold">
                  5,000+
                </h3>
                <p className="text-[#AAAAAA] text-[18px] md:text-[22px] mt-2">
                  Clients trust Blue Sage Wealth
                </p>
              </div>

              {/* Divider */}
              {/* <div className="hidden md:block border-l border-gray-600 h-14 mx-auto"></div> */}

              {/* Stat 3 */}
              <div className="text-center py-4 md:py-0">
                <h3 className="text-3xl md:text-[55px] font-semibold">
                  20+ <span className="text-lg">Years</span>
                </h3>
                <p className="text-[#AAAAAA] text-[18px] md:text-[22px] mt-2">
                  Of experience
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Top Button */}
        <div className="flex items-center justify-center mt-24">
          <button className="border flex items-center gap-2 border-gray-500 text-white px-6 py-3 rounded-full mb-16 bg-white/10 backdrop-blur-md">
            Schedule an expert call <ChevronDown size={20} />
          </button>
        </div>
      </section>

      <section className="bg-black py-10 relative overflow-hidden">
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-6 text-center">
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            {services.map((service, index) => (
              <div className="relative w-[387px] mx-auto text-center text-white hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all">
                {/* Box */}
                <img src="/box1.png" className="w-full" />

                {/* Icon */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={`${baseURL}/${service.icon_img}`}
                    className="w-10 h-10"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                  <h3 className="text-2xl md:text-[22.18px] font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[#C8C8C8] text-[18px] md:text-[21px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black  pb-20 pt-20 ">
        {/* Stats Card */}
        <div className="max-w-7xl  mx-auto text-center ">
          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-14 ">
            Schedule a call to align your
            <br /> investments with financial goals
          </h2>
          <img src="/scnhome.png" className="w-full h-auto" />
        </div>
      </section>

      <section className="bg-black py-24 relative overflow-hidden">
        {/* Bottom Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
  w-[700px] h-[300px] bg-gray-300 blur-[160px] opacity-20"
        ></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
              {highlight?.title || "Loading..."}
            </h2>

            <p className="text-gray-400 mt-6 max-w-md text-[18px]">
              {highlight?.description}
            </p>

            <button className="mt-8 border border-gray-500 text-white px-6 py-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition">
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
                className="w-full h-auto object-contain hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectNew;
