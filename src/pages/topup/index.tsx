import { Frontend, HTTP_STATUS, PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import "@/constants/FnCommon";
import React, { useState } from "react";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { createTopUpRequest } from "@/services/topup";
import { redirectUrl } from "@/constants/FnCommon";
import Image from "next/image";

export default function TopUpComponent() {
  const [amount, setAmount] = useState<string | undefined>();
  const [method, setMethod] = useState<string | undefined>();
  const router = useRouter();

  const createRequest = () => {
    createTopUpRequest(amount, method)
      .then((res) => {
        if (res.status == HTTP_STATUS.OK) {
          redirectUrl(router, Frontend.LIST_TOP_UP_PAGE, null);
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
            className="w-1/4"
            id="outlined-select-currency"
            select
            label="Phương thức nạp"
            defaultValue=""
            onChange={(e) => setMethod(e.target.value)}
          >
            <MenuItem value={1}>Internet Banking</MenuItem>
            <MenuItem value={2}>MoMo</MenuItem>
          </TextField>
          <TextField
            className="w-2/3"
            id="outlined-select-currency"
            label="Số tiền nạp"
            defaultValue=""
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
      {Number(method) === 1 && amount ? (
        <Box className="flex justify-center flex-col items-center gap-3 bg-white rounded-2xl box-shadow pt-4 max-w-[650px] mx-auto mb-6">
          <Image
            src={"https://muaviaxmdt.com/img/vcb_logo.90c917e1.png"}
            alt="logo-ib"
            width={175}
            height={80}
          />
          <Box className="text-center text-[#8094ae]">
            <p>
              Tên tài khoản:{" "}
              <span className="text-[#0d6efd]">PHAN PHUNG HUYNH TAI</span>
            </p>
            <p>
              Số tài khoản: <span className="text-[#0d6efd]">3899666666</span>{" "}
            </p>
            <p>
              Ngân hàng:{" "}
              <span className="text-[#0d6efd]"> Ngân hàng Vietcombank</span>
            </p>
            <p>
              Nội dung chuyển:{" "}
              <span className="text-[#0d6efd]"> Pay mai123 1006827</span>
            </p>
          </Box>
          <Image
            src={
              "https://img.vietqr.io/image/vietcombank-3899666666-compact2.jpg?amount=10000%5C&addInfo=Pay%20mai123%201006827&accountName=PHAN%20PHUNG%20HUYNH%20TAI"
            }
            alt="qr"
            width={380}
            height={400}
          />
          <p className="text-xl text-[#dc3545] font-bold underline text-center px-6">
            Hoàn tất chuyển tiền. Vui lòng đợi 1~5 phút để được xác nhận giao
            dịch
          </p>
          <p className=" text-base text-[#dc3545] text-center px-6 font-semibold">
            Lưu ý: Từ 22h - 24h không nên nạp tiền vì thời gian này VCB sẽ bị
            delay. Nạp từ 22h - 24h vui lòng nạp tiền qua MOMO hoặc liên hệ
            ADMIN để nạp.
          </p>

          <p className=" text-base text-white text-center px-6 bg-[#0dcaf0] py-2 rounded-b-2xl">
            Chú ý: Bạn phải gửi đúng nội dung chuyển khoản như hướng dẫn. Nếu
            quá 5 - 10 phút tiền vẫn chưa được cộng vào tài khoản vui lòng Chat
            Facebook: Shop Seeding hoặc gọi 081.345.9999 để được hỗ trợ.
          </p>
        </Box>
      ) : Number(method) === 2 && amount ? (
        <Box className="flex justify-center flex-col items-center gap-3 bg-white rounded-2xl box-shadow pt-4 max-w-[650px] mx-auto mb-6">
          <Image
            src={"https://muaviaxmdt.com/img/MoMo_Logo.f82d519e.png"}
            alt="logo-ib"
            width={80}
            height={80}
          />
          <Box className="text-center text-[#8094ae]">
            <p>
              Địa chỉ ví:{" "}
              <span className="text-[#0d6efd]">PHAN PHUNG HUYNH TAI</span>
            </p>
            <p>
              SĐT: <span className="text-[#0d6efd]">0813459999</span>{" "}
            </p>
            <p>
              Nội dung: <span className="text-[#0d6efd]"> mai123 1006827</span>
            </p>
          </Box>
          <Image
            src={"https://muaviaxmdt.com/img/momo_qr.9729326d.jpg"}
            alt="qr"
            width={380}
            height={400}
          />

          <p className=" text-base text-[#dc3545] text-center px-6 font-semibold my-4">
            Lưu ý: Từ sau 22h - 24h khuyến nghị sử dụng nạp MOMO và liên hệ
            Admin để được cộng tiền sớm nhất.
          </p>
          <p className=" text-base text-white text-center px-6 bg-[#0dcaf0] py-2">
            Chú ý: Bạn phải gửi đúng nội dung chuyển khoản như hướng dẫn. Nếu
            quá 5 - 10 phút tiền vẫn chưa được cộng vào tài khoản vui lòng Chat
            Facebook: Shop Seeding hoặc gọi 081.345.9999 để được hỗ trợ.
          </p>
        </Box>
      ) : (
        ""
      )}
    </Page>
  );
}
