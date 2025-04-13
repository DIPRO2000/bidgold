import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const slides = [
  {
    title: "UEFA Champions League 2024",
    subtitle: "Manchester United vs Real Madrid",
    image: "./public/loginimg.svg",
  },
  {
    title: "Spin & Win Big!",
    subtitle: "Live Casino awaits you",
    image: "./public/2361367.jpg",
  },
  {
    title: "Bet Live Anytime",
    subtitle: "Instant odds, instant thrill",
    image: "./public/ben-lambert-bYtIpXnzsQM-unsplash.jpg",
  },
  {
    title: "Poker Nights",
    subtitle: "Go all in and conquer",
    image: "./public/jonathan-petersson-a6N685qLsHQ-unsplash.jpg",
  },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[40vh] md:h-[90vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />

            {/* More prominent green haze with stronger opacity */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-green-900 opacity-90"></div>

            {/* Overlay for light dimming (subtle) */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Text Content at bottom */}
            <div className="absolute bottom-0 w-full py-4 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-2xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="text-base md:text-xl mt-2">{slide.subtitle}</p>
              <button className="mt-6 w-full px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md shadow-md transition-all">
                REGISTER
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
