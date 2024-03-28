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
export interface ICardValue {
  value: number;
  id: number;
}
const SelectCard = () => {
  const [listCards, setListCards] = useState<ICardsRes[]>([]);
  const [listItems, setListItems] = useState<IItemCardRes[]>([]);
  const [cardName, setCardName] = useState<string>("");
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

  return (
    <div className=" max-w-[960px] mx-auto flex w-full gap-4 my-6">
      <div className=" flex flex-col w-2/3">
        <p className="w-full bg-gray-300 font-bold py-2 px-4 text-lg my-4">
          Chọn card
        </p>
        {listCards?.map((g) => (
          <div
            key={g.id}
            onClick={() => {
              handleGetListItemCard(g.id.toString());
              setCardName(g.name);
            }}
            className={` p-3 max-w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ${
              g.name === cardName
                ? " border-[#f3a44a] shadow-md border-2"
                : " border-[#00000038] border"
            }`}
          >
            <p>{g.name}</p>
          </div>
        ))}
        {listItems?.length > 0 && (
          <>
            <p className="w-full bg-gray-300 font-bold py-2 px-4 text-lg my-4">
              Chọn mệnh giá
            </p>
            <div className="grid grid-cols-6 gap-2">
              {listItems?.map((i) => (
                <div
                  key={i.id}
                  onClick={() => setCardValue({ value: i.price, id: i.id })}
                  className={` p-3 max-w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ${
                    i.id === cardValue.id
                      ? " border-[#f3a44a] shadow-md border-2"
                      : " border-[#00000038] border"
                  }`}
                >
                  <p>{i.price.toLocaleString("vi-VN")}đ</p>
                </div>
              ))}
            </div>
            <div className="flex mt-8 justify-between items-center">
              <p className="text-base font-semibold">Số lượng: </p>
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
      <ReSultSelectCard
        cardName={cardName}
        cardValue={cardValue}
        amount={amount}
      />
    </div>
  );
};
export default SelectCard;
