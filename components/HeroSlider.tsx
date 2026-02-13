"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/Button";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="w-full bg-silver py-12 md:py-16 lg:py-24">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {[1, 2].map((slide) => (
          <SwiperSlide key={slide}>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 md:px-10 lg:px-20 pb-12">
              <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-dark leading-tight">
                  Lessons and insights <br />
                  <span className="text-primary">from 8 years</span>
                </h1>
                <p className="text-sm md:text-base text-grey max-w-md mx-auto lg:mx-0">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button className="px-8 py-3 text-base">Register</Button>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-62.5 h-65 md:w-87.5 md:h-91.25 lg:w-97.75 lg:h-101.75">
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

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: rgb(var(--primary)) !important;
        }
        .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </div>
  );
}
