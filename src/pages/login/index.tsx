import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "@/services/userService";
import { HTTP_STATUS, PageURL } from "@/constants";
import { useRouter } from "next/router";
import { redirectUrl, saveUserToSessionStorage } from "@/constants/FnCommon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Login() {
  const { t } = useTranslation("common");
  const route = useRouter();
  const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notify, setNotify] = useState("");
    const [notifyColor, setNotifyColor] = useState("");
    const Notify = (props: any) => {
      return (
        <Box className="notify-text-container">
          <p style={{ color: props.textColor }} className="notify-text">
            {props.text}
          </p>
        </Box>
      );
    };

    const doSignIn = async () => {
      const request = {
        username: username,
        password: password,
      };
      signIn(request)
        .then((res) => {
          if (res.status == HTTP_STATUS.OK) {
            saveUserToSessionStorage(res.data);
            redirectUrl(route, PageURL.HOME, null);
          } else {
            setNotify(res.response.data);
            setNotifyColor("red");
          }
        })
        .catch((err) => {
          setNotify(err?.response?.data);
          setNotifyColor("red");
        });
    };

    return (
      <Box className="login-wrapper py-10 px-4 sm:px-12 sm:py-12">
        <Box className="title-container">
          <p>{t("LOGIN")}</p>
          <p>{t("LOGIN_DES")}</p>
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
          <Notify textColor={notifyColor} text={notify}></Notify>
          <Box className="forgot-password-container">
            <Box className="remember-me-container">
              <input type={"checkbox"} />
              <label>{t("KEEP_LOGIN")}</label>
            </Box>
            <Box className="forgot-pass-container">
              <Link href={"/signup"}>{t("FORGOR_PASSWORD")}?</Link>
            </Box>
          </Box>
        </Box>
        <Box className="login-button-container flex mt-4 flex-col-reverse gap-2 sm:flex-row">
          <Box className="sign-up-container">
            <p>{t("DONT_HAVE_ACCOUNT")}?</p>
            <Link href={PageURL.SIGNUP}>{t("SIGNUP")}</Link>
            <p>{t("HERE")}</p>
          </Box>
          <Button onClick={doSignIn} className="login-button">
            {t("LOGIN")}
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box className="login-container" sx={{ width: "100vw" }}>
      <LoginForm></LoginForm>
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
