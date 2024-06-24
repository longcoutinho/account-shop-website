import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ICardsRes } from "@/interfaces/response/rechargeGameCard";

interface IProps {
  type?: number;
}

const ListCard = ({ type }: IProps) => {
  const { cards } = useSelector((state: RootState) => state.card);

  return (
    <>
      {cards ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 mg:grid-cols-4 xl:grid-cols-5 gap-x-2 sm:gap-x-3 mg:gap-x-4 pt-4 gap-y-16">
          {cards?.map((e: ICardsRes) => (
            <p>{e?.name}</p>
          ))}
        </div>
      ) : (
        <p className="text-center w-full mt-10 text-2xl ">No data</p>
      )}
    </>
  );
};
export default ListCard;
