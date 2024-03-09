import { Frontend, HTTP_STATUS, PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import "@/constants/FnCommon";
import React, { useState } from "react";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { createTopUpRequest } from "@/services/topup";
import { redirectUrl } from "@/constants/FnCommon";
import Image from "next/image";
interface IContent {
  text?: string;
  method?: string;
}
export default function TopUpComponent() {
  const [amount, setAmount] = useState<string | undefined>("");
  const router = useRouter();

  const createRequest = () => {
    createTopUpRequest(amount)
      .then((res) => {
        if (res.status == HTTP_STATUS.OK) {
          redirectUrl(router, res.data.checkoutUrl, null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
      <Box className="bg-white rounded-2xl box-shadow p-5">
        <Box className=" flex gap-4 justify-center">
          <TextField
            className="w-2/3"
            label="Số tiền nạp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></TextField>
        </Box>
        <Box className="w-full flex justify-center mt-4">
          <Button
            onClick={createRequest}
            variant="contained"
            className="bg-blue-500 text-white "
          >
            Tạo yêu cầu nạp tiền
          </Button>
        </Box>
      </Box>
    </Page>
  );
}
