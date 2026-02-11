"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";


import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="w-full bg-silver py-16 flex items-center justify-center">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="max-w-6xl mx-auto h-100"
      >
        <SwiperSlide>
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h1 className="text-h1 text-black">
                Lessons and insights <br />
                <span className="text-primary">from 8 years</span>
              </h1>
              <p className="body-2 text-grey">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-shade-1 transition-all">
                Register
              </button>
            </div>

            <div>
              <Image
                src="/hero-illustration.svg"
                alt="Illustration"
                width={391}
                height={407}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h1 className="text-h1 text-black">
                Lessons and insights <br />
                <span className="text-primary">from 8 years</span>
              </h1>
              <p className="body-2 text-grey">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-shade-1 transition-all">
                Register
              </button>
            </div>

            <div>
               <Image
                src="/hero-illustration.svg"
                alt="Illustration"
                width={391}
                height={407}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: rgb(var(--primary)) !important;
        }
      `}</style>
    </div>
  );
}
