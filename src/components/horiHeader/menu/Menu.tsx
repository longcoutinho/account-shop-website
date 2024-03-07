import React, { useEffect, useState } from "react";
import { Box, Link } from "@mui/material";
import { menuBar } from "@/constants/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  getDisplayMenu,
  saveDisplayMenuToSessionStorage,
} from "@/constants/FnCommon";
import { useRouter } from "next/router";

export default function Menu() {
  const [displayMatrix, setDisplayMatrix] = useState<number[]>([]);
  const routes = useRouter();

  const switchDisplayComponent = (ind: number) => {
    let newMatrix = displayMatrix;
    newMatrix[ind] = 1 - newMatrix[ind];
    setDisplayMatrix([...newMatrix]);
    saveDisplayMenuToSessionStorage(newMatrix);
  };

  const listMenu = menuBar.map((menuElement, index) => (
    <Box key={index} className="menu-element-wrapper">
      <Box
        onClick={() => switchDisplayComponent(index)}
        className="menu-element-content"
      >
        <FontAwesomeIcon
          icon={menuElement.icon}
          className="icon-menu"
        ></FontAwesomeIcon>
        <Box>
          <p>{menuElement.title}</p>
        </Box>
      </Box>
      {menuElement.child?.map((menuChild, index2) => (
        <Box
          className={`menu-element-child-container ${
            menuChild.url === routes.pathname ? "bg-[#52bed6]" : ""
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
