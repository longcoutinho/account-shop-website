import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IPaymentMethodRes } from "@/interfaces/response/rechargeGameCard";
import {
  requestCreateOrder,
  requestGetListPaymentMethod,
} from "@/services/rechargeGameCard";
import { HTTP_STATUS, LOCALSTORAGE_KEY, PageURL } from "@/constants";
import { Button, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export interface IListOrder {
  item: {
    id: number;
    name: string;
    image: string;
  };
  price: number;
  amount: number;
}
const Payment = () => {
  const router = useRouter();
  const { buyNow, orderDetail } = useSelector((state: RootState) => state.cart);
  const [listOder, setListOrder] = useState<IListOrder[]>();
  const [listPaymentMethod, setListPaymentMethod] = useState<
    IPaymentMethodRes[]
  >([]);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethodRes>();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    renderListPaymentMethod();
    const list: IListOrder[] = buyNow
      ? orderDetail
      : JSON.parse(
          localStorage.getItem(LOCALSTORAGE_KEY.SHOPPING_CART) as string
        );
    if (list && list?.length > 0) {
      let totalCost = 0;
      list?.map((o: IListOrder) => {
        totalCost += o?.amount * o?.price;
      });
      setTotalPrice(totalCost);
    }
    setListOrder(list);
  }, [buyNow, orderDetail]);

  const renderListPaymentMethod = async () => {
    try {
      const res = await requestGetListPaymentMethod();
      if (res?.status === HTTP_STATUS.OK) {
        setListPaymentMethod(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleBuyCard = async () => {
    try {
      if (paymentMethod) {
        setLoading(true);
        const res = await requestCreateOrder({
          orderList: listOder?.map((o) => {
            return { itemId: o?.item?.id, amount: o.amount };
          }),
          price: totalPrice,
          method: paymentMethod?.id,
        });

        if (res?.status === HTTP_STATUS.OK) {
          setLoading(false);
          toast.success("Mua thành công");
          if (!buyNow) {
            localStorage.removeItem(LOCALSTORAGE_KEY.SHOPPING_CART);
          }
          router.push(res?.data?.hosted_url);
        } else {
          setLoading(false);
          toast.error("Mua không thành công");
        }
      }
    } catch {
      setLoading(false);
      toast.error("Mua không thành công");
    }
  };

  return (
    <div className="flex flex-col w-full gap-4">
      {listOder && listOder?.length > 0 ? (
        <>
          <div className=" flex flex-col w-full">
            <div className="mt-4">
              {listOder &&
                listOder?.map((o, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-gray-200 border px-4 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={o?.item?.image}
                        alt="order"
                        width={90}
                        height={50}
                        className="h-[50px]"
                      />
                      <p>{o?.item?.name}</p>
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                      <p className="">
                        Số lượng:{" "}
                        <span className=" font-semibold">{o.amount}</span>
                      </p>
                      <p>
                        Giá tiền:{" "}
                        <span className=" font-semibold">
                          {(o.price * o.amount).toLocaleString("vi-VN")}đ
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <p className="text-right w-full text-xl font-semibold mt-4">
              Tổng tiền:{" "}
              <span className=" font-semibold text-2xl text-red-500">
                {totalPrice.toLocaleString("vi-VN")}đ
              </span>
            </p>
          </div>
          <div className=" w-full">
            <p className="w-fit py-2 px-4 my-4 mx-auto">
              Chọn phương thức thanh toán:
            </p>
            <div className=" w-full flex justify-center flex-wrap">
              {listPaymentMethod?.map((g) => (
                <div
                  key={g.id}
                  onClick={() => {
                    setPaymentMethod(g);
                  }}
                  className={` p-3 max-w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ${
                    g.id === paymentMethod?.id
                      ? " border-[#f3a44a] shadow-md border-2"
                      : " border-[#1b1b1b1f] border-2"
                  }`}
                >
                  <Image
                    src={g.image}
                    alt="card"
                    width={90}
                    height={50}
                    className=" mx-auto h-[50px]"
                  />
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-4">
              <Button
                onClick={handleBuyCard}
                className={`w-[120px] mx-auto bg-[#05296b] text-white min-h-11 mt-4 capitalize ${
                  paymentMethod
                    ? "cursor-pointer hover:bg-[#30466b]"
                    : "cursor-not-allowed opacity-50 hover:bg-[#05296b] hover:text-white"
                }`}
              >
                {loading && (
                  <CircularProgress
                    size={20}
                    color="inherit"
                    className="mr-2"
                  />
                )}
                Thanh toán
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto text-4xl font-bold border border-gray-500 border-dashed px-20 py-32 w-fit mt-6">
            Giỏ hàng trống
          </div>
          <Button
            onClick={() => {
              router.push(PageURL.BUY_CARD);
            }}
            className={`w-[200px] bg-[#05296b] text-white min-h-11 mt-4 mx-auto cursor-pointer hover:bg-[#30466b] capitalize`}
          >
            Tiếp tục mua sắm
          </Button>
        </>
      )}
    </div>
  );
};
export default Payment;
