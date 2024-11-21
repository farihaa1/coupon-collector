import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/sliders.json")
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error fetching slider data:", error));
  }, []);

  return (
    <div className="w-full flex justify-center items-center mx-auto mt-8 text-[#22085e] py-12 ">
      <Swiper
        pagination={{ dynamicBullets: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full font-bold flex flex-col lg:flex-row justify-center items-center p-4">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left text-4xl lg:text-6xl flex flex-col pl-8 gap-8">
                <h2>{slide.title}</h2>
                <p className="text-lg font-normal ">{slide.description}</p>
                <div>
                  <Link
                    className="btn btn-primary text-lg text-white"
                    to={slide.button.link}
                  >
                    {slide.button.text}
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 p-4 h-[20%]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
