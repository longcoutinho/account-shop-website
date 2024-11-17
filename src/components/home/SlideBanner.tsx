import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination, A11y, Autoplay } from "swiper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getListBanner } from "@/services/product";
import { Backend, HTTP_STATUS } from "@/constants";

interface ISliceData {
  id: number;
  url: string;
  idx: number;
}
export default function SlideBanner() {
  const [slideData, setSlideData] = useState<ISliceData[]>([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = () => {
    getListBanner()
      .then((res) => {
        if (res.status == HTTP_STATUS.OK) {
          setSlideData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Swiper
      className="w-screen !overflow-visible select-none mt-[76px] max-h-[70dvh] min-h-52 sm:min-h-fit"
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
          <SwiperSlide key={e.id}>
            <Image
              src={Backend.BASE_URL + e.url}
              alt="banner-home"
              width={1000}
              height={500}
              className="w-full h-full max-h-[500px]"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
