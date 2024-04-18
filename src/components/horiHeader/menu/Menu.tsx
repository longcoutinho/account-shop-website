import React from "react";
import { Box } from "@mui/material";
import { menuBar } from "@/constants/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const listMenu = menuBar.map((menuElement, index) => (
    <Box key={index} className="menu-element-wrapper">
      <div
        onClick={() => router.push(menuElement?.url)}
        className={`menu-element-content ${
          menuElement?.url === router.pathname && "menu-element-content-hover"
        }`}
      >
        <FontAwesomeIcon
          icon={menuElement.icon}
          className="icon-menu"
        ></FontAwesomeIcon>
        <Box>
          <p>{menuElement.title}</p>
        </Box>
      </div>
    </Box>
  ));
  return <Box className="big-menu">{listMenu}</Box>;
}
