import { NumberInput } from "@/components/NumberInput";
import { HTTP_STATUS, LOCALSTORAGE_KEY, PageURL } from "@/constants";
import {
  ICardsRes,
  IItemCardRes,
  IPriceItem,
} from "@/interfaces/response/rechargeGameCard";
import { setBuyNow, setItemInCart, setOrderDetail } from "@/redux/slices/cart";
import { AppDispatch } from "@/redux/store";
import {
  requestGetItemCard,
  requestGetPriceItem,
} from "@/services/rechargeGameCard";
import { Button, FormControl, NativeSelect } from "@mui/material";
import { isUndefined } from "lodash";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export interface ITotalPriceWithPayment {
  totalPrice: number;
  paymentCode: string;
}

interface IProps {
  id?: string;
  card?: ICardsRes;
}
const RightInfo = ({ id, card }: IProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [amount, setAmount] = useState<number | null>(1);
  const [item, setItem] = useState<IItemCardRes>();
  const [listItems, setListItems] = useState<IItemCardRes[]>([]);
  const [priceItem, setPriceItem] = useState<IPriceItem>();
  const dispatch = useDispatch<AppDispatch>();
  const [currency, setCurrency] = useState<string>("");
  const [displayPrice, setDisplayPrice] = useState(0);
  const [listPriceWithPaymentCode, setListPriceWithPaymentCode] = useState<
    ITotalPriceWithPayment[]
  >([]);

  useEffect(() => {
    handleGetListItemCard();
    setCurrency("EP");
  }, []);

  useEffect(() => {
    if (listItems) handleGetListPriceItem(listItems[0]);
  }, [listItems]);

  useEffect(() => {
    if (currency && priceItem) {
      const itemDefault = priceItem?.listFees?.find(
        (e: any) => e?.currency.toString() === currency
      );
      if (itemDefault && amount) {
        setDisplayPrice(itemDefault?.price * amount);
      } else if (isUndefined(itemDefault)) {
        setDisplayPrice(priceItem?.listFees[0]?.price);
        setCurrency(
          priceItem?.listFees[0]?.currency
            ? priceItem?.listFees[0]?.currency
            : "EP"
        );
      }
    }
  }, [currency, priceItem, amount]);

  useEffect(() => {
    const data = priceItem?.listFees?.map((e) => {
      return {
        paymentCode: e?.currency,
        totalPrice: amount ? e?.price * amount : 0,
      };
    }) as ITotalPriceWithPayment[];
    setListPriceWithPaymentCode(data);
  }, [priceItem, amount]);

  const handleGetListItemCard = async () => {
    try {
      if (id) {
        const res = await requestGetItemCard(id);
        if (res?.status === HTTP_STATUS.OK) {
          setListItems(res?.data);
          setItem(res?.data[0]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleGetListPriceItem = async (item: IItemCardRes) => {
    try {
      if (item) {
        const res = await requestGetPriceItem(item?.id);
        if (res?.status === HTTP_STATUS.OK) {
          setPriceItem(res?.data);
          const itemDefault = res?.data?.listFees?.find(
            (e: any) => e?.currency.toString() === currency
          );
          if (itemDefault && amount) {
            setDisplayPrice(itemDefault?.price * amount);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddtoCart = () => {
    if (amount && item?.id) {
      const oldData = JSON.parse(
        (localStorage.getItem(LOCALSTORAGE_KEY.SHOPPING_CART) as string) ?? "[]"
      );
      const data = {
        item: card,
        cardId: item?.id,
        cardName: item?.name,
        price: listPriceWithPaymentCode,
        amount: amount,
      };
      let newData: any;
      if (oldData) {
        newData = oldData
          .filter(
            (e: any) =>
              e.item && e.item.id === card?.id && e.cardId === item?.id
          )
          .map((e: any) => ({ ...e, amount: e.amount + amount }));
      } else {
        newData = [];
      }
      const array =
        newData.length > 0
          ? [
              ...oldData.filter((e: any) => !(newData[0].cardId === e.cardId)),
              ...newData,
            ]
          : [...oldData, data];
      localStorage.setItem(
        LOCALSTORAGE_KEY.SHOPPING_CART,
        `${JSON.stringify(array)}`
      );
      dispatch(setItemInCart(array?.length));
      handleReset();
    }
  };
  const handleClickBuyNow = () => {
    if (amount && item?.id) {
      const data = {
        item: card,
        cardId: item?.id,
        cardName: item?.name,
        price: listPriceWithPaymentCode,
        amount: amount || 0,
      };
      dispatch(setBuyNow(true));
      dispatch(setOrderDetail([data]));
      router?.push(PageURL.PAYMENT);
    }
  };

  const handleReset = () => {
    setItem(undefined);
    setAmount(1);
  };

  const handleChangeCurrency = (event: any) => {
    setCurrency(event.target.value);
    const selected = priceItem?.listFees?.find(
      (e) => e?.currency?.toString() === event.target.value?.toString()
    );
    if (selected && amount) {
      setDisplayPrice(selected?.price * amount);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 xs:gap-6">
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div>
          <p>{t("CATEGORY")}</p>
          <div className="flex gap-2 xs:gap-4 flex-wrap mt-3">
            {listItems &&
              listItems?.map((e) => (
                <p
                  key={e.id}
                  onClick={() => {
                    setItem(e);
                    handleGetListPriceItem(e);
                  }}
                  className={`border rounded-lg px-2 xs:px-4 py-2 text-xs xs:text-base w-16 xs:w-32 text-center cursor-pointer hover:border-orange-300 ${
                    item?.id === e?.id
                      ? "border-orange-300 text-orange-600"
                      : "border-gray-400"
                  }`}
                >
                  {e?.name}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className=" w-full border rounded-2xl shadow-md flex flex-col p-3 xs:p-6 gap-6 h-[106px] justify-center">
          <div className="flex items-center justify-between">
            <p>{t("QUANTITY")}</p>
            <NumberInput
              defaultValue={1}
              value={amount}
              min={1}
              onChange={(event, newValue) => setAmount(newValue)}
            />
          </div>
        </div>
        <div className=" w-full border rounded-2xl shadow-md flex flex-col p-3 xs:p-6 gap-6 h-[106px] justify-center">
          <div className="flex items-center justify-between">
            <p>{t("PRICE")}</p>
            <div className="flex items-center gap-3">
              <p>{displayPrice?.toLocaleString("vi-VN")}</p>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <NativeSelect
                  defaultValue={currency}
                  onChange={handleChangeCurrency}
                  inputProps={{
                    name: "currency",
                    id: "uncontrolled-native",
                  }}
                >
                  {priceItem?.listFees &&
                    priceItem?.listFees?.map((e) => (
                      <option value={e?.currency}>{e?.currency}</option>
                    ))}
                </NativeSelect>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex gap-6">
        <Button
          onClick={handleAddtoCart}
          style={{ border: "1px solid #0e1522" }}
          className={`w-full  !text-[#052d75] !min-h-11 !mt-4 !capitalize
               ${
                 amount && item?.id
                   ? "!cursor-pointer !hover:bg-[#052d751f]"
                   : "!cursor-not-allowed !opacity-50 !hover:bg-white"
               }
            `}
        >
          {t("ADD_TO_CART")}
        </Button>
        <Button
          onClick={handleClickBuyNow}
          className={`w-full !bg-[#052d75] !text-white !min-h-11 !mt-4 !capitalize ${
            amount && item?.id
              ? "!cursor-pointer !hover:bg-[#30466b]"
              : "!cursor-not-allowed !opacity-50 !hover:bg-[#052d75] !hover:text-white"
          }`}
        >
          {t("BUY_NOW")}
        </Button>
      </div>
    </div>
  );
};
export default RightInfo;
