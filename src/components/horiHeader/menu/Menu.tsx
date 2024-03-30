import React, { useEffect, useState } from "react";
import { Box, Link } from "@mui/material";
import { menuBar } from "@/constants/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const listMenu = menuBar.map((menuElement, index) => (
    <Box key={index} className="menu-element-wrapper">
      <Link
        href={menuElement?.url}
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
      </Link>
      {/* {menuElement.child?.map((menuChild, index2) => (
        <Box
          className={`menu-element-child-container ${
            menuChild.url === routes.pathname ? "bg-[#52bed6]" : ""
          }`}
          key={index2}
          sx={{ display: "flex" }}
        >
          <Link href={menuChild.url}>{menuChild.title}</Link>
        </Box>
      ))} */}
    </Box>
  ));
  return <Box className="big-menu">{listMenu}</Box>;
}
