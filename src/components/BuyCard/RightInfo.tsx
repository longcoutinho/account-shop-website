import { NumberInput } from "@/components/NumberInput";
import { HTTP_STATUS, LOCALSTORAGE_KEY, PageURL } from "@/constants";
import {
  ICardsRes,
  IItemCardRes,
} from "@/interfaces/response/rechargeGameCard";
import { setBuyNow, setItemInCart, setOrderDetail } from "@/redux/slices/cart";
import { AppDispatch } from "@/redux/store";
import { requestGetItemCard } from "@/services/rechargeGameCard";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface ICardValue {
  value: number;
  id: number;
}

interface IProps {
  id?: string;
  card?: ICardsRes;
}
const RightInfo = ({ id, card }: IProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [amount, setAmount] = useState<number | null>(0);
  const [cardValue, setCardValue] = useState<ICardValue>({ value: 0, id: 0 });
  const [listItems, setListItems] = useState<IItemCardRes[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    handleGetListItemCard();
  }, []);

  const handleGetListItemCard = async () => {
    try {
      if (id) {
        const res = await requestGetItemCard(id);
        if (res?.status === HTTP_STATUS.OK) {
          setListItems(res?.data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddtoCart = () => {
    if (
      amount &&
      cardValue &&
      cardValue?.value &&
      cardValue.value * amount > 0
    ) {
      const oldData = JSON.parse(
        (localStorage.getItem(LOCALSTORAGE_KEY.SHOPPING_CART) as string) ?? "[]"
      );

      const data = {
        item: card,
        cardId: cardValue.id,
        price: cardValue.value,
        amount: amount,
      };

      let newData: any;
      if (oldData) {
        newData = oldData
          .filter(
            (e: any) =>
              e.item && e.item.id === card?.id && e.cardId === cardValue.id
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
    if (
      amount &&
      cardValue &&
      cardValue?.value &&
      cardValue.value * amount > 0
    ) {
      const data = {
        item: card,
        cardId: cardValue.id,
        price: cardValue.value,
        amount: amount || 0,
      };
      dispatch(setBuyNow(true));
      dispatch(setOrderDetail([data]));
      router?.push(PageURL.PAYMENT);
    }
  };

  const handleReset = () => {
    setCardValue({ value: 0, id: 0 });
    setAmount(0);
  };

  return (
    <div className="w-full mg:w-1/2 flex flex-col gap-3 xs:gap-6">
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div>
          <p>{t("CATEGORY")}</p>
          <div className="flex gap-2 xs:gap-4 flex-wrap mt-3">
            {listItems &&
              listItems?.map((e) => (
                <p
                  key={e.id}
                  onClick={() => setCardValue({ value: e.price, id: e.id })}
                  className={`border rounded-lg px-2 xs:px-4 py-2 text-xs xs:text-base w-16 xs:w-24 text-center cursor-pointer hover:border-orange-300 ${
                    cardValue?.id === e?.id
                      ? "border-orange-300 text-orange-600"
                      : "border-gray-400"
                  }`}
                >
                  {e.price.toLocaleString("vi-VN")}đ
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
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
      {/* <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div className="flex items-center justify-between">
          <p>{t("REMAINING")}</p>
          <p>{item?.remaining + " " + t("PRODUCT")}</p>
        </div>
      </div> */}

      <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
        <div className="flex justify-between items-center">
          <p>{t("PRICE")}</p>
          <p className="text-red-500 font-semibold text-xl">
            {amount && cardValue && cardValue?.value
              ? (cardValue.value * amount)?.toLocaleString("vi-VN")
              : 0}
            đ
          </p>
          {/* <FormControl className="w-full">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleChangeMethod}
            >
              {productDetail?.feeList &&
                productDetail?.feeList?.map((e) => (
                  <div className="flex items-center justify-between w-full">
                    <FormControlLabel
                      value={e?.paymentCode}
                      control={<Radio />}
                      label={e?.paymentCode}
                    />
                    <p>{e?.price?.toLocaleString("vi-VN") + " VND"}</p>
                  </div>
                ))}
            </RadioGroup>
          </FormControl> */}
        </div>
      </div>
      <div className=" w-full flex gap-6">
        <Button
          onClick={handleAddtoCart}
          style={{ border: "1px solid #0e1522" }}
          className={`w-full  !text-[#052d75] !min-h-11 !mt-4 !capitalize
               ${
                 amount &&
                 cardValue &&
                 cardValue?.value &&
                 cardValue.value * amount > 0
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
            amount &&
            cardValue &&
            cardValue?.value &&
            cardValue.value * amount > 0
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
