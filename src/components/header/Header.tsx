import { Box } from "@mui/material";
import React from "react";
import InteractiveIcon from "@/components/header/interactive-icon/InteractiveIcon";

export default function Header() {
  return (
    <Box className="header-container min-h-20 h-20 border-b-2">
      <Box className="header-wrapper h-full">
        <InteractiveIcon></InteractiveIcon>
      </Box>
    </Box>
  );
}
