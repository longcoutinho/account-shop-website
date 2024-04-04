import { Button } from "@mui/material";
import { ICardValue } from "./Cards";
import { LOCALSTORAGE_KEY, PageURL } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { setBuyNow, setItemInCart, setOrderDetail } from "@/redux/slices/cart";
import { RootState } from "@/redux/store";
import { ICardsRes } from "@/interfaces/response/rechargeGameCard";
import { useRouter } from "next/router";

interface IProps {
  card?: ICardsRes;
  cardValue: ICardValue;
  amount: number | null;
  reset: () => void;
}
const ReSultSelectCard = ({ card, cardValue, amount, reset }: IProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

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
      reset();
    }
  };
  const handleClickBuyNow = () => {
    const data = {
      item: card,
      price: cardValue.value,
      amount: amount || 0,
    };
    dispatch(setBuyNow(true));
    dispatch(setOrderDetail([data]));
    router?.push(PageURL.PAYMENT);
  };
  return (
    <div>
      <p className="w-full bg-gray-200 py-2 px-4 text-xl my-4">Chi tiết</p>
      <div className="mx-3">
        <div className="flex justify-between mb-4">
          <p>Thẻ: </p>
          <p className="text-red-500 font-medium">{card?.name}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Mệnh giá thẻ: </p>
          <p className="text-red-500 font-medium">
            {cardValue?.value?.toLocaleString("vi-VN")}đ{" "}
          </p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Số lượng: </p>
          <p className="text-red-500 font-medium">{amount}</p>
        </div>
        <hr className="text-black mb-4" />
        <div className="flex justify-between mb-4">
          <p>Tổng tiền: </p>
          <p className="text-red-500 font-semibold text-xl">
            {amount && cardValue && cardValue?.value
              ? (cardValue.value * amount)?.toLocaleString("vi-VN")
              : 0}
            đ
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleAddtoCart}
            style={{ border: "1px solid #0e1522" }}
            className={`w-full  text-[#052d75] min-h-11 mt-4 capitalize ${
              amount &&
              cardValue &&
              cardValue?.value &&
              cardValue.value * amount > 0
                ? "cursor-pointer hover:bg-[#052d751f]"
                : "cursor-not-allowed opacity-50 hover:bg-white"
            }`}
          >
            Thêm vào giỏ
          </Button>
          <Button
            onClick={handleClickBuyNow}
            className={`w-full bg-[#052d75] text-white min-h-11 mt-4 capitalize ${
              amount &&
              cardValue &&
              cardValue?.value &&
              cardValue.value * amount > 0
                ? "cursor-pointer hover:bg-[#30466b]"
                : "cursor-not-allowed opacity-50 hover:bg-[#052d75] hover:text-white"
            }`}
          >
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ReSultSelectCard;
