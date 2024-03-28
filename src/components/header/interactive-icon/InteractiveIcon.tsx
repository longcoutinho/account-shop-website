import { Box, Button, Divider, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteUserInfo, getUserInfo } from "@/constants/FnCommon";
import { HTTP_STATUS, PageURL } from "@/constants";
import { User } from "@/interfaces";
import { getUserBalance } from "@/services/userService";
import Image from "next/image";
import { isUndefined } from "lodash";
import DropDownUser from "../dropdownUser";

export default function InteractiveIcon() {
  const [balance, setBalance] = useState("0");
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
    handleClose();
  };
  return (
    <Box className="w-fit">
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
            <Image src={"/img/avatar.png"} alt="ava" width={40} height={40} />
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
