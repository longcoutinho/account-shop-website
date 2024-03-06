import { Box, Divider } from "@mui/material";
import React from "react";
import { redirectUrl } from "@/constants/FnCommon";
import { PageURL } from "@/constants";
import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();
  return (
    <Box
      onClick={() => redirectUrl(router, PageURL.HOME)}
      className="logo-wrapper"
    >
      <Box className="logo-container">
        <img alt="" id="logo" src="/img/fb.png" height={48} width={48} />
        <p className="text-xl font-bold">MUAVIAVN</p>
      </Box>
      <hr className="w-full mt-4 border-[#3f3636e6]" />
    </Box>
  );
}
