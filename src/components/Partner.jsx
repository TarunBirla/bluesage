import React, { useState, useRef, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Partner = () => {
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
            className="text-white font-[Syne] font-bold
      text-[38px] leading-[46px]
      sm:text-[56px] sm:leading-[60px]
      md:text-[72px] md:leading-[78px]"
          >
            Partner with us
          </h1>

          {/* Dropdown */}
          <select
            className="mt-10 px-6 py-3 rounded-full
      border border-gray-400
      text-white bg-white/10 backdrop-blur-md
      outline-none cursor-pointer
      hover:bg-white hover:text-black
      transition"
          >
            <option className="text-black">Book a free call</option>
            <option className="text-black">Investment Planning</option>
            <option className="text-black">Portfolio Review</option>
            <option className="text-black">Financial Consultation</option>
          </select>
        </div>
      </section>
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-4 text-gray-300">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">
            Grow Together. Build Trust. Create Impact.
          </h2>

          {/* Paragraphs */}
          <p className="mb-6 leading-relaxed">
            At Blue Sage Wealth, we don’t just build financial strategies — we
            build enduring relationships. Our success lies in empowering
            professionals who are driven by purpose, grounded in ethics, and
            committed to making a meaningful difference in clients’ financial
            lives.
          </p>

          <p className="mb-6 leading-relaxed">
            We are more than a brand — we are a collaborative ecosystem of
            financial experts, advisors, and entrepreneurs united by one
            mission: To deliver trustworthy, transparent, and long-term wealth
            solutions that genuinely improve lives.
          </p>

          <p className="mb-6 leading-relaxed">
            Whether you're a seasoned financial advisor, a tax consultant, an
            insurance specialist, or a passionate newcomer looking to enter the
            wealth industry — we invite you to grow with us.
          </p>

          <p className="mb-4 leading-relaxed">
            By partnering with Blue Sage Wealth, you gain more than just a
            platform — you gain:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>The credibility of a trusted brand</li>
            <li>The backing of experienced mentors</li>
            <li>
              A full suite of investment, insurance, and planning solutions
            </li>
            <li>Ongoing support to help you scale with integrity</li>
          </ul>

          <p className="leading-relaxed">
            Together, we can deliver value that goes beyond returns — by helping
            clients build wealth that is secure, sustainable, and
            purpose-driven.
          </p>
        </div>
      </section>
      <section className="relative bg-black py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-gray-300 blur-[160px] opacity-20"></div>

        <div className="max-w-7xl  mx-auto px-3">
          {/* Heading */}
          <h2 className="text-center text-white text-4xl md:text-5xl font-semibold mb-16">
            What We Offer
          </h2>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card */}
            <div className="border border-gray-700 rounded-2xl p-6 bg-black/40 backdrop-blur-md text-gray-300">
              <div className="mb-4 text-white text-xl">✈</div>

              <h3 className="text-white font-semibold mb-3">
                Established Brand Backed Experts
              </h3>

              <p className="text-sm text-gray-400">
                Operate under the Blue Sage Wealth banner — built by IIM alumni
                and certified financial planners with over 20 years of combined
                experience.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-700 rounded-2xl p-6 bg-black/40 backdrop-blur-md text-gray-300">
              <div className="mb-4 text-white text-xl">✈</div>

              <h3 className="text-white font-semibold mb-3">
                End-to-End Business Infrastructure
              </h3>

              <p className="text-sm text-gray-400">
                Access our robust product platforms, tech tools, operations
                support, and compliance systems so you can scale efficiently.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-700 rounded-2xl p-6 bg-black/40 backdrop-blur-md text-gray-300">
              <div className="mb-4 text-white text-xl">✈</div>

              <h3 className="text-white font-semibold mb-3">
                Training, Mentorship & Growth Support
              </h3>

              <p className="text-sm text-gray-400">
                We invest in our partners through hands-on mentorship, domain
                training, marketing support, and business development
                strategies.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-700 rounded-2xl p-6 bg-black/40 backdrop-blur-md text-gray-300">
              <div className="mb-4 text-white text-xl">✈</div>

              <h3 className="text-white font-semibold mb-3">
                Join Industry's Best Insurance Company
              </h3>

              <p className="text-sm text-gray-400">
                We are recognized leaders in one of the leading insurance
                companies and we can help you establish your own successful
                insurance distribution business.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-700 rounded-2xl p-6 bg-black/40 backdrop-blur-md text-gray-300">
              <div className="mb-4 text-white text-xl">✈</div>

              <h3 className="text-white font-semibold mb-3">
                Wide Product Spectrum
              </h3>

              <p className="text-sm text-gray-400">
                Offer your clients best-in-class solutions across mutual funds,
                insurance, retirement planning, estate advisory, and more.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-700 rounded-2xl p-6 bg-black/40 backdrop-blur-md text-gray-300">
              <div className="mb-4 text-white text-xl">✈</div>

              <h3 className="text-white font-semibold mb-3">
                Ethical, Collaborative Culture
              </h3>

              <p className="text-sm text-gray-400">
                Collaborate with a brand built on trust, driven by compliance
                and focused on leading client impact and maintaining highest
                standards in ethics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partner;
