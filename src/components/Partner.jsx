import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import http from "../service/http";
import { baseURL } from "../service/api";

const steps = [
  {
    number: "1",
    title: "Register",
    desc: "Fill out our partner registration form online.",
  },
  {
    number: "2",
    title: "Get Trained",
    desc: "Access our comprehensive training and tools.",
  },
  {
    number: "3",
    title: "Start Earning",
    desc: "Begin serving clients and earning commissions.",
  },
];

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

      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <img
          src="/partner.png"
          alt="Partner with us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 gap-6">
          <h1
            className="font-bold font-[Quicksand]
              text-[42px] md:text-[80px] leading-[48px] md:leading-[88px]
              tracking-[-0.02em]
              bg-gradient-to-b from-white to-[#999999]
              bg-clip-text text-transparent"
          >
            Partner With Us
          </h1>
          <p className="text-gray-300 text-[17px] md:text-[20px] font-[Quicksand] max-w-xl">
            Join India&#39;s most trusted investment network
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button className="bg-white text-black font-semibold font-[Quicksand] rounded-full px-8 py-3 hover:opacity-90 transition">
              Book a free call
            </button>
            <button className="border border-gray-500 text-white font-semibold font-[Quicksand] rounded-full px-8 py-3 hover:border-gray-300 transition">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. WHY PARTNER WITH US ───────────────────────────────────── */}
      <section className="relative bg-black py-20 overflow-hidden">
        {/* Section glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-400 blur-[200px] opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left – stacked heading */}
          <div>
            <h2
              className="font-bold font-[Quicksand]
                text-[40px] md:text-[56px] leading-[46px] md:leading-[64px]
                tracking-[-0.02em]
                bg-gradient-to-b from-white to-[#999999]
                bg-clip-text text-transparent"
            >
              Grow Together
              <br />
              Build Trust
              <br />
              Create Impact
            </h2>
          </div>
          {/* Right – API content */}
          <div className="text-gray-400 text-[16px] leading-relaxed font-[Quicksand] space-y-4">
            {loading ? (
              <div className="animate-pulse space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-800 rounded w-full" />
                ))}
              </div>
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: content_section?.content }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE OFFER ─────────────────────────────────────────── */}
      <section className="relative bg-black py-16 md:py-24 overflow-hidden">
        {/* Section glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-400 blur-[200px] opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2
            className="text-center font-bold font-[Quicksand] mb-14
              text-[40px] md:text-[72px] leading-[46px] md:leading-[80px]
              tracking-[-0.02em]
              bg-gradient-to-b from-white to-[#999999]
              bg-clip-text text-transparent"
          >
            What We Offer
          </h2>
          {/* Cards grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#111] border border-gray-800 rounded-2xl p-8 animate-pulse"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg mb-5" />
                  <div className="h-5 bg-gray-800 rounded w-2/3 mb-3" />
                  <div className="h-4 bg-gray-800 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-800 rounded w-5/6" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111] border border-gray-800 rounded-2xl p-8
                    hover:border-gray-600
                    hover:scale-[1.02]
                    hover:shadow-[0_0_50px_rgba(200,200,200,0.08)]
                    transition-all duration-300 cursor-default"
                >
                  {/* Icon */}
                  <img
                    src={`${baseURL}/${item.icon_img}`}
                    alt={item.title}
                    className="w-12 h-12 mb-5 object-contain"
                  />
                  {/* Title */}
                  <h3 className="text-white text-xl font-semibold font-[Quicksand] mb-3">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-400 text-[15px] leading-relaxed font-[Quicksand]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="relative bg-black py-16 md:py-24 overflow-hidden">
        {/* Section glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gray-400 blur-[200px] opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2
            className="text-center font-bold font-[Quicksand] mb-16
              text-[40px] md:text-[64px] leading-[46px] md:leading-[72px]
              tracking-[-0.02em]
              bg-gradient-to-b from-white to-[#999999]
              bg-clip-text text-transparent"
          >
            How It Works
          </h2>
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-[260px] mx-auto"
              >
                {/* Numbered circle */}
                <div className="border border-gray-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white font-bold font-[Quicksand] mb-5">
                  {step.number}
                </div>
                {/* Step title */}
                <h3 className="text-white text-xl font-semibold font-[Quicksand] mb-3">
                  {step.title}
                </h3>
                {/* Step description */}
                <p className="text-gray-400 text-[15px] leading-relaxed font-[Quicksand]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA BANNER ────────────────────────────────────────────── */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="relative bg-gradient-to-b from-[#282828] to-[#141414]
              border border-gray-800 rounded-2xl
              flex flex-col items-center justify-center text-center
              py-16 px-6 overflow-hidden
              hover:border-gray-700 transition-all duration-300
              hover:shadow-[0_0_60px_rgba(200,200,200,0.1)]"
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gray-400 blur-[150px] opacity-15 pointer-events-none" />
            <h2
              className="relative font-bold font-[Quicksand]
                text-[36px] md:text-[56px] leading-[42px] md:leading-[64px]
                tracking-[-0.02em]
                bg-gradient-to-b from-white to-[#999999]
                bg-clip-text text-transparent mb-4"
            >
              Ready to Join Us?
            </h2>
            <p className="relative text-gray-400 text-[16px] md:text-[18px] font-[Quicksand] max-w-lg mb-8 leading-relaxed">
              Take the first step towards building a rewarding career in
              financial advisory. Join our growing network of trusted partners.
            </p>
            <button className="relative bg-white text-black font-semibold font-[Quicksand] rounded-full px-10 py-3 hover:opacity-90 transition">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partner;
