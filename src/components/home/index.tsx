import { PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination, A11y, Autoplay } from "swiper";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  BackHandTwoTone,
  CreditCardTwoTone,
  ShoppingCartTwoTone,
} from "@mui/icons-material";
import Link from "next/link";

const slideData = [
  { key: 0, redirectURL: "", imageURL: "/img/banner.png" },
  { key: 1, redirectURL: "", imageURL: "/img/banner-2.jpg" },
  { key: 2, redirectURL: "", imageURL: "/img/banner.png" },
  { key: 3, redirectURL: "", imageURL: "/img/banner-2.jpg" },
  { key: 4, redirectURL: "", imageURL: "/img/banner.png" },
];
export default function HomePage() {
  const route = useRouter();

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={1}>
      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true, type: "bullets" }}
      >
        {slideData?.map((e) => (
          <SwiperSlide onClick={() => route.push(e.redirectURL)} key={e.key}>
            <Image
              src={e.imageURL}
              alt="banner-home"
              width={1000}
              height={430}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex shadow-xl rounded w-fit mt-4 mx-auto">
        <Link
          href={PageURL.BUY_CARD}
          className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
        >
          <ShoppingCartTwoTone color="warning" fontSize="large" />
          <p>Mua thẻ nạp</p>
        </Link>
        <Link
          href={PageURL.RECHARGE}
          className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
        >
          <BackHandTwoTone color="primary" fontSize="large" />
          <p>Nạp thủ công</p>
        </Link>
        <Link
          href={PageURL.RECHARGE_AUTO}
          className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
        >
          <CreditCardTwoTone color="success" fontSize="large" />
          <p>Nạp tự động</p>
        </Link>
      </div>
    </Page>
  );
}
