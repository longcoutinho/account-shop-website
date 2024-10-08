import { Box, Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteUserInfo } from "@/constants/FnCommon";
import { LOCALSTORAGE_KEY, PageURL } from "@/constants";
import Image from "next/image";
import { isUndefined } from "lodash";
import DropDownUser from "../dropdownUser";
import { AddBoxOutlined, ShoppingCart } from "@mui/icons-material";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IListOrder } from "@/components/Payment";
import { setBuyNow, setItemInCart } from "@/redux/slices/cart";
import { useTranslation } from "next-i18next";
import { setIsLogin } from "@/redux/slices/user";
import ModalDepositEP from "@/components/Modals/ModalDepositEP";

export default function InteractiveIcon() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { itemInCart, buyNow } = useSelector((state: RootState) => state.cart);
  const { user, loading, isLogin } = useSelector(
    (state: RootState) => state.user
  );
  const [isOpenDeposit, setIsOpenDeposit] = useState(false);

  useEffect(() => {
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
    deleteUserInfo();
    dispatch(setIsLogin(false));
    router.push(PageURL.HOME);
    handleClose();
  };
  const handleGoToCart = () => {
    dispatch(setBuyNow(false));
    router.push(PageURL.PAYMENT);
  };
  const handleClickDepositEP = () => {
    setIsOpenDeposit(true);
  };
  return (
    <Box className="w-fit flex justify-center items-center">
      <>
        {loading ? (
          <Skeleton
            variant="rounded"
            width={150}
            height={36}
            animation="wave"
          />
        ) : (
          <>
            {" "}
            {isLogin && !isUndefined(user) ? (
              <>
                <div
                  className="relative cursor-pointer mr-5"
                  onClick={handleGoToCart}
                >
                  <ShoppingCart className=" w-6 h-6 sm:w-9 sm:h-9" />
                  {itemInCart > 0 && (
                    <p className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-[10px] sm:text-xs p-[2px] min-w-4 sm:min-w-5 text-center">
                      {itemInCart > 99 ? "99+" : itemInCart}
                    </p>
                  )}
                </div>
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
                    width={32}
                    height={32}
                    className="bg-white rounded-full p-1  w-8 h-8"
                  />
                  <p className="text-white">
                    {Number(user?.balance)?.toLocaleString("vi-VN") || 0} EP
                  </p>
                </Button>
                <Button onClick={handleClickDepositEP} className="ml-2">
                  <AddBoxOutlined
                    sx={{ color: "white", width: "32px", height: "32px" }}
                  />
                </Button>

                {open && (
                  <DropDownUser
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    handleLogout={handleLogout}
                    handleDeposit={handleClickDepositEP}
                  />
                )}
              </>
            ) : (
              <div className="flex gap-5">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push(PageURL.SIGNUP)}
                >
                  {t("SIGNUP")}
                </span>
                <span>/</span>
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push(PageURL.LOGIN)}
                >
                  {t("LOGIN")}
                </span>
              </div>
            )}
          </>
        )}
      </>
      {isOpenDeposit && (
        <ModalDepositEP
          open={isOpenDeposit}
          onClose={() => setIsOpenDeposit(false)}
        />
      )}
    </Box>
  );
}
