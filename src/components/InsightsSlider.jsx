import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { useEffect, useState } from "react";
import http from "../service/http";
import { baseURL } from "../service/api";

export default function InsightsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [insights, setInsights] = useState([]);
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

      setInsights(AllData?.insights || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-16 md:py-28 text-center overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-300 mb-10 md:mb-16">
        Insights for our clients
      </h2>

      {/* Slider */}
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}

        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}

        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}

        className="max-w-6xl mx-auto px-4"
      >
        {insights.map((img, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-50 blur-[1px]"
                }`}
              >
                <img
                  src={`${baseURL}/${img.media_url}`}
                  alt="insight"
                  className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Indicator */}
      <div className="relative mt-16 flex justify-center items-center">
        
        {/* Curve Line */}
        <div className="absolute w-[250px] sm:w-[400px] md:w-[600px] h-[120px] sm:h-[180px] md:h-[230px] border-t border-gray-500 rounded-t-full"></div>

        {/* Number Circle */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black border border-gray-400 rounded-full flex items-center justify-center text-white text-lg sm:text-xl z-10">
          {String(activeIndex + 1).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}