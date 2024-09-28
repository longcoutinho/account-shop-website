import React from "react";
import { Box } from "@mui/material";
import { menuBar } from "@/constants/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

export default function Menu() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const listMenu = menuBar.map((menuElement, index) => (
    <Box key={index} className="menu-element-wrapper">
      <div
        onClick={() => menuElement?.url && router.push(menuElement?.url)}
        className={`menu-element-content ${
          menuElement?.url === router.pathname && "menu-element-content-hover"
        }`}
      >
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={menuElement.icon}
            className="icon-menu"
          ></FontAwesomeIcon>
          <Box>
            <p>{t(menuElement.title)}</p>
          </Box>
        </div>
        {!menuElement?.url && <KeyboardArrowDownOutlined />}
      </div>
      {/* {menuElement?.child &&
        menuElement?.child?.map((menuChild, index2) => (
          <Box
            className={`menu-element-child-container mb-1 ${
              menuChild.url === router.pathname ? "bg-[#1f458b7c]" : ""
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
