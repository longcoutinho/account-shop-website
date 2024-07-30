import { NumberInput } from "@/components/NumberInput";
import { HTTP_STATUS, LOCALSTORAGE_KEY, PageURL } from "@/constants";
import {
  ICardsRes,
  IItemCardRes,
  IPriceItem,
} from "@/interfaces/response/rechargeGameCard";
import { setBuyNow, setItemInCart, setOrderDetail } from "@/redux/slices/cart";
import { AppDispatch, RootState } from "@/redux/store";
import {
  requestGetItemCard,
  requestGetPriceItem,
} from "@/services/rechargeGameCard";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const [amount, setAmount] = useState<number | null>(1);
  const [cardId, setCardId] = useState<number | undefined>();
  const [listItems, setListItems] = useState<IItemCardRes[]>([]);
  const [priceItem, setPriceItem] = useState<IPriceItem>();
  const dispatch = useDispatch<AppDispatch>();
  const [method, setMethod] = useState("");
  const { paymentMethods } = useSelector((state: RootState) => state.payment);

  useEffect(() => {
    setAmount(1);
    handleGetListItemCard();
  }, []);

  useEffect(() => {
    handleGetListPriceItem();
  }, [cardId]);

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
  const handleGetListPriceItem = async () => {
    try {
      if (cardId) {
        const res = await requestGetPriceItem(cardId);
        console.log(res);
        if (res?.status === HTTP_STATUS.OK) {
          setPriceItem(res?.data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddtoCart = () => {
    if (amount && cardId && method) {
      const oldData = JSON.parse(
        (localStorage.getItem(LOCALSTORAGE_KEY.SHOPPING_CART) as string) ?? "[]"
      );
      const data = {
        item: card,
        cardId: cardId,
        price: 0,
        amount: amount,
      };
      let newData: any;
      if (oldData) {
        newData = oldData
          .filter(
            (e: any) => e.item && e.item.id === card?.id && e.cardId === cardId
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
    if (amount && cardId && method) {
      const data = {
        item: card,
        cardId: cardId,
        price: 0,
        amount: amount || 0,
      };
      dispatch(setBuyNow(true));
      dispatch(setOrderDetail([data]));
      router?.push(PageURL.PAYMENT);
    }
  };

  const handleReset = () => {
    setCardId(undefined);
    setAmount(1);
  };

  const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod((event.target as HTMLInputElement).value);
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
                  onClick={() => setCardId(e.id)}
                  className={`border rounded-lg px-2 xs:px-4 py-2 text-xs xs:text-base w-16 xs:w-32 text-center cursor-pointer hover:border-orange-300 ${
                    cardId === e?.id
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
      {priceItem && (
        <div className=" w-full border rounded-2xl shadow-md h-fit flex flex-col p-3 xs:p-6 gap-6">
          <div className="flex flex-col justify-between">
            <p>{t("PRICE")}</p>
            <FormControl className="w-full">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={handleChangeMethod}
              >
                {priceItem?.listFees &&
                  priceItem?.listFees?.map((e) => (
                    <div className="flex items-center justify-between w-full">
                      <FormControlLabel
                        value={e?.id}
                        control={<Radio />}
                        label={
                          paymentMethods &&
                          paymentMethods?.find(
                            (p) => p?.code === e?.paymentMethodCode
                          )
                            ? paymentMethods?.find(
                                (p) => p?.code === e?.paymentMethodCode
                              )?.name + ` (${e?.paymentMethodCode})`
                            : e?.paymentMethodCode
                        }
                      />
                      <p>
                        {(amount ? e?.price * amount : 0)?.toLocaleString(
                          "vi-VN"
                        ) +
                          " " +
                          (e?.currency || "VND")}
                      </p>
                    </div>
                  ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      )}
      <div className=" w-full flex gap-6">
        <Button
          onClick={handleAddtoCart}
          style={{ border: "1px solid #0e1522" }}
          className={`w-full  !text-[#052d75] !min-h-11 !mt-4 !capitalize
               ${
                 amount && cardId && method
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
            amount && cardId && method
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
