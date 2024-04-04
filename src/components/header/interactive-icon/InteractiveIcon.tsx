import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteUserInfo, getUserInfo } from "@/constants/FnCommon";
import { HTTP_STATUS, LOCALSTORAGE_KEY, PageURL } from "@/constants";
import { User } from "@/interfaces";
import { getUserBalance } from "@/services/userService";
import Image from "next/image";
import { isUndefined } from "lodash";
import DropDownUser from "../dropdownUser";
import { ShoppingCart } from "@mui/icons-material";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IListOrder } from "@/components/Payment";
import { setBuyNow, setItemInCart } from "@/redux/slices/cart";

export default function InteractiveIcon() {
  const dispatch = useDispatch();

  const [balance, setBalance] = useState("0");
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { itemInCart, buyNow } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const user = getUserInfo();
    if (user !== null) {
      setUser(user);
      getUserBalance(user.id)
        .then((res) => {
          if (res.status == HTTP_STATUS.OK) {
            setBalance(res.data.balance);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const list: IListOrder[] = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY.SHOPPING_CART) as string
    );
    dispatch(setItemInCart(list && list?.length > 0 ? list?.length : 0));
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setUser(undefined);
    deleteUserInfo();
    router.push(PageURL.HOME);
    handleClose();
  };
  const handleGoToCart = () => {
    dispatch(setBuyNow(false));
    router.push(PageURL.PAYMENT);
  };
  return (
    <Box className="w-fit flex justify-center items-center">
      <div className="relative cursor-pointer mr-5" onClick={handleGoToCart}>
        <ShoppingCart className=" w-6 h-6 sm:w-9 sm:h-9" />
        {itemInCart > 0 && (
          <p className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-[10px] sm:text-xs p-[2px] min-w-4 sm:min-w-5 text-center">
            {itemInCart > 99 ? "99+" : itemInCart}
          </p>
        )}
      </div>
      {isUndefined(user) ? (
        <div className="flex gap-5">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => router.push(PageURL.SIGNUP)}
          >
            Sign up
          </span>
          <span>/</span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => router.push(PageURL.LOGIN)}
          >
            Login
          </span>
        </div>
      ) : (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="flex gap-2"
          >
            <Image
              src={"/img/avatar-default.svg"}
              alt="ava"
              width={40}
              height={40}
              className="bg-white rounded-full p-1  w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="text-white">{user?.username}</p>
          </Button>
          {open && (
            <DropDownUser
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
              handleLogout={handleLogout}
            />
          )}
        </>
      )}
    </Box>
  );
}
