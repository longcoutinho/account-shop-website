import { HTTP_STATUS } from "@/constants";
import { IGamesRes } from "@/interfaces/response/rechargeGameCard";
import { requestGetListGames } from "@/services/rechargeGameCard";
import { useEffect, useState } from "react";
import Image from "next/image";

const ListGames = () => {
  const [listGames, setListGames] = useState<IGamesRes[]>([]);

  useEffect(() => {
    renderListGames();
  }, []);

  const renderListGames = async () => {
    try {
      const res = await requestGetListGames();
      if (res?.status === HTTP_STATUS.OK) {
        setListGames(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full mt-10">
      <p className="w-full bg-gray-200 font-bold py-2 px-4 text-lg my-8">
        Danh sách game
      </p>
      <div className="flex flex-wrap gap-3">
        {listGames?.map((g) => (
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
export default ListGames;
