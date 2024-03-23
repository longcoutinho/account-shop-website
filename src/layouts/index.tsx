import React from "react";
import Head from "next/head";
import { PAGE_TITLE } from "@/constants";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import NotificationWrapper from "@/components/NotificationWrapper";

const Page = (props: any) => {
  const { children, title, admin, menuIndex, cartAmount: number } = props;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Head>
        <title>{PAGE_TITLE.PREFIX + title}</title>
      </Head>
      <NotificationWrapper />
      <Box className="w-full flex flex-col h-screen overflow-auto">
        <Header></Header>
        {children}
      </Box>
    </div>
  );
};

export default Page;
