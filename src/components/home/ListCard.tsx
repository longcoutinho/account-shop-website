import { HTTP_STATUS } from "@/constants";
import { ICardsRes } from "@/interfaces/response/rechargeGameCard";
import { requestGetListCards } from "@/services/rechargeGameCard";
import { useEffect, useState } from "react";
import Image from "next/image";

const ListCards = () => {
  const [listCards, setListCards] = useState<ICardsRes[]>([]);

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

  return (
    <div className="w-full mt-10">
      <p className="w-full bg-gray-200 font-bold py-2 px-4 text-lg my-8">
        Danh sách thẻ
      </p>
      <div className="flex flex-wrap gap-3">
        {listCards?.map((g) => (
          <div
            key={g.id}
            className={` min-w-24 w-36 rounded-lg cursor-pointerborder-[#00000038] border-2 hover:scale-105  hover:shadow-lg transition-all hover:text-[#f3a44a] 
               hover:border-[#f3a44a]
                
            `}
          >
            <Image
              src={g.image}
              alt="game"
              width={135}
              height={100}
              className="w-full h-[100px] rounded-t-lg"
            />
            <p className="text-center text-sm my-2 hover:text-[#f3a44a]">
              {g.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListCards;
