"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SmallBlogSlider() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);

  const blogs = [
    {
      img: "/b1.png",
      date: "Apr. 14th, 2025",
      category: "Technology",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/b1.png",
      date: "Apr. 14th, 2025",
      category: "Technology",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/b1.png",
      date: "Apr. 14th, 2025",
      category: "Technology",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <section className="bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={2.2}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setIsBeginning(swiper.isBeginning)}
          breakpoints={{
            768: { slidesPerView: 2.4 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog, i) => (
            <SwiperSlide key={i}>
              <div className="relative rounded-[30px] overflow-hidden">
                {/* Image */}
                <img src={blog.img} className="w-full h-[260px] object-cover" />

                {/* Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent "></div>

                {/* Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs opacity-80 mb-1">
                    {blog.date} | {blog.category}
                  </p>

                  <h3 className="text-sm font-semibold leading-snug">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[120px] bg-gradient-to-l from-black to-transparent z-10 hidden md:block"></div>

        {/* PREV BUTTON */}
        {!isBeginning && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* NEXT BUTTON */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
