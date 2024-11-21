import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "animate.css";
import Icon from "../Icon/Icon"

const BannerSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState("animate__fadeIn");


  useEffect(() => {
    fetch("/sliders.json")
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error fetching slider data:", error));
  }, []);

  const handleSlideChange = () => {
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];
    setCurrentAnimation(randomAnimation);
  };

  return (
    <div
      style={{ animationDuration: "3s" }}
      className={`w-full flex justify-center items-center mx-auto text-[#22085e] py-16 px-4 animate__animated ${currentAnimation}`}
    >
      <Swiper
        pagination={{ dynamicBullets: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full z-0"
        onSlideChange={handleSlideChange} // Trigger animation on slide change
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full font-bold flex flex-col lg:flex-row justify-center items-center p-4">
              {/* Moving Icon */}
              <Icon />

              {/* Text Content */}
              <div
                className={`w-full lg:w-1/2 text-center lg:text-left text-3xl lg:text-5xl flex flex-col pl-12 gap-8 animate__animated ${currentAnimation}`}
              >
                <h2>{slide.title}</h2>
                <p className="text-base font-normal">{slide.description}</p>
                <div>
                  <Link
                    className="btn btn-primary text-md text-white"
                    to={slide.button.link}
                  >
                    {slide.button.text}
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div
                className={`w-full lg:w-1/2 p-4 h-[20%] animate__animated ${currentAnimation}`}
              >
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
