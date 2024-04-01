import React from "react";
import Head from "next/head";
import { PAGE_TITLE } from "@/constants";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import NotificationWrapper from "@/components/NotificationWrapper";
import Footer from "@/components/Footer";
import SlideBanner from "@/components/home/SlideBanner";

const Page = (props: any) => {
  const { children, title, admin, menuIndex, cartAmount: number } = props;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Head>
        <title>{PAGE_TITLE.PREFIX + title}</title>
      </Head>
      <NotificationWrapper />
      <Box className="w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <Header></Header>
        <SlideBanner />
        <div className=" max-w-[1280px] mx-auto w-full mt-6 mb-20  px-[5%]">
          {children}
        </div>
        <Footer />
      </Box>
    </div>
  );
};

export default Page;
