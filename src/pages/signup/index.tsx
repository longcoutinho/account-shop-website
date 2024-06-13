import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../constants/message";
import { COMMON_TEXT, SIGNUP_PAGE } from "@/constants/message";
import { isNullOrEmpty, isValidLength } from "@/constants/FnCommon";
import { signUp } from "@/services/userService";
import { HTTP_STATUS, PageURL } from "@/constants";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function SignUp() {
  const { t } = useTranslation("common");

  const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notify, setNotify] = useState("");
    const [notifyColor, setNotifyColor] = useState("");
    const routers = useRouter();

    useEffect(() => {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setNotify("");
    }, []);

    const Notify = (props: any) => {
      return (
        <Box className="notify-text-container">
          <p style={{ color: props.textColor }} className="notify-text">
            {props.text}
          </p>
        </Box>
      );
    };

    const doSignUp = async () => {
      if (isNullOrEmpty(username)) setNotify(SIGNUP_PAGE.EMPTY_USERNAME);
      else if (isNullOrEmpty(email)) setNotify(SIGNUP_PAGE.EMPTY_EMAIL);
      else if (!isValidLength(username, 6, 12))
        setNotify(SIGNUP_PAGE.INVALID_LENGTH_USERNAME);
      else if (isNullOrEmpty(password)) setNotify(SIGNUP_PAGE.EMPTY_PASSWORD);
      else if (!isValidLength(password, 6, 24))
        setNotify(SIGNUP_PAGE.INVALID_LENGTH_PASSWORD);
      else if (isNullOrEmpty(confirmPassword))
        setNotify(SIGNUP_PAGE.EMPTY_CONFIRM_PASSWORD);
      else if (password != confirmPassword)
        setNotify(SIGNUP_PAGE.INVALID_CONFIRM_PASSWORD);
      else {
        const request = {
          username: username,
          password: password,
          email: email,
        };
        signUp(request)
          .then((res) => {
            if (res.status == HTTP_STATUS.OK) {
              setNotify(COMMON_TEXT.SUCCESS);
              routers.push(PageURL.LOGIN);
              setNotifyColor("green");
            } else {
              setNotify(res?.response?.data);
              setNotifyColor("red");
            }
          })
          .catch((err) => {
            setNotify(err?.response?.data);
            setNotifyColor("red");
          });
      }
    };

    return (
      <Box className="signup-wrapper py-10 px-4 sm:px-12 sm:py-12">
        <Box className="title-container">
          <p>{t("SIGNUP")}</p>
          <p>{t("SIGNUP_DES")}</p>
        </Box>
        <Box className="form-container">
          <Box className="input-container">
            <label>{t("USER_NAME")}</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.currentTarget.value);
              }}
              placeholder={t("USER_NAME")}
            ></input>
          </Box>
          <Box className="input-container">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              placeholder="Email"
            ></input>
          </Box>
          <Box className="input-container">
            <label>{t("PASSWORD")}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              placeholder={t("ENTER_PASSWORD")}
            ></input>
          </Box>
          <Box className="input-container">
            <label>{t("CONFIRM_PASSWORD")}</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.currentTarget.value);
              }}
              placeholder={t("CONFIRM_PASSWORD")}
            ></input>
          </Box>
          <Notify textColor={notifyColor} text={notify}></Notify>
        </Box>
        <Box className="signup-button-container flex mt-2 flex-col-reverse gap-2 sm:flex-row">
          <Box className="sign-up-container">
            <p>{t("ALREADY_HAVE_ACCOUNT")}?</p>
            <Link href={"login"}>{t("LOGIN")}</Link>
            <p>{t("HERE")}</p>
          </Box>
          <Button onClick={doSignUp} className="signup-button">
            {t("SIGNUP")}
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box className="signup-container" sx={{ width: "100vw" }}>
      <SignUpForm></SignUpForm>
    </Box>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
