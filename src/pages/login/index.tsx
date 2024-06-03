import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "@/services/userService";
import { HTTP_STATUS, PageURL } from "@/constants";
import { useRouter } from "next/router";
import { redirectUrl, saveUserToSessionStorage } from "@/constants/FnCommon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import FacebookLogin from "react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import TwitterLogin from "react-twitter-login";
import { ENVIROMENTS } from "@/utils/login";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";
import { signIn as signInX } from "next-auth/react";
import { LOGIN_METHOD } from "@/constants/Login";

interface ILogin {
  loginMethod?: LOGIN_METHOD;
  accessToken?: string | number;
}

export default function Login() {
  const { t } = useTranslation("common");
  const route = useRouter();
  const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notify, setNotify] = useState("");
    const [notifyColor, setNotifyColor] = useState("");
    const [loginWithFB, setLoginWithFB] = useState<boolean>(false);

    const Notify = (props: any) => {
      return (
        <Box className="notify-text-container">
          <p style={{ color: props.textColor }} className="notify-text">
            {props.text}
          </p>
        </Box>
      );
    };

    const doSignIn = async ({ loginMethod, accessToken }: ILogin) => {
      const request = {
        loginMethod: loginMethod,
        accessToken: accessToken,
        username: username,
        password: password,
      };
      signIn(request)
        .then((res) => {
          if (res.status == HTTP_STATUS.OK) {
            console.log(res);
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
    const responseFacebook = (response: any) => {
      console.log(response);
    };

    const handleLoginWithGG = useGoogleLogin({
      onSuccess: (tokenResponse) =>
        doSignIn({
          loginMethod: LOGIN_METHOD.GOOGLE,
          accessToken: tokenResponse.access_token,
        }),
      onError: (er) => console.log(er),
    });

    const handleLoginWithX = (err: any, data: any) => {
      try {
        console.log(err, data);
      } catch (e) {
        console.log(e);
      }
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
          <Button
            onClick={() => doSignIn({ loginMethod: LOGIN_METHOD.DIRECT })}
            className="login-button"
          >
            {t("LOGIN")}
          </Button>
        </Box>
        <div className="flex gap-2 items-center flex-col mt-4 ">
          <p>Other login methods</p>
          <div className="flex gap-4">
            <FacebookLogin
              appId={ENVIROMENTS.FB_APP_ID}
              autoLoad={loginWithFB}
              textButton=""
              fields="name,email,picture"
              callback={responseFacebook}
              onClick={() => setLoginWithFB(true)}
              cssClass="w-fit h-fit flex items-center"
              icon={
                <img
                  alt=""
                  id="logo"
                  src="/img/fb.png"
                  height={50}
                  width={50}
                />
              }
            />
            <Image
              onClick={() => handleLoginWithGG()}
              src={"/img/gg.png"}
              alt="logo-gg"
              width={50}
              height={50}
              className=" cursor-pointer"
            />
            <Image
              onClick={() =>
                signInX("twitter", { callbackUrl: "https://elitagame.com" })
              }
              src={"/img/x.png"}
              alt="logo-gg"
              width={50}
              height={50}
              className=" cursor-pointer"
            />
            <TelegramLoginButton
              botName="game_card_bot"
              dataOnauth={(user: TelegramUser) =>
                doSignIn({
                  loginMethod: LOGIN_METHOD.TELEGRAM,
                  accessToken: user.id,
                })
              }
            />
          </div>
        </div>
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
