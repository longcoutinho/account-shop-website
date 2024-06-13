import { PAGE_TITLE } from "@/constants";
import ListGames from "./ListGame";
import Head from "next/head";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import NotificationWrapper from "@/components/NotificationWrapper";
import Footer from "@/components/Footer";
import SlideBanner from "./SlideBanner";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();
  console.log(status, session);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Head>
        <title>{PAGE_TITLE.PREFIX + PAGE_TITLE.HOME}</title>
      </Head>
      <NotificationWrapper />
      <Box className="w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden text-black">
        <Header></Header>
        <SlideBanner />
        <div className="min-h-[calc(100vh-78px)]">
          <div className=" max-w-[1960px] mx-auto w-full pt-4 sm:pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-223px)] lg:min-h-[calc(100%-198px)] ">
            <ListGames />
          </div>
          <Footer />
        </div>
      </Box>
    </div>
  );
}
