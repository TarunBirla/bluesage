import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import { baseURL } from "../service/api";
import { ChevronDown } from "lucide-react";

const ProjectNew = () => {
  const [services, setServices] = useState([]);
  const [highlight, setHighlight] = useState(null);
  const [count, setCount] = useState([]);
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
      setCount(AllData?.counters || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const stats =
    count.length > 0
      ? count
      : [
          { number: "250+", subtitle: "Cr Assets managed" },
          { number: "350+", subtitle: "Clients" },
          { number: "20+", subtitle: "Years" },
        ];

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════
          HERO — text left, image right
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
          className="block md:hidden w-full h-[30vh] mt-10 object-cover object-center"
        />
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE BLUE SAGE?
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-center font-semibold mb-10 md:mb-20 font-weight-600 font-[Quicksand]
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
          >
            Why choose Blue Sage?
          </h2>

          {/* Stats row */}
          {/* <div className="grid grid-cols-3 gap-4 bg-[#111] border border-gray-800 rounded-2xl py-8 px-4 mb-8">
            {stats.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className={`text-center ${i !== 2 ? "border-r border-gray-700" : ""}`}
              >
                <h3 className="text-white font-bold font-[Quicksand] text-[32px] md:text-[48px]">
                  {item.number}
                </h3>
                <p className="text-gray-400 text-[12px] md:text-[14px] font-[Quicksand] uppercase tracking-wide mt-1">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div> */}
          <div
            className="border border-gray-600 rounded-[30px] py-10 px-6
          backdrop-blur-md bg-black/60 hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
          >
            <div className="grid md:grid-cols-3 text-white items-center ">
              {/* Stat 1 */}
              <div className="text-center py-4 md:py-0">
                <h3 className="text-3xl md:text-[55px] font-weight-400">
                  250<span className="text-lg">+ Cr</span>
                </h3>
                <p className="text-[#AAAAAA] text-[18px] md:text-[22px] mt-2">
                  Assets undermanagement
                </p>
              </div>

              {/* Divider */}
              {/* <div className="hidden md:block border-l border-gray-600 h-14 mx-auto"></div> */}

              {/* Stat 2 */}
              <div className="text-center py-4 md:py-0 border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-gray-600">
                <h3 className="text-3xl md:text-[55px] font-weight-400">
                  350+
                </h3>
                <p className="text-[#AAAAAA] text-[18px] md:text-[22px] mt-2">
                  Clients trust Blue Sage <br /> Wealth
                </p>
              </div>

              {/* Divider */}
              {/* <div className="hidden md:block border-l border-gray-600 h-14 mx-auto"></div> */}

              {/* Stat 3 */}
              <div className="text-center py-4 md:py-0">
                <h3 className="text-3xl md:text-[55px] font-weight-400">
                  20+ <span className="text-lg">Years</span>
                </h3>
                <p className="text-[#AAAAAA] text-[18px] md:text-[22px] mt-2">
                  Of experience
                </p>
              </div>
            </div>
          </div>

          {/* Schedule button */}
          <div className="flex items-center justify-center mt-24">
            <button className="border flex items-center gap-2 border-gray-500 text-white px-3 py-3 rounded-full mb-16 bg-white/10 backdrop-blur-md">
              Schedule an expert call <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICE CARDS GRID
      ══════════════════════════════════════ */}
      <section className="bg-black py-10 relative overflow-hidden">
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="relative w-full max-w-[340px] md:max-w-[387px] mx-auto text-center text-white hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
              >
                {/* Box */}
                <img src="/box1.png" alt="" className="w-full h-auto" />

                {/* Icon */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={`${baseURL}/${service.icon_img}`}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8">
                  <h3 className="text-[20px] md:text-[22px] font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[#C8C8C8] text-[15px] md:text-[21px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4"> */}
          {/* <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
  {services.slice(6, 8).map((service, index) => (
    <div
      key={index}
      className="relative w-full max-w-[340px] md:max-w-[387px] mx-auto text-center text-white hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
    >
      
      <img
        src="/box1.png"
        alt=""
        className="w-full h-auto"
      />

      
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
        <img
          src={`${baseURL}/${service.icon_img}`}
          alt={service.title}
          className="w-10 h-10"
        />
      </div>

      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8">
        <h3 className="text-[20px] md:text-[22px] font-semibold mb-3">
          {service.title}
        </h3>

        <p className="text-[#C8C8C8] text-[15px] md:text-[21px] leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div> */}
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            {services.slice(6, 8).map((service, index) => (
              <div
                key={index}
                className="relative w-full max-w-[340px] md:max-w-[387px] text-center text-white group hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
              >
                {/* Background */}
                <img src="/box1.png" alt="" className="w-full h-auto" />

                {/* Icon */}
                {/* Icon */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={`${baseURL}/${service.icon_img}`}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8">
                  <h3 className="text-[20px] md:text-[22px] font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[#C8C8C8] text-[15px] md:text-[21px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONSULTATION QUOTE TEXT
      ══════════════════════════════════════ */}
      <section className="bg-black py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className=" text-4xl md:text-[50px] font-semibold mb-14 font-weight-600 font-[Quicksand] bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
            Schedule a consultation to begin your investment
            <br />
            journey aligned with your financial goals
          </h2>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RUPEE VISUAL + QR (scnhome image)
      ══════════════════════════════════════ */}
      <section className="bg-black pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <img
              src="/scnhome.png"
              alt="Investment Visual"
              className="max-w-full w-full md:w-[85%] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HIGHLIGHT — "Most portfolios fail..."
      ══════════════════════════════════════ */}
      {highlight && (
        <section className="bg-black py-24 relative overflow-hidden">
          {/* Bottom Glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 
  w-[700px] h-[300px] bg-gray-300 blur-[160px] opacity-20"
          ></div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-weight-500 font-[Quicksand] leading-tight">
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
      )}

      <Footer />
    </>
  );
};

export default ProjectNew;
