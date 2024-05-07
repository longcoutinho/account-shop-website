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
        <meta
          name="facebook-domain-verification"
          content="53vm0p6q4svrormxgulw8etr59u84l"
        />
      </Head>
      <NotificationWrapper />
      <Box className="w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <Header></Header>
        <div className="min-h-[calc(100vh-78px)] mt-[78px]">
          <div className=" max-w-[1960px] mx-auto w-full pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] pb-8">
            {children}
          </div>
          <Footer />
        </div>
      </Box>
    </div>
  );
};

export default Page;
