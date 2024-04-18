import { Box } from "@mui/material";
import React from "react";
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/horiHeader/menu/Menu";
import SwitchLanguage from "../SwitchLang/SwitchLanguage";

export default function HorizonHeader() {
  return (
    <Box className="hori-header-container">
      <Logo></Logo>
      <SwitchLanguage />
      <Menu></Menu>
    </Box>
  );
}
