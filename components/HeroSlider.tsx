"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/Button";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    // ФОН НА ВСЮ ШИРИНУ
    <div className="w-full bg-silver">
      
      {/* ЦЕНТРИРОВАННЫЙ КОНТЕНТ */}
      <div className="max-w-360 mx-auto lg:px-36">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {[1, 2].map((slide) => (
            <SwiperSlide key={slide}>
              <div className="flex flex-col-reverse lg:flex-row items-center">

                {/* ТЕКСТ */}
                <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
                  <h1 className="text-dark">
                    Lessons and insights <br />
                    <span className="text-primary">from 8 years</span>
                  </h1>

                  <p className=" text-grey body-2">
                    Where to grow your business as a photographer: site or social
                    media?
                  </p>

                  <div className="flex justify-center lg:justify-start">
                    <Button className="px-8 py-3 text-base">
                      Register
                    </Button>
                  </div>
                </div>

                {/* КАРТИНКА */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative w-65 h-65 md:w-90 md:h-90 lg:w-97.75 lg:h-101.75">
                    <Image
                      src="/hero-illustration.svg"
                      alt="Illustration"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* СТИЛИ SWIPER */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: rgb(var(--primary)) !important;
        }
        .swiper-pagination {
         position: relative !important;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
