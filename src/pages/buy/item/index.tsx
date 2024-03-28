import { Box, Button, CircularProgress } from "@mui/material";
import "@/constants/FnCommon";
import React, { useEffect, useState } from "react";
import { getItemById } from "@/services/item";
import { Backend, HTTP_STATUS, PAGE_TITLE, PageURL } from "@/constants";
import Page from "@/layouts";
import { useRouter } from "next/router";
import { getUserInfo } from "@/constants/FnCommon";
import { Order } from "@/interfaces/request";
import { createOrder } from "@/services/sale-order";
import { toast } from "react-toastify";
import { NumberInput } from "@/components/NumberInput";

export default function DetailItem(props: any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState<number | null>(1);
  const [listImageIds, setListImageIds] = useState<string[]>([]);
  const [openBuyComponent, setOpenBuyComponent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [remaining, setRemaining] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id !== undefined) {
      renderListItem();
    }
    const user = getUserInfo();
    if (user !== null) {
      setUserId(user.id);
    }
  }, [router.query.id]);

  const closeBuyComponent = () => {
    setOpenBuyComponent(false);
  };

  const renderListItem = () => {
    getItemById(router.query.id)
      .then((res) => {
        if (res.status == HTTP_STATUS.OK) {
          setName(res.data.name);
          setPrice(res.data.price);
          setListImageIds(res.data.listImageIds);
          setRemaining(res?.data?.amount);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buyItem = () => {
    if (remaining > 0) {
      setLoading(true);
      const request: Order = {
        amount: amount || 0,
        userId: userId,
        itemId: router.query.id as string,
      };
      createOrder(request)
        .then((res) => {
          if (res.status === HTTP_STATUS.OK) {
            setLoading(false);
            closeBuyComponent();
            router.push("/sale-order/list/");
          } else {
            toast.error("Mua không thành công");
            setLoading(false);
          }
        })
        .catch((err) => {
          toast.error("Mua không thành công");
          setLoading(false);
          console.log(err);
        });
    }
  };
  return (
    <Page title={PAGE_TITLE.ALL_PRODUCTS} menuIndex={1}>
      <Box className="flex flex-row justify-center items-center">
        <Box className="w-full flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-10">
          <p className=" text-3xl font-semibold ">Mua sản phẩm</p>
          <Box className="w-full min-w-40 flex flex-col gap-6 items-center rounded-sm">
            <Box className=" h-full">
              <img
                className="h-52 object-cover"
                src={
                  Backend.IMAGE_SERVICE +
                  "/" +
                  (listImageIds.length !== 0 ? listImageIds[0].toString() : "")
                }
              />
            </Box>
            <Box className="h-full p-2 flex flex-col items-center justify-between gap-6">
              <p className="text-blue-500 font-bold text-center text-3xl">
                {name}
              </p>
              <NumberInput
                defaultValue={1}
                value={amount}
                min={1}
                aria-label="Quantity Input"
                onChange={(event, newValue) => setAmount(newValue)}
              />
              {remaining <= 0 && (
                <p className="text-red-500 font-semibold text-lg">
                  Sản phẩm hết hàng
                </p>
              )}
              <p className="text-black text-center text-bold mt-2">
                Đơn giá:{" "}
                {amount && price
                  ? (amount * Number(price)).toLocaleString("en-US")
                  : 0}{" "}
                đ
              </p>
              <Box className="flex gap-28">
                <Button
                  variant="outlined"
                  className={`min-w-28 mt-2 !text-white ${
                    remaining <= 0
                      ? "!cursor-not-allowed !pointer-events-auto bg-blue-400 hover:bg-blue-400"
                      : "hover:bg-blue-400 bg-blue-600"
                  }`}
                  onClick={buyItem}
                  disabled={remaining <= 0}
                >
                  {loading && (
                    <CircularProgress
                      size={20}
                      color="inherit"
                      className="mr-2"
                    />
                  )}
                  <p className="whitespace-nowrap "> Xác nhận</p>
                </Button>
                <Button
                  variant="outlined"
                  className="min-w-28 mt-2 hover:bg-gray-400 bg-gray-600 text-white"
                  onClick={() => router.push(PageURL.BUY)}
                >
                  Hủy
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
