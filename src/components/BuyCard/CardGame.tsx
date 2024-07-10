import Image from "next/image";
import { useRouter } from "next/router";
import { PageURL } from "@/constants";
import { ICardsRes } from "@/interfaces/response/rechargeGameCard";

interface IProps {
  item: ICardsRes;
}
const CardGame = ({ item }: IProps) => {
  const router = useRouter();

  const handleViewDetail = () => {
    router.push(PageURL.BUY_CARD + `/${item?.id}`);
  };

  return (
    <div
      onClick={handleViewDetail}
      className="cursor-pointer relative border rounded-2xl shadow-md h-48 mg:h-52 pt-24 mg:pt-32 flex flex-col items-center gap-2 hover:border-orange-300"
    >
      <Image
        src={item?.image ? item?.image : "/img/logo.png"}
        alt=""
        width={140}
        height={140}
        className="rounded-2xl absolute -top-7 h-28 w-28 mg:h-36 mg:w-36 object-contain border bg-white"
      />
      {/* <p>{productDetail.des}</p> */}
      <p className="text-lg font-semibold text-center px-2 line-clamp-2">
        {item.name}
      </p>
    </div>
  );
};
export default CardGame;
