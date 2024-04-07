import { Box } from "@mui/material";
import React from "react";
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/horiHeader/menu/Menu";
import SwitchLanguage from "../SwitchLang/SwitchLanguage";
import { useMediaQuery } from "react-responsive";

export default function HorizonHeader() {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  return (
    <Box className="hori-header-container">
      <Logo></Logo>
      {isMobile && <SwitchLanguage />}
      <Menu></Menu>
    </Box>
  );
}
