import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { ChevronDown } from "lucide-react";
import http from "../service/http";
import { baseURL } from "../service/api";

const Partner = () => {


   const [content_section, setContent_section] = useState(null);
    const [card, setCard] = useState([]);
   
  
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
  
        setContent_section(AllData?.content_section);
        setCard(AllData?.offerings);
     
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  return (
    <>
      <Header />

      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/partner.png"
          alt="partner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="text-center font-semibold 
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
          >
            Partner with us
          </h1>

          {/* Dropdown */}
          <div className="relative mt-4">
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
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-4 text-gray-300">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">
            {content_section?.title}
          </h2>

          {/* Paragraphs */}
          <p className="mb-6 text-[#C3C3C3] text-[18px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content_section?.content }}/>
           

          

         
        </div>
      </section>
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-3">
          {/* Heading */}
          <h2
            className="text-center font-semibold mb-10 
           text-[40px] md:text-[80px] leading-[45px] md:leading-[85px] tracking-[-0.02em]
          bg-gradient-to-b from-white to-[#999999]
          bg-clip-text text-transparent"
          >
            What We Offer
          </h2>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card1 */}
            {card.map((item, index) => (
              <div
                key={index}
                className="relative w-full max-w-[320px] mx-auto text-white hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
              >
                {/* border box */}
                <img src="/borderbox.png" alt="" className="w-full" />

                {/* content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-start">
                  {/* icon */}
                  <div className="mb-6">
                    <img src={`${baseURL}/${item.icon_img}`} alt="" className="w-10 h-10" />
                  </div>

                  {/* title */}
                  <h3 className="font-semibold text-lg leading-snug mb-4">
                    {item.title}
                  </h3>

                  {/* description */}
                  <p className="text-[18px] text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partner;
