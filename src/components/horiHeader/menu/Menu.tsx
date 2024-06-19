import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { menuBar } from "@/constants/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ArrowDropDown, KeyboardArrowDownOutlined } from "@mui/icons-material";

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
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {menuElement?.child &&
        menuElement?.child?.map((menuChild, index2) => (
          <Box
            className={`menu-element-child-container ${
              menuChild.url === router.pathname ? "bg-[#52bed6]" : ""
            }`}
            key={index2}
            sx={{ display: "flex" }}
          >
            <Link href={menuChild.url}>{menuChild.title}</Link>
          </Box>
        ))}
    </Box>
  ));
  return <Box className="big-menu">{listMenu}</Box>;
}
