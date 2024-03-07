import { Box, Divider, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { faUser, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { deleteUserInfo, getUserInfo, redirectUrl } from "@/constants/FnCommon";
import { HTTP_STATUS, PageURL } from "@/constants";
import { COMMON_TEXT } from "@/constants/message";
import { User } from "@/interfaces";
import { getUserBalance } from "@/services/userService";
import { getAllItem } from "@/services/item";
import Image from "next/image";

export default function InteractiveIcon() {
  const [balance, setBalance] = useState("0");
  useEffect(() => {
    const user = getUserInfo();
    if (user !== null) {
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

  const router = useRouter();
  //cart
  const AmountUser = () => {
    return (
      <Box className="flex flex-row items-center">
        <FontAwesomeIcon
          id="cart-shopping-iconn"
          icon={faCoins}
        ></FontAwesomeIcon>
        <p className="ml-2 text-blue-500">{balance}đ</p>
      </Box>
    );
  };

  const UserIcon = () => {
    const goToLoginPage = () => {
      redirectUrl(router, PageURL.LOGIN, null);
    };

    const DropDownUser = () => {
      const [user, setUser] = useState<User | null>(null);
      useEffect(() => {
        setUser(getUserInfo());
      }, []);

      const signOut = () => {
        setUser(null);
        deleteUserInfo();
      };

      if (user == null) {
        return (
          <Box className="user-info-hover-container">
            <Box className="user-info-element">
              <Link href={PageURL.LOGIN}>{COMMON_TEXT.LOGIN}</Link>
              <p> &nbsp;/&nbsp;</p>
              <Link href={PageURL.SIGNUP}>{COMMON_TEXT.SIGNUP}</Link>
            </Box>
          </Box>
        );
      } else {
        return (
          <Box className="user-info-hover-container">
            <Box className="user-info-element">
              <Link href={"/profile"}>My profile</Link>
            </Box>
            <Box className="user-info-element">
              <p>Edit profile</p>
            </Box>
            <Box className="user-info-element" onClick={signOut}>
              <p>Sign out</p>
            </Box>
          </Box>
        );
      }
    };

    return (
      <Box className="user-icon-wrapper">
        <Image
          src={"/img/avatar.png"}
          alt="ava"
          width={40}
          height={40}
          onClick={() => goToLoginPage()}
        />
        <DropDownUser></DropDownUser>
      </Box>
    );
  };

  return (
    <Box className="interactive-icon-wrapper">
      <AmountUser></AmountUser>
      <UserIcon></UserIcon>
    </Box>
  );
}
