import { Box, Drawer } from "@mui/material";
import React, { useEffect } from "react";
import HorizonHeader from "../horiHeader/HorizonHeader";
import { MenuOutlined } from "@mui/icons-material";
import { PageURL } from "@/constants";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchListPaymentMethod } from "@/redux/slices/payment";
const InteractiveIcon = dynamic(
  () => import("@/components/header/interactive-icon/InteractiveIcon"),
  {
    ssr: false,
  }
);

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchListPaymentMethod());
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box className="header-container min-h-[76px] h-20 fixed top-0 z-50">
      <Box className="header-wrapper h-full px-6">
        <div className="flex gap-6 cursor-pointer items-center">
          <MenuOutlined onClick={toggleDrawer(true)} />
          <img
            className="hidden sm:block"
            onClick={() => router.push(PageURL.HOME)}
            alt=""
            id="logo"
            src="/img/logo1.png"
            height={200}
            width={200}
          />
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <HorizonHeader />
        </Drawer>
        <InteractiveIcon></InteractiveIcon>
      </Box>
    </Box>
  );
}
