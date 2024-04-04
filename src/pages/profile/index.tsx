import { PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { User } from "@/interfaces";
import { getUserInfo } from "@/constants/FnCommon";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={1}>
      <Box className="profile-page-container h-full">
        <p className=" text-2xl font-semibold mb-6">Thông tin tài khoản</p>
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
              <p className="w-28">Họ và tên: </p>
              <p className="text-red-500 font-medium">
                {user?.fullName || "Nguyễn Thị Phương mai"}
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <p className="w-28">Username: </p>
              <p className="text-red-500 font-medium">{user?.username}</p>
            </div>
            <div className="flex gap-3 w-full">
              <p className="w-28">Email: </p>
              <p className="text-red-500 font-medium">
                {user?.email || "maitho3101@gmail.com"}
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <p className="w-28">Số điện thoại: </p>
              <p className="text-red-500 font-medium">
                {user?.phoneNumber || "0816928986"}
              </p>
            </div>
            <Button
              onClick={() => {
                router.push(PageURL.HOME);
              }}
              className={`w-[200px] bg-[#052d75] text-white min-h-11 mt-4 mx-auto cursor-pointer hover:bg-[#30466b] capitalize`}
            >
              Trở về trang chủ
            </Button>
          </div>
        </Box>
      </Box>
    </Page>
  );
}
