import { requestCreateOrder } from "@/services/rechargeGameCard";
import { Button, CircularProgress, Divider } from "@mui/material";
import { ICardValue } from "./Cards";
import { HTTP_STATUS } from "@/constants";
import { toast } from "react-toastify";
import { useState } from "react";

interface IProps {
  cardName: string;
  cardValue: ICardValue;
  amount: number | null;
}
const ReSultSelectCard = ({ cardName, cardValue, amount }: IProps) => {
  const [loading, setLoading] = useState(false);

  const handleBuyCard = async () => {
    try {
      if (
        amount &&
        cardValue &&
        cardValue?.value &&
        cardValue.value * amount > 0
      ) {
        setLoading(true);
        const res = await requestCreateOrder({
          itemId: cardValue.id,
          amount: amount,
          method: 1,
        });
        console.log(res);
        if (res?.status === HTTP_STATUS.OK) {
          setLoading(false);
          toast.success("Mua thành công");
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
    <div className=" w-1/3">
      <p className="w-full bg-gray-300 py-2 px-4 text-xl my-4">
        Chi tiết giao dịch
      </p>
      <div className="mx-3">
        <div className="flex justify-between mb-4">
          <p>Thẻ: </p>
          <p className="text-red-500 font-medium">{cardName}</p>
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
        <Button
          onClick={handleBuyCard}
          className={`w-full bg-[#05296b] text-white min-h-11 mt-4 ${
            amount &&
            cardValue &&
            cardValue?.value &&
            cardValue.value * amount > 0
              ? "cursor-pointer hover:bg-[#30466b]"
              : "cursor-not-allowed opacity-50 hover:bg-[#05296b] hover:text-white"
          }`}
        >
          {loading && (
            <CircularProgress size={20} color="inherit" className="mr-2" />
          )}
          Thanh toán
        </Button>
      </div>
    </div>
  );
};
export default ReSultSelectCard;
