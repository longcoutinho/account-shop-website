import { Box, Button, Drawer } from "@mui/material";
import React from "react";
import InteractiveIcon from "@/components/header/interactive-icon/InteractiveIcon";
import HorizonHeader from "../horiHeader/HorizonHeader";
import { MenuOutlined } from "@mui/icons-material";
import Link from "next/link";
import { PageURL } from "@/constants";
import { useRouter } from "next/router";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box className="header-container min-h-20 h-20 border-b-2 fixed top-0 z-50">
      <Box className="header-wrapper h-full px-6">
        <div className="flex gap-6 cursor-pointer">
          <MenuOutlined onClick={toggleDrawer(true)} />
          <p
            onClick={() => router.push(PageURL.HOME)}
            className="text-xl font-semibold"
          >
            LOGO
          </p>
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <HorizonHeader />
        </Drawer>
        <InteractiveIcon></InteractiveIcon>
      </Box>
    </Box>
  );
}
