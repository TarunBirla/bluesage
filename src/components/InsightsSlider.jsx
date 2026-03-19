import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";
import http from "../service/http";
import { baseURL } from "../service/api";

export default function InsightsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = ["/img.png", "/img.png", "/img.png", "/img.png", "/img.png"];

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
      console.log("AllData", AllData);

      setInsights(AllData?.insights);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-black py-28 text-center overflow-hidden">
      <h2 className="text-5xl font-semibold text-gray-300 mb-16">
        Insights for our clients
      </h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ important
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        className="max-w-5xl mx-auto"
      >
        {insights.map((img, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-40 blur-[1px]"
                }`}
              >
                <img
                  src={`${baseURL}/${img.media_url}`}
                  className="w-[1200px] h-[280px] "
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative mt-30 flex justify-center items-center">
        {/* Curve line */}
        <div className="absolute w-[600px] h-[230px] border-t border-gray-500 rounded-t-full"></div>

        {/* Number circle */}
        <div className="w-26 h-16 bg-black border border-gray-400 rounded-full flex items-center justify-center text-white text-xl z-10">
          {String(activeIndex + 1).padStart(2, "0")}
        </div>
      </div>

      {/* bottom circle indicator */}
      {/* <div className="mt-16 flex justify-center">
        <div className="w-16 h-16 border border-gray-500 rounded-full flex items-center justify-center text-white text-xl">
          01
        </div>
      </div> */}
    </section>
  );
}
