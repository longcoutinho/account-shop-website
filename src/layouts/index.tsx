import React, { useEffect, useState } from "react";
import Head from "next/head";
import { PAGE_TITLE, PageURL } from "@/constants";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import NotificationWrapper from "@/components/NotificationWrapper";
import Footer from "@/components/Footer";
import SlideBanner from "@/components/home/SlideBanner";
import { useRouter } from "next/router";

const Page = (props: any) => {
  const {
    children,
    title,
    admin,
    menuIndex,
    cartAmount: number,
    isHome,
  } = props;
  const router = useRouter();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Head>
        <title>{PAGE_TITLE.PREFIX + title}</title>
      </Head>
      <NotificationWrapper />
      <Box className="w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <Header></Header>
        <div className=" max-w-[1280px] mx-auto w-full mt-28 mb-14  px-[5%] min-h-[calc(100vh-78px-96px)]">
          {children}
        </div>
        <Footer />
      </Box>
    </div>
  );
};

export default Page;
