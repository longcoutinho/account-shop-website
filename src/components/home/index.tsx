import { PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import {
  BackHandTwoTone,
  CreditCardTwoTone,
  ShoppingCartTwoTone,
} from "@mui/icons-material";
import Link from "next/link";
import ListGames from "./ListGame";
import ListCards from "./ListCard";
import Head from "next/head";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import NotificationWrapper from "@/components/NotificationWrapper";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import SlideBanner from "./SlideBanner";
export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Head>
        <title>{PAGE_TITLE.PREFIX + PAGE_TITLE.HOME}</title>
      </Head>
      <NotificationWrapper />
      <Box className="w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <Header></Header>
        <SlideBanner />
        <div className="min-h-[calc(100vh-78px)]">
          <div className=" max-w-[1280px] mx-auto w-full pt-4 sm:pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] ">
            <div className="flex shadow-xl rounded w-fit mt-4 mx-auto">
              <Link
                href={PageURL.BUY_CARD}
                className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
              >
                <ShoppingCartTwoTone
                  color="warning"
                  className=" w-7 h-7 sm:w-10 sm:h-10"
                />
                <p className="text-xs sm:text-base">Mua thẻ nạp</p>
              </Link>
              <Link
                href={PageURL.RECHARGE}
                className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
              >
                <BackHandTwoTone
                  color="primary"
                  className=" w-7 h-7 sm:w-10 sm:h-10"
                />
                <p className="text-xs sm:text-base">Nạp thủ công</p>
              </Link>
              <Link
                href={PageURL.RECHARGE_AUTO}
                className="flex justify-center flex-col items-center gap-1 py-2 px-6 text-gray-400 border-b-2 hover:border-blue-600 hover:text-orange-500 hover:bg-gray-100"
              >
                <CreditCardTwoTone
                  color="success"
                  className=" w-7 h-7 sm:w-10 sm:h-10"
                />
                <p className="text-xs sm:text-base">Nạp tự động</p>
              </Link>
            </div>
            <ListGames />
            <ListCards />
          </div>
          <Footer />
        </div>
      </Box>
    </div>
  );
}
