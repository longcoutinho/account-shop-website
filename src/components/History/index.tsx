import React, { useEffect, useState } from "react";
import { IPaymentMethodRes } from "@/interfaces/response/rechargeGameCard";
import { requestGetListPaymentMethod } from "@/services/rechargeGameCard";
import { HTTP_STATUS, LOCALSTORAGE_KEY } from "@/constants";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AllSaleOrder from "../sale-order/SaleOrder";

export interface IListOrder {
  item: {
    id: number;
    name: string;
    image: string;
  };

  cardId: number;
  price: number;
  amount: number;
}
const HistoryList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { buyNow, orderDetail } = useSelector((state: RootState) => state.cart);
  const [listOder, setListOrder] = useState<IListOrder[]>();
  const [listPaymentMethod, setListPaymentMethod] = useState<
    IPaymentMethodRes[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

  return (
    <div className="flex flex-col w-full gap-4">
      <AllSaleOrder />
    </div>
  );
};
export default HistoryList;
