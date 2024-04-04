import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination, A11y, Autoplay } from "swiper";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

const slideData = [
  { key: 0, redirectURL: "", imageURL: "/img/banner.png" },
  { key: 1, redirectURL: "", imageURL: "/img/banner-2.jpg" },
  { key: 2, redirectURL: "", imageURL: "/img/banner.png" },
  { key: 3, redirectURL: "", imageURL: "/img/banner-2.jpg" },
  { key: 4, redirectURL: "", imageURL: "/img/banner.png" },
];
export default function SlideBanner() {
  const route = useRouter();

  return (
    <Swiper
      className="w-screen !overflow-visible select-none mt-[76px] min-h-52 sm:min-h-fit"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true, type: "bullets" }}
    >
      {slideData &&
        slideData?.map((e) => (
          <SwiperSlide onClick={() => route.push(e.redirectURL)} key={e.key}>
            <Image
              src={e.imageURL}
              alt="banner-home"
              width={1000}
              height={500}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
