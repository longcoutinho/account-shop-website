import { HTTP_STATUS } from "@/constants";
import {
  ICardsRes,
  IItemCardRes,
} from "@/interfaces/response/rechargeGameCard";
import {
  requestGetItemCard,
  requestGetListCards,
} from "@/services/rechargeGameCard";
import { useEffect, useState } from "react";
import ReSultSelectCard from "./Result";
import { NumberInput } from "../NumberInput";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export interface ICardValue {
  value: number;
  id: number;
}

const SelectCard = () => {
  const { t } = useTranslation("common");
  const [listCards, setListCards] = useState<ICardsRes[]>([]);
  const [listItems, setListItems] = useState<IItemCardRes[]>([]);
  const [card, setCard] = useState<ICardsRes>();
  const [cardValue, setCardValue] = useState<ICardValue>({ value: 0, id: 0 });
  const [amount, setAmount] = useState<number | null>(0);

  useEffect(() => {
    renderListCards();
  }, []);

  const renderListCards = async () => {
    try {
      const res = await requestGetListCards();
      if (res?.status === HTTP_STATUS.OK) {
        setListCards(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetListItemCard = async (id: string) => {
    try {
      const res = await requestGetItemCard(id);
      if (res?.status === HTTP_STATUS.OK) {
        setListItems(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleReset = () => {
    setCardValue({ value: 0, id: 0 });
    setAmount(0);
  };
  return (
    <div className="flex w-full gap-4 flex-col lg:flex-row">
      <div className=" flex flex-col w-full lg:w-2/3">
        <p className="w-full bg-gray-200 font-bold py-2 px-4 text-lg my-4">
          {t("PICK_CARD")}
        </p>
        <div className="flex flex-wrap gap-2">
          {listCards?.map((g) => (
            <div
              key={g.id}
              onClick={() => {
                handleGetListItemCard(g.id.toString());
                setCard(g);
              }}
              className={`w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ${
                g.id === card?.id
                  ? " border-[#f3a44a] shadow-md border-2"
                  : " border-[#1b1b1b1f] border-2"
              }`}
            >
              <Image
                src={g.image}
                alt="card"
                width={110}
                height={50}
                className=" mx-auto w-full h-[80px]"
              />
            </div>
          ))}
        </div>
        {listItems?.length > 0 && (
          <>
            <p className="w-full bg-gray-200 font-bold py-2 px-4 text-lg my-4">
              {t("PICK_DENOM")}
            </p>
            <div className="grid grid-cols-4 gap-2">
              {listItems?.map((i) => (
                <div
                  key={i.id}
                  onClick={() => setCardValue({ value: i.price, id: i.id })}
                  className={` p-3 w-full text-center rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ${
                    i.id === cardValue.id
                      ? " border-[#f3a44a] shadow-md border-2"
                      : " border-[#1b1b1b1f] border-2"
                  }`}
                >
                  <p>{i.price.toLocaleString("vi-VN")}đ</p>
                </div>
              ))}
            </div>
            <div className="flex mt-8 justify-between items-center">
              <p className="text-base font-semibold">{t("QUANTITY")}: </p>
              <NumberInput
                defaultValue={1}
                value={amount}
                min={1}
                onChange={(event, newValue) => setAmount(newValue)}
              />
            </div>
          </>
        )}
      </div>
      <div className="w-full lg:w-1/3">
        <ReSultSelectCard
          card={card}
          cardValue={cardValue}
          amount={amount}
          reset={handleReset}
        />
      </div>
    </div>
  );
};
export default SelectCard;
