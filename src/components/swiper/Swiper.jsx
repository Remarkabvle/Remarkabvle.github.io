"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles

import { Autoplay } from "swiper/modules";
import Img from "./swilerImg/Img";
import Link from "next/link";

const BrandSwiper = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 }, // 1 slide for mobile screens
          640: { slidesPerView: 3 }, // 2 slides for small screens
          768: { slidesPerView: 4 }, // 3 slides for tablets
          1024: { slidesPerView: 5 }, // 4 slides for medium screens
          1280: { slidesPerView: 6 }, // 6 slides for large screens
        }}
        className="brand-swiper"
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center cursor-pointer items-center  bg-white rounded-[16px] border border-[1.5px] py-9 px-[20px] mb-4"
          >
            <a href="https://sharh.commeta.uz/en" target="_blank">
              <Img className="object-contain" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
