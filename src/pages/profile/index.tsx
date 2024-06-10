import { HTTP_STATUS, PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { User } from "@/interfaces";
import { getUserInfo } from "@/constants/FnCommon";
import { useRouter } from "next/router";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getUserBalance } from "@/services/userService";

export default function Profile() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = getUserInfo();
    if (user !== null) {
      getUserBalance(user.id)
        .then((res) => {
          if (res.status == HTTP_STATUS.OK) {
            setUser(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={1}>
      <Box className="profile-page-container h-full">
        <p className=" text-2xl font-semibold mb-6">{t("ACCOUNT_DETAIL")}</p>
        <Box className="profile-page-wrapper w-full md:w-3/4 lg:w-3/5">
          <div className="w-fit flex gap-7 flex-col">
            <Image
              src={"/img/avatar-default.svg"}
              alt="ava"
              width={140}
              height={140}
              className="mx-auto bg-white rounded-full border border-gray-400 p-3"
            />
            <div className="flex gap-3 w-full">
              <p className="w-36">E-Point: </p>
              <p className="text-red-500 font-medium">{user?.balance} EP</p>
            </div>
            <div className="flex gap-3 w-full">
              <p className="w-36">{t("USER_NAME")}: </p>
              <p className="text-red-500 font-medium">{user?.username}</p>
            </div>
            <div className="flex gap-3 w-full">
              <p className="w-36">Email: </p>
              <p className="text-red-500 font-medium">{user?.email}</p>
            </div>
            <Button
              onClick={() => {
                router.push(PageURL.HOME);
              }}
              className={`w-[200px] bg-[#052d75] text-white min-h-11 mt-4 mx-auto cursor-pointer hover:bg-[#30466b] capitalize`}
            >
              {t("RETURN_HOME")}
            </Button>
          </div>
        </Box>
      </Box>
    </Page>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
